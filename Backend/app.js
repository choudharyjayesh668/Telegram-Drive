const mongoose = require("mongoose");
const express = require("express");
require('dotenv').config();
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const Bot = require("node-telegram-bot-api");
const multer = require("multer");
const upload = multer({
    storage: multer.memoryStorage(),
});
const axios = require('axios');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://telegram-drive-sepia.vercel.app",
    "https://telegram-drive-hv560fs16-jayesh-choudhary.vercel.app",
    "https://telegram-drive-7y579sp3b-jayesh-choudhary.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });

const User = require("./models/user");
const IsLoggedIn = require("./middleware/IsLoggedIn");
const Folder = require("./models/folder");
const File = require("./models/file");
const FormData = require("form-data");
app.post("/signup", async (req, res) => {
    try {
        const userData = req.body;
        let { email, password, username } = req.body;
        email = email.trim().toLowerCase();
        username = username.trim();
        const existingUser = await User.findOne({ email });
        if (!username) {
            return res.json({
                message: "Username is Required",
            });
        }
        if (!email) {
            return res.json({
                message: "Email is Required",
            });
        };
        if (!password) {
            return res.json({
                message: "Password is Required",
            });
        }
        if (existingUser) {
            return res.status(409).json({
                message: "User Already Exists",
            });
        };
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
        });
        await newUser.save();
        res.json({
            message: "Data Received TO MongoDB"
        });
    }
    catch (err) {
        res.json(err.message);
    }
});

app.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email.trim().toLowerCase();
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({
                message: "Invalid Email or Password",
            });
        };
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            });
        };
        const token = JWT.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({
            message: "Access Granted",
        });
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
        });
    };
});

app.get("/dashboard", IsLoggedIn, (req, res) => {
    res.status(200).json({
        message: "Welcome TO Homepage",
        userId: req.userId,
    });
});
app.post("/logout", (req, res) => {
    console.log("Logout Was Clicked By Frontend");
    res.clearCookie("token");
    res.status(200).json({
        message: "Logged Out Successfully",
    });
});

