// ProjectForm.jsx
import React, { useState } from 'react';
import '../cssfolder/PostJob.css';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    projectCategory: '',
    projectDuration: '1-3 Week',
    deadlineDate: '',
    freelancerType: '',
    freelancerLevel: 'Basic',
    tags: '',
    skills: 'UX, UI, App Design, Wireframing',
    budgetType: 'hourly',
    fromBudget: '15',
    toBudget: '250'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBudgetTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      budgetType: type
    }));
  };

  return (
    <div className="project-form">
      {/* Basic Details Section */}
      <div className="form-section">
        <h2 className="section-title">Basic Details</h2>
        
        <div className="form-fields">
          {/* Project Title */}
          <div className="form-field">
            <label className="form-label">
              Project Title
            </label>
            <input
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          {/* Three column row */}
          <div className="form-row form-row-3">
            <div className="form-field">
              <label className="form-label">
                Project Category
              </label>
              <select
                name="projectCategory"
                value={formData.projectCategory}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">
                Project Duration
              </label>
              <select
                name="projectDuration"
                value={formData.projectDuration}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="1-3 Week">1-3 Week</option>
                <option value="1 Month">1 Month</option>
                <option value="2-3 Months">2-3 Months</option>
                <option value="3+ Months">3+ Months</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">
                Deadline Date
              </label>
              <input
                type="text"
                name="deadlineDate"
                value={formData.deadlineDate}
                onChange={handleInputChange}
                placeholder="Choose"
                className="form-input"
              />
            </div>
          </div>

          {/* Two column row */}
          <div className="form-row form-row-2">
            <div className="form-field">
              <label className="form-label">
                Freelancer Type
              </label>
              <select
                name="freelancerType"
                value={formData.freelancerType}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="">Select</option>
                <option value="individual">Individual</option>
                <option value="agency">Agency</option>
                <option value="team">Team</option>
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">
                Freelancer Level
              </label>
              <input
                type="text"
                name="freelancerLevel"
                value={formData.freelancerLevel}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="form-field">
            <label className="form-label">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="form-section">
        <h2 className="section-title">Skills</h2>
        
        <div className="form-field">
          <label className="form-label">
            Skill Set
          </label>
          <div className="skill-container">
            <div className="skill-display">
              <span className="skill-tag">
                Web Design
              </span>
              <span className="skill-text">
                UX, UI, App Design, Wireframing
              </span>
            </div>
          </div>
          <p className="skill-help-text">
            Enter skills for needed for project, for best result add 5 or more Skills
          </p>
        </div>
      </div>

      {/* Budget Section */}
      <div className="form-section">
        <h2 className="section-title">Budget</h2>
        
        <div>
          {/* Budget Type Selection */}
          <div className="budget-type-container">
            <button
              onClick={() => handleBudgetTypeChange('hourly')}
              className={`budget-type-btn ${formData.budgetType === 'hourly' ? 'active' : ''}`}
            >
              Hourly Rate
            </button>
            <button
              onClick={() => handleBudgetTypeChange('fixed')}
              className={`budget-type-btn ${formData.budgetType === 'fixed' ? 'active' : ''}`}
            >
              Fixed budget
            </button>
          </div>

          {/* Budget Range */}
          <div className="budget-range">
            <div className="form-field">
              <label className="form-label">
                From ($)
              </label>
              <input
                type="number"
                name="fromBudget"
                value={formData.fromBudget}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-label">
                To ($)
              </label>
              <input
                type="number"
                name="toBudget"
                value={formData.toBudget}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;