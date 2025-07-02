import Developersidebar from '../../components/Developersidebar';
import '../../cssfolder/Developerdashboardcss/Developerdashboard.css';

export default function Developerdashboard(){
    return (<>
    
<div class="dashboard__body">
    <div class="dashboard__container">
        
        <Developersidebar/>
      
        {/*  Main Content  */}
        <main class="dashboard__main">
            <header class="dashboard__header">
                <h1 class="dashboard__title">Dashboard</h1>
            </header>

            {/*  Stats Cards  */}
            <section class="dashboard__stats-grid">
                <div class="dashboard__stat-card dashboard__fade-in">
                    <div class="dashboard__stat-header">
                        <div class="dashboard__stat-icon dashboard__stat-icon--blue">📋</div>
                    </div>
                    <div class="dashboard__stat-value">30</div>
                    <div class="dashboard__stat-label">Completed Jobs</div>
                    <a href="#" class="dashboard__stat-link">View Details</a>
                </div>

                <div class="dashboard__stat-card dashboard__fade-in">
                    <div class="dashboard__stat-header">
                        <div class="dashboard__stat-icon dashboard__stat-icon--green">✅</div>
                    </div>
                    <div class="dashboard__stat-value">5</div>
                    <div class="dashboard__stat-label">Task Completed</div>
                    <a href="#" class="dashboard__stat-link">View Details</a>
                </div>

                <div class="dashboard__stat-card dashboard__fade-in">
                    <div class="dashboard__stat-header">
                        <div class="dashboard__stat-icon dashboard__stat-icon--yellow">⭐</div>
                    </div>
                    <div class="dashboard__stat-value">25</div>
                    <div class="dashboard__stat-label">Reviews</div>
                    <a href="#" class="dashboard__stat-link">View Details</a>
                </div>

                <div class="dashboard__stat-card dashboard__fade-in">
                    <div class="dashboard__stat-header">
                        <div class="dashboard__stat-icon dashboard__stat-icon--red">💰</div>
                    </div>
                    <div class="dashboard__stat-value">5962</div>
                    <div class="dashboard__stat-label">Earning</div>
                    <a href="#" class="dashboard__stat-link">View Details</a>
                </div>
            </section>

            {/*  Charts Section  */}
            <section class="dashboard__charts-grid">
                {/*  Line Chart  */}
                <div class="dashboard__chart-card">
                    <div class="dashboard__chart-header">
                        <h2 class="dashboard__chart-title">Overview</h2>
                        <select class="dashboard__chart-filter">
                            <option>Last 6 months</option>
                            <option>Last 12 months</option>
                            <option>Last year</option>
                        </select>
                    </div>
                    <div class="dashboard__line-chart">
                        <svg class="dashboard__chart-svg" viewBox="0 0 600 300">
                            {/*  Grid Lines  */}
                            <g class="dashboard__chart-grid">
                                <line x1="60" y1="50" x2="60" y2="250"></line>
                                <line x1="60" y1="250" x2="540" y2="250"></line>
                                <line x1="60" y1="200" x2="540" y2="200" opacity="0.3"></line>
                                <line x1="60" y1="150" x2="540" y2="150" opacity="0.3"></line>
                                <line x1="60" y1="100" x2="540" y2="100" opacity="0.3"></line>
                            </g>
                            
                            {/*  Chart Line  */}
                            <polyline class="dashboard__chart-line" 
                                points="60,230 100,200 140,170 180,160 220,180 260,175 300,175 340,175 380,170 420,120 460,110 500,80 540,50"></polyline>
                            
                            {/*  Data Points  */}
                            <circle class="dashboard__chart-point" cx="60" cy="230" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="100" cy="200" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="140" cy="170" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="180" cy="160" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="220" cy="180" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="260" cy="175" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="300" cy="175" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="340" cy="175" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="380" cy="170" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="420" cy="120" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="460" cy="110" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="500" cy="80" r="4"></circle>
                            <circle class="dashboard__chart-point" cx="540" cy="50" r="4"></circle>
                            
                            {/*  Axis Labels  */}
                            <g class="dashboard__chart-axis">
                                <text x="60" y="270">Jan</text>
                                <text x="100" y="270">Feb</text>
                                <text x="140" y="270">Mar</text>
                                <text x="180" y="270">Apr</text>
                                <text x="220" y="270">May</text>
                                <text x="260" y="270">Jun</text>
                                <text x="300" y="270">Jul</text>
                                <text x="340" y="270">Aug</text>
                                <text x="380" y="270">Sep</text>
                                <text x="420" y="270">Oct</text>
                                <text x="460" y="270">Nov</text>
                                <text x="500" y="270">Dec</text>
                                
                                <text x="45" y="255">100</text>
                                <text x="45" y="205">150</text>
                                <text x="45" y="155">200</text>
                                <text x="45" y="105">250</text>
                                <text x="45" y="55">300</text>
                            </g>
                        </svg>
                    </div>
                </div>

                {/*  Donut Chart  */}
                <div class="dashboard__chart-card">
                    <div class="dashboard__chart-header">
                        <h2 class="dashboard__chart-title">Static Analytics</h2>
                    </div>
                    <div class="dashboard__donut-chart">
                        <svg class="dashboard__donut-svg" viewBox="0 0 200 200">
                            {/*  Donut segments  */}
                            <circle class="dashboard__donut-segment" cx="100" cy="100" r="60" 
                                fill="none" stroke="#8b5cf6" stroke-width="30" 
                                stroke-dasharray="75 314" stroke-dashoffset="0"></circle>
                            <circle class="dashboard__donut-segment" cx="100" cy="100" r="60" 
                                fill="none" stroke="#ec4899" stroke-width="30" 
                                stroke-dasharray="60 314" stroke-dashoffset="-75"></circle>
                            <circle class="dashboard__donut-segment" cx="100" cy="100" r="60" 
                                fill="none" stroke="#f59e0b" stroke-width="30" 
                                stroke-dasharray="90 314" stroke-dashoffset="-135"></circle>
                            <circle class="dashboard__donut-segment" cx="100" cy="100" r="60" 
                                fill="none" stroke="#06b6d4" stroke-width="30" 
                                stroke-dasharray="89 314" stroke-dashoffset="-225"></circle>
                        </svg>
                        
                        <div class="dashboard__donut-legend">
                            <div class="dashboard__legend-item">
                                <div class="dashboard__legend-color dashboard__legend-color--purple"></div>
                                <span>Jobs</span>
                            </div>
                            <div class="dashboard__legend-item">
                                <div class="dashboard__legend-color dashboard__legend-color--pink"></div>
                                <span>Applied Proposals</span>
                            </div>
                            <div class="dashboard__legend-item">
                                <div class="dashboard__legend-color dashboard__legend-color--yellow"></div>
                                <span>Proposals</span>
                            </div>
                            <div class="dashboard__legend-item">
                                <div class="dashboard__legend-color dashboard__legend-color--cyan"></div>
                                <span>Bookmarked Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

</div>

    </>);
}