app.post("/createFolder", IsLoggedIn, async (req, res) => {
    try {
        const folderdata = req.body;
        console.log(folderdata);
        console.log(req.userId);
        const newFolder = new Folder({
            folderName: folderdata.name,
            owner: req.userId,
        });
        await newFolder.save();
        res.status(201).json({
            message: "Folder Created",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
app.get("/folders", IsLoggedIn, async (req, res) => {
    try {
        const userFolders = await Folder.find({ owner: req.userId });
        // console.log(userFolders);
        res.status(200).json({
            message: "Folder Shown",
            data: userFolders,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
})
app.get("/folders/:id", IsLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        const folder = await Folder.findOne({ _id: id, owner: req.userId });
        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        res.status(200).json({
            data: folder,
            message: "Folder found",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
app.post("/upload/:folderId", IsLoggedIn, upload.single("file"), async (req, res) => {
    const formdata = req.body;
    // console.log(req.file); 
    // console.log(formdata);
    const formData = new FormData();
    formData.append("document", req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
    });
    formData.append("chat_id", process.env.CHANNEL_ID);
    // console.log(req.file.originalname);
    // console.log(process.env.CHANNEL_ID);
    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendDocument`,

            formData,
            {
                headers: formData.getHeaders(),
            },

        );
        //  console.log(response.data.result.document);
        const { folderId } = req.params;
        // console.log(response.data.result);
        const telegramFileId =
            response.data.result.document?.file_id ||
            response.data.result.video?.file_id;
        const newFile = new File({
            fileName: req.file.originalname,
            telegramFileId,
            messageId: response.data.result.message_id,
            owner: req.userId,
            folder: folderId,
        });
        await newFile.save();
        console.log("Saved in MongoDB");
        // console.log(response.data);

        res.status(200).json({
            message: "File uploaded to Telegram",
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Upload failed",
        });
    }
})
app.get("/folders/:folderId/files", IsLoggedIn, async (req, res) => {
    try {
        const { folderId } = req.params;
        const usersFiles = await File.find({ owner: req.userId, folder: folderId });
        res.status(201).json({
            data: usersFiles,
            message: "Files Shown",
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
});

app.get("/files/:fileId/view", IsLoggedIn, async (req, res) => {
    const { fileId } = req.params;
    const file = await File.findOne({ _id: fileId, owner: req.userId });
    if (!file) {
        return res.status(404).json({
            message: "File not found",
        });
    }
    console.log(file.telegramFileId);
    const response = await axios.get(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getFile`,
        {
            params: {
                file_id: file.telegramFileId,
            },
        }
    );
    const filePath = response.data.result.file_path;

    const telegramUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${filePath}`;
    const telegramResponse = await axios.get(telegramUrl, {
        responseType: "stream",
    });
    res.setHeader(
    "Content-Type",
    telegramResponse.headers["content-type"] || "application/octet-stream"
);

res.setHeader(
    "Content-Disposition",
    `inline; filename="${file.fileName}"`
);

telegramResponse.data.pipe(res);
});
app.get("/files/:fileId/download", IsLoggedIn, async (req, res) => {
    const { fileId } = req.params;
    const file = await File.findOne({ _id: fileId, owner: req.userId });
    if (!file) {
        return res.status(404).json({
            message: "File not found",
        });
    }
    console.log(file.telegramFileId);
    const response = await axios.get(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getFile`,
        {
            params: {
                file_id: file.telegramFileId,
            },
        }
    );
    const filePath = response.data.result.file_path;

    const telegramUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${filePath}`;
    const telegramResponse = await axios.get(telegramUrl, {
        responseType: "stream",
    });
    res.setHeader(
        "Content-Type",
        telegramResponse.headers["content-type"] || "application/octet-stream"
    );

    res.setHeader(
        "Content-Disposition",
        `attachment; filename="${file.fileName}"`
    );

    telegramResponse.data.pipe(res);
});
app.delete("/files/:fileId", IsLoggedIn, async (req, res) => {
    try {
        const { fileId } = req.params;

        const file = await File.findOne({
            _id: fileId,
            owner: req.userId,
        });

        if (!file) {
            return res.status(404).json({
                message: "File not found",
            });
        }
        await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/deleteMessage`,
            {
                chat_id: process.env.CHANNEL_ID,
                message_id: file.messageId,
            }
        );
        await file.deleteOne();
        res.status(200).json({
            message: "File deleted successfully",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    }
});
app.patch("/folders/:id", IsLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        const { folderName } = req.body;

        // Validation
        if (!folderName || folderName.trim() === "") {
            return res.status(400).json({
                message: "Folder name is required",
            });
        }

        // Check if folder belongs to the logged-in user
        const folder = await Folder.findOne({
            _id: id,
            owner: req.userId,
        });

        if (!folder) {
            return res.status(404).json({
                message: "Folder not found",
            });
        }

        // Prevent duplicate folder names (optional but recommended)
        const existingFolder = await Folder.findOne({
            owner: req.userId,
            folderName: folderName.trim(),
            _id: { $ne: id },
        });

        if (existingFolder) {
            return res.status(409).json({
                message: "Folder with this name already exists",
            });
        }

        // Rename folder
        folder.folderName = folderName.trim();
        await folder.save();

res.status(200).json({
    message: "Folder renamed successfully",
    data: folder,
});

    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});
app.delete("/folders/:id", IsLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;

        // Check folder belongs to user
        const folder = await Folder.findOne({
            _id: id,
            owner: req.userId,
        });

        if (!folder) {
            return res.status(404).json({
                message: "Folder not found",
            });
        }

        // Find all files inside the folder
        const files = await File.find({
            owner: req.userId,
            folder: id,
        });

        // Delete every file from Telegram
        for (const file of files) {
            try {
                await axios.post(
                    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/deleteMessage`,
                    {
                        chat_id: process.env.CHANNEL_ID,
                        message_id: file.messageId,
                    }
                );
            } catch (err) {
                console.log(
                    `Failed to delete Telegram message ${file.messageId}`
                );
            }
        }

        // Delete file records from MongoDB
        await File.deleteMany({
            owner: req.userId,
            folder: id,
        });

        // Delete the folder
        await Folder.deleteOne({
            _id: id,
            owner: req.userId,
        });

        res.status(200).json({
            message: "Folder and all files deleted successfully",
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message,
        });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});