import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./DashBoard.css";

export default function Dashboard() {
    const navigate = useNavigate();

    const [foldercreation, setFolderCreation] = useState({ name: "" });
    const [createdFolder, setCreatedFolder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    // Modal States
    const [folderToRename, setFolderToRename] = useState(null);
    const [newFolderName, setNewFolderName] = useState("");
    const [folderToDelete, setFolderToDelete] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalError, setModalError] = useState("");

    const Logout = async () => {
        try {
            await axios.post(
                "http://localhost:3000/logout",
                {},
                { withCredentials: true }
            );
            navigate("/login");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

    const handleOnChange = (event) => {
        setFolderCreation({ [event.target.name]: event.target.value });
    };

    const fetchFolders = async () => {
        try {
            const response = await axios.get("http://localhost:3000/folders", {
                withCredentials: true,
            });
            setCreatedFolder(response.data.data || []);
        } catch (err) {
            console.error("Failed to fetch folders:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    const handleCreateFolder = async (event) => {
        event.preventDefault();
        if (!foldercreation.name.trim()) return;

        try {
            await axios.post(
                "http://localhost:3000/createFolder",
                foldercreation,
                { withCredentials: true }
            );
            setFolderCreation({ name: "" });
            await fetchFolders();
        } catch (err) {
            console.error("Create folder error:", err);
            alert(err.response?.data?.message || "Failed to create folder");
        }
    };

    const onClickFolder = (id) => {
        navigate(`/folders/${id}`);
    };

    // Open Rename Modal
    const openRenameModal = (e, folder) => {
        e.stopPropagation();
        setFolderToRename(folder);
        setNewFolderName(folder.folderName);
        setModalError("");
    };

    // Submit Rename
    const handleRenameSubmit = async (e) => {
        e.preventDefault();
        if (!newFolderName.trim() || !folderToRename) return;

        setIsSubmitting(true);
        setModalError("");

        try {
            await axios.patch(
                `http://localhost:3000/folders/${folderToRename._id}`,
                { folderName: newFolderName.trim() },
                { withCredentials: true }
            );
            setFolderToRename(null);
            setNewFolderName("");
            await fetchFolders();
        } catch (err) {
            console.error("Rename failed", err);
            setModalError(err.response?.data?.message || "Rename failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Open Delete Modal
    const openDeleteModal = (e, folder) => {
        e.stopPropagation();
        setFolderToDelete(folder);
        setModalError("");
    };

    // Submit Delete
    const handleDeleteSubmit = async () => {
        if (!folderToDelete) return;

        setIsSubmitting(true);
        try {
            await axios.delete(
                `http://localhost:3000/folders/${folderToDelete._id}`,
                { withCredentials: true }
            );
            setFolderToDelete(null);
            await fetchFolders();
        } catch (err) {
            console.error("Delete failed", err);
            setModalError(err.response?.data?.message || "Failed to delete folder");
        } finally {
            setIsSubmitting(false);
        }
    };

    const filteredFolders = createdFolder.filter(folder => 
        folder.folderName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard-root">
            {/* Navbar */}
            <div className="Navbar">
                <div className="left">
                    <i className="fa-brands fa-telegram logo"></i>
                    <p>Telegram Drive</p>
                </div>
                <div className="right">
                    <button type="button" onClick={Logout} className="logout" title="Sign out of Telegram Drive">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Header / Intro */}
            <div className="dashboard-header-block">
                <h1>Welcome To Telegram Drive</h1>
                <p className="dashboard-header-desc">
                    Your secure, encrypted vaults powered by Telegram Cloud.
                </p>
            </div>

            {/* Actions Bar (Search + Create Folder) */}
            <div className="dashboard-toolbar">
                <form onSubmit={handleCreateFolder} className="create-folder-form">
                    <div className="input-group">
                        <i className="fa-solid fa-folder-plus"></i>
                        <input
                            type="text"
                            placeholder="Enter new vault name..."
                            name="name"
                            value={foldercreation.name}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit">
                        <i className="fa-solid fa-plus"></i>
                        <span>Create Vault</span>
                    </button>
                </form>

                {createdFolder.length > 0 && (
                    <div className="search-folder-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Filter vaults..."
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
                )}
            </div>

            {/* Folders Grid */}
            {isLoading ? (
                <div className="loading-state-container">
                    <div className="app-loader-spinner"></div>
                    <p>Loading your vaults...</p>
                </div>
            ) : filteredFolders.length > 0 ? (
                <div className="folders-container">
                    {filteredFolders.map((folder) => (
                        <div
                            className="folder-card"
                            key={folder._id}
                            onClick={() => onClickFolder(folder._id)}
                            title={`Open ${folder.folderName}`}
                        >
                            <div className="folder-card-top">
                                <div className="folder-icon-wrapper">
                                    <i className="fa-solid fa-folder"></i>
                                </div>
                                <div className="folder-actions-pill" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        type="button"
                                        className="card-action-btn edit-btn"
                                        onClick={(e) => openRenameModal(e, folder)}
                                        title="Rename Vault"
                                    >
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                    <button
                                        type="button"
                                        className="card-action-btn delete-btn"
                                        onClick={(e) => openDeleteModal(e, folder)}
                                        title="Delete Vault & Contents"
                                    >
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="folder-card-bottom">
                                <p className="folder-title">{folder.folderName}</p>
                                <div className="folder-meta">
                                    <span>Open Vault</span>
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : searchTerm ? (
                <div className="empty-search-state">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <h3>No matching vaults</h3>
                    <p>No vaults found matching "{searchTerm}".</p>
                </div>
            ) : (
                <div className="folders-empty-state">
                    <i className="fa-solid fa-folder-closed"></i>
                    <h3>No Vaults Found</h3>
                    <p>Enter a vault name above to create your first encrypted Telegram Drive vault.</p>
                </div>
            )}

            {/* Custom Rename Folder Modal */}
            {folderToRename && (
                <div className="confirm-modal-overlay" onClick={() => !isSubmitting && setFolderToRename(null)}>
                    <div className="confirm-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="confirm-modal-icon-wrapper rename-icon-bg">
                            <i className="fa-solid fa-pen-to-square"></i>
                        </div>
                        <h3 className="confirm-modal-title">Rename Vault</h3>
                        <p className="confirm-modal-desc">
                            Enter a new name for your vault.
                        </p>

                        <form onSubmit={handleRenameSubmit} className="modal-form-inline">
                            <div className="modal-input-wrap">
                                <i className="fa-solid fa-folder"></i>
                                <input
                                    type="text"
                                    value={newFolderName}
                                    onChange={(e) => setNewFolderName(e.target.value)}
                                    placeholder="Enter vault name"
                                    autoFocus
                                    disabled={isSubmitting}
                                />
                            </div>
                            {modalError && <p className="modal-error-msg">{modalError}</p>}
                            <div className="confirm-modal-actions">
                                <button
                                    type="button"
                                    className="modal-btn modal-btn-cancel"
                                    onClick={() => setFolderToRename(null)}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="modal-btn modal-btn-save"
                                    disabled={isSubmitting || !newFolderName.trim()}
                                >
                                    {isSubmitting ? "Saving..." : "Save Changes"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Custom Delete Folder Modal */}
            {folderToDelete && (
                <div className="confirm-modal-overlay" onClick={() => !isSubmitting && setFolderToDelete(null)}>
                    <div className="confirm-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="confirm-modal-icon-wrapper">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                        <h3 className="confirm-modal-title">Delete Vault?</h3>
                        <p className="confirm-modal-desc">
                            Are you sure you want to delete <strong className="highlight-filename">{folderToDelete.folderName}</strong> and all files stored inside?
                        </p>
                        {modalError && <p className="modal-error-msg">{modalError}</p>}
                        <div className="confirm-modal-actions">
                            <button
                                type="button"
                                className="modal-btn modal-btn-cancel"
                                onClick={() => setFolderToDelete(null)}
                                disabled={isSubmitting}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="modal-btn modal-btn-delete"
                                onClick={handleDeleteSubmit}
                                disabled={isSubmitting}
                            >
                                <i className="fa-solid fa-trash-can"></i>
                                <span>{isSubmitting ? "Deleting..." : "Delete Permanently"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}