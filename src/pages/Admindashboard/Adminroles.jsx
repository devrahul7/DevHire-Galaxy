import '../../cssfolder/Admindashboardcss/Adminroles.css';

import React, { useState, useMemo } from 'react';
import { Plus, ChevronDown, Eye, Edit, Trash2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Adminroles = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Client' },
    { id: 3, name: 'Staff' }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc');

  // Filter and sort roles
  const filteredRoles = useMemo(() => {
    let filtered = roles.filter(role =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    
    return filtered;
  }, [roles, searchTerm, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredRoles.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentRoles = filteredRoles.slice(startIndex, endIndex);

  const handleAddRole = () => {
    const roleName = prompt('Enter new role name:');
    if (roleName && roleName.trim()) {
      const newRole = {
        id: Math.max(...roles.map(r => r.id)) + 1,
        name: roleName.trim()
      };
      setRoles([...roles, newRole]);
    }
  };

  const handleEditRole = (role) => {
    const newName = prompt('Edit role name:', role.name);
    if (newName && newName.trim() && newName !== role.name) {
      setRoles(roles.map(r => 
        r.id === role.id ? { ...r, name: newName.trim() } : r
      ));
    }
  };

  const handleDeleteRole = (role) => {
    if (window.confirm(`Are you sure you want to delete the role "${role.name}"?`)) {
      setRoles(roles.filter(r => r.id !== role.id));
      // Reset to first page if current page becomes empty
      const newTotalPages = Math.ceil((filteredRoles.length - 1) / entriesPerPage);
      if (currentPage > newTotalPages && newTotalPages > 0) {
        setCurrentPage(newTotalPages);
      }
    }
  };

  const handleViewRole = (role) => {
    alert(`View permissions for ${role.name}`);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (value) => {
    setEntriesPerPage(parseInt(value));
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="roles-permission-container">
      {/* Header */}
      <div className="header">
        <div className="header-title-container">
          <h1 className="header-title">
            Roles & Permission
          </h1>
          <div className="breadcrumb">
            <a href="#" className="breadcrumb-link">Home</a>
            <span className="breadcrumb-separator">/</span>
            <span>Roles</span>
          </div>
        </div>
        <div className="header-actions">
          <button
            onClick={handleAddRole}
            className="add-role-btn"
          >
            <Plus size={18} />
          </button>
          <button
            onClick={() => alert('Filter functionality')}
            className="filter-btn"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Controls */}
        <div className="controls">
          <div className="entries-per-page">
            <select
              value={entriesPerPage}
              onChange={(e) => handleEntriesPerPageChange(e.target.value)}
              className="entries-select"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries per page</span>
          </div>
          <div className="search-container">
            <label htmlFor="search" className="search-label">Search:</label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search roles..."
              className="search-input"
            />
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="roles-table">
            <thead>
              <tr>
                <th 
                  className="sortable-header"
                  onClick={handleSort}
                >
                  Role Name
                  <span className="sort-icon">
                    ↕
                  </span>
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRoles.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => handleViewRole(role)}
                        className="action-btn view-btn"
                        title="View"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        onClick={() => handleEditRole(role)}
                        className="action-btn edit-btn"
                        title="Edit"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteRole(role)}
                        className="action-btn delete-btn"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <div className="pagination-info">
            Showing {filteredRoles.length === 0 ? 0 : startIndex + 1} to{' '}
            {Math.min(endIndex, filteredRoles.length)} of {filteredRoles.length} entries
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="pagination-btn"
              title="First"
            >
              <ChevronsLeft size={14} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
              title="Previous"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              className="current-page-btn"
            >
              {currentPage}
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="pagination-btn"
              title="Next"
            >
              <ChevronRight size={14} />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages || totalPages === 0}
              className="pagination-btn"
              title="Last"
            >
              <ChevronsRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminroles;