
import '../../cssfolder/Admindashboardcss/Admindashboard.css';
import AdminSidebar from '../../components/Adminsidebar';


    export default function Admindashboard() {


        return ( <> <div>
    {/*  Header  */}
    <div class="header">
        <div class="logo">
            <div class="logo-icon">K</div>
            <span>Dev Shukra</span>
        </div>
        <div class="search-bar">
            <input type="text" placeholder="Start typing your Search.."/>
        </div>
        <div class="user-section">
            <div class="notification-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
            </div>
            <div class="user-avatar"></div>
        </div>
    </div>

    <div class="containeradmin">
        {/*  Sidebar  */}
       <AdminSidebar/>
        {/*  Main Content  */}
        <div class="main-content">
            <div class="page-header">
                <h1 class="page-title">Dashboard</h1>
                <div class="breadcrumb">Home / Dashboard</div>
            </div>

            <div class="chart-section">

                {/*  Overview Chart  */}

                <div class="chart-card">
                    <div class="chart-header">
                        <h2 class="chart-title">Over view</h2>
                    </div>
                    <div class="chart-container">
                        <div class="chart-lines"></div>
                        <div class="chart-area"></div>
                        <div class="chart-area-2"></div>
                        <div class="chart-legend">
                            <div class="legend-item">
                                <div class="legend-color primary"></div>
                                <span>Freelance Developers</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color secondary"></div>
                                <span>Developers per project</span>
                            </div>
                            <div class="legend-item">
                                <div class="legend-color tertiary"></div>
                                <span>Completed projects</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Welcome Card  */}
                <div class="chart-card welcome-card">
                    <div class="welcome-avatar">👤</div>
                    <div class="welcome-text">Welcome back,</div>
                    <div class="welcome-user">Super Admin</div>
                    
                    <div class="balance-section">
                        <div class="balance-title">Account balance</div>
                        <div class="balance-amount">$50,000.00</div>
                    </div>

                    <div class="payments-section">
                        <div class="payments-title">Payments</div>
                        <div class="payment-item">
                            <span class="payment-name">Sakib Khan</span>
                            <span class="payment-amount">$2222</span>
                        </div>
                        <div class="payment-item">
                            <span class="payment-name">Pixel Inc Ltd</span>
                            <span class="payment-amount">$750</span>
                        </div>
                        <div class="payment-item">
                            <span class="payment-name">Jon M Mullins</span>
                            <span class="payment-amount">$3150</span>
                        </div>
                        <div class="payment-item">
                            <span class="payment-name">Rose M Milewski</span>
                            <span class="payment-amount">$1455</span>
                        </div>
                        <div class="payment-item">
                            <span class="payment-name">Gerald K Myers</span>
                            <span class="payment-amount">$3000</span>
                        </div>
                        <div class="payment-item">
                            <span class="payment-name">Marcin Kowalski</span>
                            <span class="payment-amount">$895</span>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Dashboard Cards  */}
          

            {/*  Reviews Section  */}
            <div class="reviews-section">
                <div class="reviews-header">
                    <h2 class="reviews-title">Reviews</h2>
                </div>
                
                <div class="reviews-tabs">
                    <div class="review-tab active">All (272)</div>
                    <div class="review-tab">Active (218)</div>
                    <div class="review-tab">Pending Approval (03)</div>
                    <div class="review-tab">Trash (0)</div>
                </div>

                <div class="reviews-controls">
                    <div class="entries-control">
                        <select>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span>entries per page</span>
                    </div>
                    <div class="search-control">
                        <span>Search:</span>
                        <input type="text" placeholder=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

        </>);
    }