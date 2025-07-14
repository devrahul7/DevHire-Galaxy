
import '../cssfolder/Adminprojects.css';

export default function Adminprojects(){
    return (<>

        <div>
     {/* Header  */}
    <div class="header">
        <div class="logo">
            <div class="logo-icon">K</div>
            <span>Dev Shukra</span>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Start typing your Search.."/>
        </div>
        <div class="user-section">
            <button class="filter-btn">
                <span>🔽</span>
            </button>
            <div class="notification-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </div>
            <div class="user-avatar"></div>
        </div>
    </div>

    <div class="container">
         {/* Sidebar  */}
        <div class="sidebar">
            <div class="sidebar-section">
                <div class="sidebar-title">Main</div>
                <a href="/admindashboard" class="sidebar-item">
                    <i>📊</i>
                    <span>Dashboard</span>
                </a>
                <a href="/adminprojects" class="sidebar-item active">
                    <i>📁</i>
                    <span>Projects</span>
                </a>
                <a href="/" class="sidebar-item">
                    <i>👤</i>
                    <span>Freelancer</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>💰</i>
                    <span>Deposit</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>💸</i>
                    <span>Withdrawn</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>📝</i>
                    <span>Transaction</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>📊</i>
                    <span>Reports</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>👥</i>
                    <span>Roles</span>
                </a>
                <a href="#" class="sidebar-item">
                    <i>⚙️</i>
                    <span>Settings</span>
                </a>
            </div>
        </div>

         {/* Main Content  */}
        <div class="main-content">
            <div class="page-header">
                <h1 class="page-title">Projects</h1>
                <div class="breadcrumb">Home / Projects</div>
            </div>

            <div class="projects-section">
                <div class="section-header">
                    <h2 class="section-title">Projects views</h2>
                </div>

                 {/* Project Tabs  */}
                <div class="project-tabs">
                    <button class="project-tab active">All (272)</button>
                    <button class="project-tab">Active (218)</button>
                    <button class="project-tab">In Active (03)</button>
                    <button class="project-tab">Trash (0)</button>
                </div>

                 {/* Table Controls  */}
                <div class="table-controls">
                    <div class="entries-control">
                        <select id="entriesSelect">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <span>entries per page</span>
                    </div>
                    <div class="search-control">
                        <span>Search:</span>
                        <input type="text" id="searchInput" placeholder=""/>
                    </div>
                </div>

                 {/* Projects Table  */}
                <table class="projects-table">
                    <thead>
                        <tr>
                            <th>
                                <span class="sort-arrow active">↑</span>
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
                        <tr>
                            <td>1</td>
                            <td><div class="project-logo logo-1">🎨</div></td>
                            <td class="project-title">Website Designer Required For Directory Theme</td>
                            <td class="budget">$2222</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-low"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Angular</span></td>
                            <td class="company-name">Amaze TECh</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><div class="project-logo logo-2">🌿</div></td>
                            <td class="project-title">Lorem Ipsum is simply dummy text of</td>
                            <td class="budget">$5755</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-medium"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Laravel</span></td>
                            <td class="company-name">Park INC</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><div class="project-logo logo-3">🌊</div></td>
                            <td class="project-title">It is a long established fact that a reader</td>
                            <td class="budget">$5755</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-low"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Vue</span></td>
                            <td class="company-name">Tsch Zone</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><div class="project-logo logo-4">✨</div></td>
                            <td class="project-title">There are many variations of passages of Lorem</td>
                            <td class="budget">$2333</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-medium"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Golang</span></td>
                            <td class="company-name">ABC Software</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><div class="project-logo logo-5">🔮</div></td>
                            <td class="project-title">Website Designer Required For Directory Theme</td>
                            <td class="budget">$2222</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-low"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Node.js</span></td>
                            <td class="company-name">Host Technologies</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><div class="project-logo logo-6">🔥</div></td>
                            <td class="project-title">combined with a handful of model sentence structures</td>
                            <td class="budget">$1500</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-medium"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">.Net</span></td>
                            <td class="company-name">SM Developer</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><div class="project-logo logo-7">🌸</div></td>
                            <td class="project-title">Designer Required For Directory</td>
                            <td class="budget">$2222</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-low"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Java</span></td>
                            <td class="company-name">Kind Software</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><div class="project-logo logo-8">🏺</div></td>
                            <td class="project-title">Lorem Ipsum is therefore always free content</td>
                            <td class="budget">$7789</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-medium"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Python</span></td>
                            <td class="company-name">Particles INC</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><div class="project-logo logo-9">💎</div></td>
                            <td class="project-title">Required For Website Developer</td>
                            <td class="budget">$2222</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-low"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">Codignator</span></td>
                            <td class="company-name">Kind Software</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><div class="project-logo logo-10">🌈</div></td>
                            <td class="project-title">Lorem Ipsum is therefore always free</td>
                            <td class="budget">$7789</td>
                            <td>
                                <div class="progress-container">
                                    <div class="progress-bar progress-medium"></div>
                                </div>
                            </td>
                            <td><span class="tech-badge">React</span></td>
                            <td class="company-name">Particles INC</td>
                            <td class="date">22-05-2022</td>
                            <td class="date">22-05-2022</td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit-btn">📝</button>
                                    <button class="action-btn delete-btn">🗑️</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </div>

    </>);
}