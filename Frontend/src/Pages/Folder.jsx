import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import "../Css/Folder.css";

export default function Folder() {
    const { id } = useParams();
    const [folderInfo, setFolderInfo] = useState(null);
    const [files, setFiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedfile, setSelectedFile] = useState(null);
    const [fileToDelete, setFileToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const getFileIcon = (fileName) => {
        if (!fileName) return "fa-regular fa-file-lines";
        const ext = fileName.split(".").pop().toLowerCase();
        if (["png", "jpg", "jpeg", "webp", "gif", "svg", "bmp"].includes(ext)) {
            return "fa-solid fa-file-image";
        }
        if (["pdf"].includes(ext)) {
            return "fa-solid fa-file-pdf";
        }
        if (["mp4", "mkv", "mov", "avi", "webm"].includes(ext)) {
            return "fa-solid fa-file-video";
        }
        if (["mp3", "wav", "m4a", "flac", "ogg", "aac"].includes(ext)) {
            return "fa-solid fa-file-audio";
        }
        if (["zip", "rar", "7z", "tar", "gz"].includes(ext)) {
            return "fa-solid fa-file-zipper";
        }
        if (["js", "jsx", "ts", "tsx", "html", "css", "json", "py", "java", "cpp", "c", "rs", "go", "php", "sql"].includes(ext)) {
            return "fa-solid fa-file-code";
        }
        return "fa-regular fa-file-lines";
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setUploadProgress(0);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
            setUploadProgress(0);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleUpload = async () => {
        if (!selectedfile) return;
        const formData = new FormData();
        formData.append("file", selectedfile);
        setIsUploading(true);
        setUploadProgress(0);

        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/upload/${id}`,
                formData,
                {
                    withCredentials: true,
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.total) {
                            const percentCompleted = Math.round(
                                (progressEvent.loaded * 100) / progressEvent.total
                            );
                            setUploadProgress(percentCompleted);
                        }
                    },
                }
            );
            setSelectedFile(null);
            setUploadProgress(0);
            await fetchFiles();
        } catch (err) {
            console.error("Upload error:", err);
            const errorMsg =
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Upload Failed. Please check file size & connection.";
            setErrorMessage(errorMsg);
        } finally {
            setIsUploading(false);
        }
    };

    const fetchFolderInfo = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/folders/${id}`, {
                withCredentials: true,
            });
            if (response.data?.data) {
                setFolderInfo(response.data.data);
            }
        } catch (err) {
            console.error("Failed to load folder info", err);
        }
    };

    const fetchFiles = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/folders/${id}/files`,
                {
                    withCredentials: true,
                }
            );
            setFiles(response.data.data || []);
        } catch (err) {
            console.error("Failed to fetch files", err);
        }
    };

    const handleView = async (fileId) => {
        window.open(
            `${import.meta.env.VITE_API_URL}/files/${fileId}/view`,
            "_blank"
        );
    };

    const handleConfirmDelete = async () => {
        if (!fileToDelete) return;
        setIsDeleting(true);
        try {
            await axios.delete(
                `${import.meta.env.VITE_API_URL}/files/${fileToDelete._id}`,
                {
                    withCredentials: true,
                }
            );
            setFileToDelete(null);
            await fetchFiles();
        } catch (err) {
            console.error(err);
            setErrorMessage("Failed to delete the file. Please try again.");
        } finally {
            setIsDeleting(false);
        }
    };

    useEffect(() => { 
        fetchFolderInfo();
        fetchFiles();
    }, [id]);

    const filteredFiles = files.filter(f => 
        f.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="folder-page-root">
            {/* Header & Back Navigation */}
            <div className="folder-header-bar">
                <div className="folder-header-left">
                    <Link to="/dashboard" className="back-link-btn">
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Vaults</span>
                    </Link>
                    <div className="vault-breadcrumb">
                        <span className="breadcrumb-separator">/</span>
                        <div className="vault-title-badge">
                            <i className="fa-solid fa-folder-open"></i>
                            <span>{folderInfo?.folderName || "Vault Files"}</span>
                        </div>
                    </div>
                </div>

                <div className="folder-header-stats">
                    <span className="file-count-badge">
                        <i className="fa-solid fa-layer-group"></i>
                        <span>{files.length} {files.length === 1 ? 'file' : 'files'}</span>
                    </span>
                </div>
            </div>

            {/* Upload Toolbar Card */}
            <div 
                className={`upload-card-wrapper ${isDragOver ? "drag-over-active" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="upload-main-row">
                    <div className="upload-left">
                        <button 
                            type="button"
                            className="file-select-btn" 
                            onClick={() => document.getElementById("fileInput").click()}
                            disabled={isUploading}
                        >
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <span>Choose or Drop File</span>
                        </button>

                        <input
                            id="fileInput"
                            type="file"
                            hidden
                            onChange={handleFileChange}
                            disabled={isUploading}
                        />

                        {selectedfile && (
                            <span className="selected-file-badge" title={selectedfile.name}>
                                <i className="fa-solid fa-file"></i>
                                <span>{selectedfile.name}</span>
                                <button 
                                    type="button" 
                                    className="remove-selected-btn"
                                    onClick={() => setSelectedFile(null)}
                                    disabled={isUploading}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </span>
                        )}
                    </div>

                    <button 
                        type="button"
                        className="upload-action-btn" 
                        onClick={handleUpload}
                        disabled={!selectedfile || isUploading}
                    >
                        {isUploading ? (
                            <>
                                <i className="fa-solid fa-circle-notch fa-spin"></i>
                                <span>Uploading {uploadProgress}%</span>
                            </>
                        ) : (
                            <>
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                <span>Upload to Cloud</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Realtime Upload Progress Bar */}
                {isUploading && (
                    <div className="upload-progress-container">
                        <div className="progress-info-row">
                            <span className="progress-label">
                                <i className="fa-solid fa-arrow-up"></i> Transferring to Telegram Storage...
                            </span>
                            <span className="progress-percent">{uploadProgress}%</span>
                        </div>
                        <div className="progress-bar-track">
                            <div 
                                className="progress-bar-fill"
                                style={{ width: `${uploadProgress}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* File Search Filter Bar */}
            {files.length > 0 && (
                <div className="file-search-bar-row">
                    <div className="file-search-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Filter files in this vault..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button 
                                type="button" 
                                className="clear-search-btn"
                                onClick={() => setSearchTerm("")}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        )}
                    </div>
                </div>
            )}

            {/* Files Grid Display */}
            {filteredFiles && filteredFiles.length > 0 ? (
                <div className="files-grid-container">
                    {filteredFiles.map((file) => (
                        <div key={file._id} className="file-item-card">
                            <div 
                                className="file-info-top" 
                                onClick={() => handleView(file._id)} 
                                title="Click to view file in new tab"
                            >
                                <div className="file-icon-box">
                                    <i className={getFileIcon(file.fileName)}></i>
                                </div>
                                <div className="file-text-meta">
                                    <p className="file-name-text">
                                        {file.fileName}
                                    </p>
                                    <span className="file-view-hint">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Preview
                                    </span>
                                </div>
                            </div>

                            <div className="file-actions-row">
                                <a
                                    href={`${import.meta.env.VITE_API_URL}/files/${file._id}/download`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="file-action-btn file-btn-download"
                                    title="Download file"
                                >
                                    <i className="fa-solid fa-download"></i>
                                    <span>Download</span>
                                </a>
                                <button 
                                    type="button"
                                    onClick={() => setFileToDelete(file)} 
                                    className="file-action-btn file-btn-delete"
                                    title="Delete file"
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : searchTerm ? (
                <div className="empty-search-state">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h3>No files found</h3>
                    <p>No files matched your search "{searchTerm}".</p>
                </div>
            ) : (
                <div className="empty-files-placeholder">
                    <i className="fa-regular fa-folder-open"></i>
                    <h3>Vault is Empty</h3>
                    <p>Choose or drag a file into the upload zone above to securely store it in this vault.</p>
                </div>
            )}

            {/* Custom Delete Confirmation Modal */}
            {fileToDelete && (
                <div 
                    className="confirm-modal-overlay" 
                    onClick={() => !isDeleting && setFileToDelete(null)}
                >
                    <div 
                        className="confirm-modal-card" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="confirm-modal-icon-wrapper">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <h3 className="confirm-modal-title">Delete File?</h3>
                        <p className="confirm-modal-desc">
                            Are you sure you want to permanently delete <strong className="highlight-filename">{fileToDelete.fileName}</strong>? This action cannot be undone.
                        </p>
                        <div className="confirm-modal-actions">
                            <button 
                                type="button" 
                                className="modal-btn modal-btn-cancel" 
                                onClick={() => setFileToDelete(null)}
                                disabled={isDeleting}
                            >
                                Cancel
                            </button>
                            <button 
                                type="button" 
                                className="modal-btn modal-btn-delete" 
                                onClick={handleConfirmDelete}
                                disabled={isDeleting}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                                <span>{isDeleting ? "Deleting..." : "Delete Permanently"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Upload Failure / Error Modal */}
            {errorMessage && (
                <div 
                    className="confirm-modal-overlay" 
                    onClick={() => setErrorMessage(null)}
                >
                    <div 
                        className="confirm-modal-card" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="confirm-modal-icon-wrapper">
                            <i className="fa-solid fa-circle-exclamation"></i>
                        </div>
                        <h3 className="confirm-modal-title">Operation Failed</h3>
                        <p className="confirm-modal-desc">
                            {errorMessage}
                        </p>
                        <div className="confirm-modal-actions">
                            <button 
                                type="button" 
                                className="modal-btn modal-btn-cancel" 
                                style={{ 
                                    background: 'var(--text-primary)', 
                                    color: 'var(--color-canvas)', 
                                    width: '100%',
                                    fontWeight: '700'
                                }}
                                onClick={() => setErrorMessage(null)}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}