

import React, { useState } from 'react';

import  styles from '../../cssfolder/Admindashboardcss/Adminreports.module.css';


const Adminreports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState(new Set());

  const chartData = [
    { month: 'Jan', value: 11, height: '55%' },
    { month: 'Feb', value: 5, height: '25%' },
    { month: 'Mar', value: 14, height: '70%' },
    { month: 'Apr', value: 17, height: '85%' },
    { month: 'May', value: 19, height: '95%' },
    { month: 'Jun', value: 16, height: '80%' },
    { month: 'Jul', value: 10, height: '50%' },
    { month: 'Aug', value: 7, height: '35%' },
    { month: 'Sep', value: 15, height: '75%' },
    { month: 'Oct', value: 4, height: '20%' },
    { month: 'Nov', value: 13, height: '65%' },
    { month: 'Dec', value: 4, height: '20%' }
  ];

  const projectsData = [
    {
      id: 1,
      name: 'Hendry',
      projectName: 'UI/UX Design',
      startDate: '25/03/2022',
      endDate: '25/03/2022',
      freelancer: 'Hendry',
      milestones: '04',
      status: 'completed'
    },
    {
      id: 2,
      name: 'Mark',
      projectName: 'Doccore',
      startDate: '28-02-2022',
      endDate: '21-02-2021',
      freelancer: 'Mark',
      milestones: '05',
      status: 'progress'
    }
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(new Set(projectsData.map(project => project.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleRowSelect = (projectId) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(projectId)) {
      newSelectedRows.delete(projectId);
    } else {
      newSelectedRows.add(projectId);
    }
    setSelectedRows(newSelectedRows);
  };

  const filteredProjects = projectsData.filter(project =>
    Object.values(project).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.breadcrumb}>Home / Reports</div>
        <h1 className={styles.pageTitle}>Reports</h1>
      </div>

      {/* Navigation Tabs */}
      <div className={styles.navTabs}>
        <a href="#" className={`${styles.navTab} ${styles.active}`}>Projects</a>
        <a href="#" className={styles.navTab}>Bidding</a>
        <a href="#" className={styles.navTab}>Invoices</a>
        <a href="#" className={styles.navTab}>Earnings</a>
      </div>

      {/* Projects Report Chart */}
      <div className={styles.reportSection}>
        <div className={styles.reportHeader}>
          <h2 className={styles.reportTitle}>Projects Report</h2>
          <select className={styles.yearSelector}>
            <option>2022</option>
            <option>2021</option>
            <option>2023</option>
          </select>
        </div>
        
        <div className={styles.chartContainer}>
          <div className={styles.yAxis}>
            <div>20</div>
            <div>15</div>
            <div>10</div>
            <div>5</div>
            <div>0</div>
          </div>
          
          {chartData.map((data, index) => (
            <div 
              key={index}
              className={styles.chartBar} 
              style={{ height: data.height }}
              title={`${data.month}: ${data.value} projects`}
            >
              <div className={styles.chartLabel}>{data.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Table */}
      <div className={styles.projectsSection}>
        <div className={styles.projectsHeader}>
          <h2 className={styles.projectsTitle}>Projects</h2>
          <button className={styles.exportBtn}>📊</button>
        </div>

        <div className={styles.tableControls}>
          <div className={styles.entriesSelector}>
            <select className={styles.entriesSelect}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className={styles.searchBox}>
            <label>Search:</label>
            <input 
              type="text" 
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearch}
              placeholder=""
            />
          </div>
        </div>

        <table className={styles.projectsTable}>
          <thead>
            <tr>
              <th className={styles.tableHeader}>
                <input 
                  type="checkbox" 
                  className={styles.checkbox}
                  onChange={handleSelectAll}
                  checked={selectedRows.size === projectsData.length}
                />
              </th>
              <th className={styles.tableHeader}>
                Name <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>
                Project Name <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>
                Start Date <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>
                End Date <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>
                Freelancer <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>Milestones</th>
              <th className={styles.tableHeader}>
                Status <span className={styles.sortIndicator}>↕</span>
              </th>
              <th className={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    checked={selectedRows.has(project.id)}
                    onChange={() => handleRowSelect(project.id)}
                  />
                </td>
                <td className={styles.tableCell}>{project.name}</td>
                <td className={`${styles.tableCell} ${styles.projectName}`}>
                  {project.projectName}
                </td>
                <td className={styles.tableCell}>{project.startDate}</td>
                <td className={styles.tableCell}>{project.endDate}</td>
                <td className={styles.tableCell}>{project.freelancer}</td>
                <td className={styles.tableCell}>{project.milestones}</td>
                <td className={styles.tableCell}>
                  <span className={project.status === 'completed' ? 
                    styles.statusCompleted : styles.statusProgress}>
                    {project.status === 'completed' ? 'Completed' : 'In progress'}
                  </span>
                </td>
                <td className={styles.tableCell}>
                  <button className={`${styles.actionBtn} ${styles.editBtn}`}>✏️</button>
                  <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Adminreports;