
import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const styles = {
  container: {
    maxWidth: '2000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh'
  },
  header: {
    marginBottom: '30px'
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#333'
  },
  breadcrumb: {
    fontSize: '14px',
    color: '#666'
  },
  separator: {
    margin: '0 8px',
    color: '#999'
  },
  tabContainer: {
    display: 'flex',
    background: 'white',
    borderRadius: '8px 8px 0 0',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '0',
    flexWrap: 'wrap'
  },
  tab: {
    padding: '12px 20px',
    border: 'none',
    background: 'white',
    color: '#666',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
    borderBottom: '3px solid transparent'
  },
  activeTab: {
    backgroundColor: '#ff6b35',
    color: 'white',
    borderBottomColor: '#ff6b35'
  },
  content: {
    background: 'white',
    borderRadius: '0 0 8px 8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '30px'
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '30px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 20px 0',
    color: '#333'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
    marginBottom: '6px'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box'
  },
  select: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
    backgroundColor: 'white'
  },
  uploadContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px'
  },
  uploadBox: {
    width: '120px',
    height: '80px',
    border: '2px dashed #ddd',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s ease',
    background: '#fafafa'
  },
  uploadIcon: {
    color: '#999',
    width: '24px',
    height: '24px'
  },
  uploadInfo: {
    flex: '1'
  },
  uploadInfoText: {
    margin: '0 0 4px 0',
    fontSize: '12px',
    color: '#666'
  },
  logoPreview: {
    marginTop: '12px'
  },
  faviconPreview: {
    marginTop: '12px'
  },
  logoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px',
    border: '1px solid #eee',
    borderRadius: '4px',
    background: 'white',
    width: 'fit-content'
  },
  faviconItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px',
    border: '1px solid #eee',
    borderRadius: '4px',
    background: 'white',
    width: 'fit-content'
  },
  logoImage: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  kofeJobLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontWeight: '600',
    fontSize: '12px',
    color: '#333'
  },
  logoIcon: {
    width: '20px',
    height: '20px',
    background: '#ff6b35',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px'
  },
  faviconImage: {
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  faviconIcon: {
    width: '16px',
    height: '16px',
    background: '#ff6b35',
    borderRadius: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '8px'
  },
  removeButton: {
    background: 'none',
    border: 'none',
    color: '#999',
    cursor: 'pointer',
    padding: '2px',
    borderRadius: '2px',
    transition: 'color 0.2s ease'
  },
  toggleContainer: {
    position: 'relative',
    display: 'inline-block',
    width: '50px',
    height: '24px'
  },
  toggle: {
    opacity: '0',
    width: '0',
    height: '0',
    position: 'absolute'
  },
  toggleSlider: {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    borderRadius: '24px',
    transition: '0.2s',
    display: 'flex',
    alignItems: 'center'
  },
  toggleSliderBefore: {
    height: '18px',
    width: '18px',
    left: '3px',
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: '0.2s',
    position: 'absolute',
    content: '""'
  },
  toggleSliderActive: {
    backgroundColor: '#ff6b35'
  },
  toggleSliderBeforeActive: {
    transform: 'translateX(26px)'
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'flex-start',
    paddingTop: '20px',
    borderTop: '1px solid #eee'
  },
  updateButton: {
    padding: '10px 24px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#ff6b35',
    color: 'white'
  },
  cancelButton: {
    padding: '10px 24px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: 'white',
    color: '#666'
  }
};

const Adminsettings = () => {
  const [activeTab, setActiveTab] = useState('General Settings');
  const [formData, setFormData] = useState({
    websiteName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    rtl: false
  });

  const tabs = [
    'General Settings',
    'Localization',
    'Payment Settings',
    'Email Settings',
    'Social Media Login',
    'Social Links',
    'SEO Settings',
    'Others'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      websiteName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      rtl: false
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Settings</h1>
        <nav style={styles.breadcrumb}>
          <span>Home</span>
          <span style={styles.separator}>/</span>
          <span>Settings</span>
          <span style={styles.separator}>/</span>
          <span>General Settings</span>
        </nav>
      </div>

      <div style={styles.tabContainer}>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              ...styles.tab,
              ...(activeTab === tab ? styles.activeTab : {})
            }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        <div style={styles.formContainer}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Website Basic Details</h2>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Website Name *
              </label>
              <input
                type="text"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleInputChange}
                placeholder="Enter Website Name"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                Logo *
              </label>
              <div style={styles.uploadContainer}>
                <div style={styles.uploadBox}>
                  <Upload style={styles.uploadIcon} />
                </div>
                <div style={styles.uploadInfo}>
                  <p style={styles.uploadInfoText}>Recommended image size is 150px x 150px</p>
                </div>
              </div>
              
              <div style={styles.logoPreview}>
                <div style={styles.logoItem}>
                  <div style={styles.logoImage}>
                    <div style={styles.kofeJobLogo}>
                      <div style={styles.logoIcon}>🔥</div>
                      <span>KofeJob</span>
                    </div>
                  </div>
                  <button style={styles.removeButton}>
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                Favicon *
              </label>
              <div style={styles.uploadContainer}>
                <div style={styles.uploadBox}>
                  <Upload style={styles.uploadIcon} />
                </div>
                <div style={styles.uploadInfo}>
                  <p style={styles.uploadInfoText}>Recommended image size is 16px x 16px or 32px x 32px</p>
                  <p style={styles.uploadInfoText}>Accepted formats: only png and ico</p>
                </div>
              </div>
              
              <div style={styles.faviconPreview}>
                <div style={styles.faviconItem}>
                  <div style={styles.faviconImage}>
                    <div style={styles.faviconIcon}>🔥</div>
                  </div>
                  <button style={styles.removeButton}>
                    <X size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>RTL</label>
              <div style={styles.toggleContainer}>
                <input
                  type="checkbox"
                  name="rtl"
                  checked={formData.rtl}
                  onChange={handleInputChange}
                  style={styles.toggle}
                />
                <div 
                  style={{
                    ...styles.toggleSlider,
                    ...(formData.rtl ? styles.toggleSliderActive : {})
                  }}
                >
                  <div 
                    style={{
                      ...styles.toggleSliderBefore,
                      ...(formData.rtl ? styles.toggleSliderBeforeActive : {})
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Address Details</h2>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Address Line 1 *
              </label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
                placeholder="Enter Address Line 1"
                style={styles.input}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                placeholder="Enter Address Line 2"
                style={styles.input}
              />
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>State/Province</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select</option>
                  <option value="california">California</option>
                  <option value="texas">Texas</option>
                  <option value="florida">Florida</option>
                  <option value="new-york">New York</option>
                </select>
              </div>
            </div>

            <div style={styles.formRow}>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Zip/Postal Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  style={styles.select}
                >
                  <option value="">Select</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.buttonContainer}>
          <button
            type="submit"
            onClick={handleSubmit}
            style={styles.updateButton}
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminsettings;