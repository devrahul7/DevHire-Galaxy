import React from 'react';


import { 
  BarChart3, 
  Briefcase, 
  CheckSquare, 
  Star, 
  DollarSign,
  Eye,
  ChevronRight,
  User,
  FolderOpen,
  Heart,
  MessageCircle,
  CreditCard,
  Settings,
  LogOut
} from 'lucide-react';

const Userdashboard = () => {
  const overviewData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 150 },
    { month: 'Mar', value: 200 },
    { month: 'Apr', value: 250 },
    { month: 'May', value: 200 },
    { month: 'Jun', value: 250 },
    { month: 'Jul', value: 200 },
    { month: 'Aug', value: 200 },
    { month: 'Sep', value: 200 },
    { month: 'Oct', value: 200 },
    { month: 'Nov', value: 300 },
    { month: 'Dec', value: 350 }
  ];

  const recentEarnings = [
    {
      details: "Website Designer Required",
      jobType: "Hourly",
      budget: "$2222",
      createDate: "29 Sep 2023",
      expiringDate: "10 Oct 2023",
      proposals: 47
    },
    {
      details: "Create desktop applications",
      jobType: "Full time",
      budget: "$5762",
      createDate: "25 Sep 2023",
      expiringDate: "05 Oct 2023",
      proposals: 15
    },
    {
      details: "PHP, Javascript Projects",
      jobType: "Part time",
      budget: "$4879",
      createDate: "17 Sep 2023",
      expiringDate: "29 Sep 2023",
      proposals: 26
    },
    {
      details: "Website Designer Required",
      jobType: "Hourly",
      budget: "$2222",
      createDate: "29 Sep 2023",
      expiringDate: "10 Oct 2023",
      proposals: 47
    },
    {
      details: "Swift/ SwiftUI Developer",
      jobType: "Hourly",
      budget: "$2789",
      createDate: "05 Sep 2023",
      expiringDate: "17 Sep 2023",
      proposals: 19
    },
    {
      details: "Full-stack Developer",
      jobType: "Part time",
      budget: "$7853",
      createDate: "01 Sep 2023",
      expiringDate: "13 Sep 2023",
      proposals: 38
    }
  ];

  const StatCard = ({ icon: Icon, title, value, viewDetails, bgColor, iconColor }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: bgColor === 'bg-blue-50' ? '#eff6ff' : 
                           bgColor === 'bg-green-50' ? '#f0fdf4' : 
                           bgColor === 'bg-yellow-50' ? '#fffbeb' : '#fef2f2'
          }}>
            <Icon style={{ 
              width: '24px', 
              height: '24px', 
              color: iconColor === 'text-blue-500' ? '#3b82f6' : 
                     iconColor === 'text-green-500' ? '#10b981' : 
                     iconColor === 'text-yellow-500' ? '#f59e0b' : '#ef4444'
            }} />
          </div>
          <div>
            <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 4px 0' }}>{title}</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', margin: 0 }}>{value}</p>
          </div>
        </div>
        <button style={{
          color: '#f97316',
          fontSize: '14px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}>
          {viewDetails}
        </button>
      </div>
    </div>
  );

  const SidebarItem = ({ icon: Icon, label, hasChevron = false, isActive = false }) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#f97316' : 'transparent',
      color: isActive ? 'white' : '#6b7280',
      marginBottom: '4px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Icon style={{ width: '20px', height: '20px' }} />
        <span style={{ fontSize: '14px', fontWeight: '500' }}>{label}</span>
      </div>
      {hasChevron && <ChevronRight style={{ width: '16px', height: '16px' }} />}
    </div>
  );

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <div style={{
        width: '256px',
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderRight: '1px solid #e5e7eb'
      }}>
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f97316',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>Walter Griffin</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: '2px 0' }}>@waltergriffin</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%'
                }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <nav style={{ padding: '0 16px' }}>
          <SidebarItem icon={BarChart3} label="Dashboard" isActive={true} />
          <SidebarItem icon={FolderOpen} label="Projects" hasChevron={true} />
          <SidebarItem icon={Heart} label="Favourites" hasChevron={true} />
          <SidebarItem icon={Star} label="Reviews" />
          <SidebarItem icon={MessageCircle} label="Chat" />
          <SidebarItem icon={CreditCard} label="Payments" />
          <SidebarItem icon={Settings} label="Settings" hasChevron={true} />
          <SidebarItem icon={LogOut} label="Logout" />
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ padding: '32px' }}>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', margin: 0 }}>Dashboard</h1>
          </div>

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}>
            <StatCard
              icon={Briefcase}
              title="Completed Jobs"
              value="30"
              viewDetails="View Details"
              bgColor="bg-blue-50"
              iconColor="text-blue-500"
            />
            <StatCard
              icon={CheckSquare}
              title="Task Completed"
              value="5"
              viewDetails="View Details"
              bgColor="bg-green-50"
              iconColor="text-green-500"
            />
            <StatCard
              icon={Star}
              title="Reviews"
              value="25"
              viewDetails="View Details"
              bgColor="bg-yellow-50"
              iconColor="text-yellow-500"
            />
            <StatCard
              icon={DollarSign}
              title="Earning"
              value="5962"
              viewDetails="View Details"
              bgColor="bg-red-50"
              iconColor="text-red-500"
            />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '32px',
            marginBottom: '32px'
          }}>
            {/* Overview Chart */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Overview</h3>
                <button style={{
                  padding: '8px 16px',
                  backgroundColor: '#f3f4f6',
                  color: '#6b7280',
                  borderRadius: '8px',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Last 6 months
                </button>
              </div>
              
              <div style={{ height: '256px', position: 'relative' }}>
                <svg style={{ width: '100%', height: '100%' }}>
                  {/* Grid lines */}
                  {[100, 150, 200, 250, 300, 350].map((value, index) => (
                    <g key={value}>
                      <line
                        x1="50"
                        y1={240 - (value - 100) * 1.4}
                        x2="95%"
                        y2={240 - (value - 100) * 1.4}
                        stroke="#f0f0f0"
                        strokeWidth="1"
                      />
                      <text
                        x="35"
                        y={245 - (value - 100) * 1.4}
                        fontSize="12"
                        fill="#666"
                        textAnchor="end"
                      >
                        {value}
                      </text>
                    </g>
                  ))}
                  
                  {/* Chart line */}
                  <polyline
                    points={overviewData.map((point, index) => 
                      `${60 + index * 45},${240 - (point.value - 100) * 1.4}`
                    ).join(' ')}
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                  />
                  
                  {/* Data points */}
                  {overviewData.map((point, index) => (
                    <circle
                      key={point.month}
                      cx={60 + index * 45}
                      cy={240 - (point.value - 100) * 1.4}
                      r="4"
                      fill="#f97316"
                    />
                  ))}
                  
                  {/* X-axis labels */}
                  {overviewData.map((point, index) => (
                    <text
                      key={point.month}
                      x={60 + index * 45}
                      y="260"
                      fontSize="12"
                      fill="#666"
                      textAnchor="middle"
                    >
                      {point.month}
                    </text>
                  ))}
                </svg>
              </div>
            </div>

            {/* Static Analytics */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '24px' }}>Static Analytics</h3>
              
              <div style={{
                position: 'relative',
                height: '192px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '160px', height: '160px' }}>
                  {/* Donut chart segments */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="12"
                    strokeDasharray="120 377"
                    strokeDashoffset="0"
                    transform="rotate(-90 80 80)"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="12"
                    strokeDasharray="80 377"
                    strokeDashoffset="-120"
                    transform="rotate(-90 80 80)"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="12"
                    strokeDasharray="60 377"
                    strokeDashoffset="-200"
                    transform="rotate(-90 80 80)"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="12"
                    strokeDasharray="40 377"
                    strokeDashoffset="-260"
                    transform="rotate(-90 80 80)"
                  />
                </svg>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#8b5cf6', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Jobs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#ec4899', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Applied Proposals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#fbbf24', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Proposals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#06b6d4', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Bookmarked Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Earnings */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: 0 }}>Recent Earnings</h3>
              <button style={{
                padding: '8px 16px',
                backgroundColor: '#f97316',
                color: 'white',
                borderRadius: '8px',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer'
              }}>
                View All
              </button>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f9fafb' }}>
                  <tr>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Details</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Job Type</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Budget</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Create On</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Expiring On</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Proposals</th>
                    <th style={{
                      padding: '12px 24px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: '#6b7280',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>Action</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: 'white' }}>
                  {recentEarnings.map((earning, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#111827'
                      }}>{earning.details}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>{earning.jobType}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        fontWeight: '500',
                        color: '#111827'
                      }}>{earning.budget}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>{earning.createDate}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>{earning.expiringDate}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>{earning.proposals}</td>
                      <td style={{
                        padding: '16px 24px',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        <button style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#9ca3af'
                        }}>
                          <Eye style={{ width: '16px', height: '16px' }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;