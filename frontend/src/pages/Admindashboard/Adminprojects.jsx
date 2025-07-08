import React, { useState } from 'react';
import Sidebar from '../../components/Adminsidebar';
import '../../cssfolder/Admindashboardcss/Adminprojects.css';

export default function Adminprojects() {
    const initialProjects = [
        { id: 1, logo: '🎨', title: 'Website Designer Required For Directory Theme', budget: '2222', progress: 'low', technology: 'Angular', company: 'Amaze TECh', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 2, logo: '🌿', title: 'Lorem Ipsum is simply dummy text of', budget: '5755', progress: 'medium', technology: 'Laravel', company: 'Park INC', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 3, logo: '🌊', title: 'It is a long established fact that a reader', budget: '5755', progress: 'low', technology: 'Vue', company: 'Tsch Zone', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 4, logo: '✨', title: 'There are many variations of passages of Lorem', budget: '2333', progress: 'medium', technology: 'Golang', company: 'ABC Software', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 5, logo: '🔮', title: 'Website Designer Required For Directory Theme', budget: '2222', progress: 'low', technology: 'Node.js', company: 'Host Technologies', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 6, logo: '🔥', title: 'combined with a handful of model sentence structures', budget: '1500', progress: 'medium', technology: '.Net', company: 'SM Developer', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 7, logo: '🌸', title: 'Designer Required For Directory', budget: '2222', progress: 'low', technology: 'Java', company: 'Kind Software', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 8, logo: '🏺', title: 'Lorem Ipsum is therefore always free content', budget: '7789', progress: 'medium', technology: 'Python', company: 'Particles INC', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 9, logo: '💎', title: 'Required For Website Developer', budget: '2222', progress: 'low', technology: 'Codignator', company: 'Kind Software', startDate: '22-05-2022', dueDate: '22-05-2022' },
        { id: 10, logo: '🌈', title: 'Lorem Ipsum is therefore always free', budget: '7789', progress: 'medium', technology: 'React', company: 'Particles INC', startDate: '22-05-2022', dueDate: '22-05-2022' }
    ];

    const [projects, setProjects] = useState(initialProjects);
    
    // State for Modal and Editing
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    // Function to handle project deletion
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            setProjects(projects.filter(project => project.id !== id));
        }
    };

    // Functions for Editing Logic
    const handleEdit = (id) => {
        const projectToEdit = projects.find(project => project.id === id);
        setCurrentProject(projectToEdit);
        setIsModalOpen(true);
    };

    const handleSave = () => {
        setProjects(projects.map(project => 
            project.id === currentProject.id ? currentProject : project
        ));
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentProject({ ...currentProject, [name]: value });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    }

    return (
        <>
            <div>
                {/* Header -- THIS IS NOW RESTORED */}
                <div className="header">
                    <div className="logo">
                        <div className="logo-icon">K</div>
                        <span>Dev Shukra</span>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Start typing your Search.." />
                    </div>
                    <div className="user-section">
                      
                        <div className="notification-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </div>
                        <div className="user-avatar"></div>
                    </div>
                </div>

                <div className="containerprojects">
                    {/* Sidebar -- THIS IS NOW RESTORED */}
                    <Sidebar />

                    {/* Main Content */}
                    <div className="main-content">
                        {/* Page Header -- THIS IS NOW RESTORED */}
                        <div className="page-header">
                            <h1 className="page-title">Projects</h1>
                            <div className="breadcrumb">Home / Projects</div>
                        </div>

                        <div className="projects-section">
                            <div className="section-header">
                                <h2 className="section-title">Projects views</h2>
                            </div>

                            {/* Project Tabs -- THIS IS NOW RESTORED */}
                            <div className="project-tabs">
                                <button className="project-tab active">All ({projects.length})</button>
                                <button className="project-tab">Active (218)</button>
                                <button className="project-tab">In Active (03)</button>
                                <button className="project-tab">Trash (0)</button>
                            </div>

                            {/* Table Controls -- THIS IS NOW RESTORED */}
                            <div className="table-controls">
                                <div className="entries-control">
                                    <select id="entriesSelect">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span>entries per page</span>
                                </div>
                                <div className="search-control">
                                    <span>Search:</span>
                                    <input type="text" id="searchInput" placeholder="" />
                                </div>
                            </div>

                            {/* Projects Table -- THIS IS NOW DYNAMIC */}
                            <table className="projects-table">
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="sort-arrow active">↑</span>
                                        </th>
                                        <th>Logo</th>
                                        <th>Title</th>
                                        <th>Budget</th>
                                        <th>Progress</th>
                                        <th>Technology</th>
                                        <th>Company</th>
                                        <th>Start date</th>
                                        <th>Due date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project, index) => (
                                        <tr key={project.id}>
                                            <td>{index + 1}</td>
                                            <td><div className={`project-logo logo-${project.id}`}>{project.logo}</div></td>
                                            <td className="project-title">{project.title}</td>
                                            <td className="budget">${project.budget}</td>
                                            <td>
                                                <div className="progress-container">
                                                    <div className={`progress-bar progress-${project.progress}`}></div>
                                                </div>
                                            </td>
                                            <td><span className="tech-badge">{project.technology}</span></td>
                                            <td className="company-name">{project.company}</td>
                                            <td className="date">{project.startDate}</td>
                                            <td className="date">{project.dueDate}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn edit-btn" onClick={() => handleEdit(project.id)}>✏️</button>
                                                    <button className="action-btn delete-btn" onClick={() => handleDelete(project.id)}>🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Edit Project Modal --- */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Edit Project</h2>
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={currentProject.title} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Budget</label>
                            <input 
                                type="number" 
                                name="budget" 
                                value={currentProject.budget} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Technology</label>
                            <input 
                                type="text" 
                                name="technology" 
                                value={currentProject.technology} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div className="modal-actions">
                            <button onClick={handleSave} className="save-btn">Save Changes</button>
                            <button onClick={handleCloseModal} className="cancel-btn">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );    
}