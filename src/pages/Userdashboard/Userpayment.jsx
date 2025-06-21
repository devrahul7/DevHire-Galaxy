import Usersidebar from '../../components/Usersidebar';
import '../../cssfolder/Userdashboardcss/Userpayment.css';


export default function Userpayment(){

    return(<>
    
    <div>
        <Usersidebar/>
    <div class="wallet-dashboard-container">
        <h1 class="wallet-dashboard-header">Wallet</h1>
        
        <div class="wallet-stats-grid">
            <div class="wallet-stat-card">
                <div class="wallet-stat-icon total-added">$</div>
                <div class="wallet-stat-content">
                    <div class="wallet-stat-label">Total Added</div>
                    <div class="wallet-stat-value">$10,000</div>
                </div>
            </div>
            
            <div class="wallet-stat-card">
                <div class="wallet-stat-icon wallet-balance">B</div>
                <div class="wallet-stat-content">
                    <div class="wallet-stat-label">Wallet Balance</div>
                    <div class="wallet-stat-value">$100</div>
                </div>
            </div>
            
            <div class="wallet-stat-card">
                <div class="wallet-stat-icon total-credit">↑</div>
                <div class="wallet-stat-content">
                    <div class="wallet-stat-label">Total Credit</div>
                    <div class="wallet-stat-value">$750</div>
                </div>
            </div>
            
            <div class="wallet-stat-card">
                <div class="wallet-stat-icon total-debit">↓</div>
                <div class="wallet-stat-content">
                    <div class="wallet-stat-label">Total Debit</div>
                    <div class="wallet-stat-value">$870</div>
                </div>
            </div>
        </div>
        
        <div class="wallet-transactions-section">
            <div class="wallet-transactions-header">
                <h2 class="wallet-transactions-title">Wallet Transactions</h2>
                <div class="wallet-search-container">
                    <input type="text" class="wallet-search-input" placeholder="Search here"/>
                    <div class="wallet-action-buttons">
                        <button class="wallet-action-btn">📄</button>
                        <button class="wallet-action-btn">⟲</button>
                    </div>
                </div>
            </div>
            
            <table class="wallet-transactions-table">
                <thead class="wallet-table-header">
                    <tr>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                        <th>Fees</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="wallet-table-row">
                        <td class="wallet-table-cell">29 Sep2023, 11:28 PM</td>
                        <td class="wallet-table-cell">1023456</td>
                        <td class="wallet-table-cell">Wallet Top-up</td>
                        <td class="wallet-table-cell">PayPal</td>
                        <td class="wallet-table-cell wallet-amount-positive">+$80.00</td>
                        <td class="wallet-table-cell">$80.00</td>
                        <td class="wallet-table-cell">
                            <span class="wallet-status-badge wallet-status-paid">Paid</span>
                        </td>
                    </tr>
                    <tr class="wallet-table-row">
                        <td class="wallet-table-cell">17 Sep2023,09:14 AM</td>
                        <td class="wallet-table-cell">1023457</td>
                        <td class="wallet-table-cell">Project</td>
                        <td class="wallet-table-cell">Stripe</td>
                        <td class="wallet-table-cell wallet-amount-negative">-$20.50</td>
                        <td class="wallet-table-cell">$20.50</td>
                        <td class="wallet-table-cell">
                            <span class="wallet-status-badge wallet-status-pending">Pending</span>
                        </td>
                    </tr>
                    <tr class="wallet-table-row">
                        <td class="wallet-table-cell">13 Sep2023, 11:15 AM</td>
                        <td class="wallet-table-cell">1023458</td>
                        <td class="wallet-table-cell">Income</td>
                        <td class="wallet-table-cell">Bank Transfer</td>
                        <td class="wallet-table-cell wallet-amount-positive">+$35.70</td>
                        <td class="wallet-table-cell">$35.70</td>
                        <td class="wallet-table-cell">
                            <span class="wallet-status-badge wallet-status-paid">Paid</span>
                        </td>
                    </tr>
                    <tr class="wallet-table-row">
                        <td class="wallet-table-cell">07 Sep2023, 05:37 PM</td>
                        <td class="wallet-table-cell">1023459</td>
                        <td class="wallet-table-cell">Wallet Top-up</td>
                        <td class="wallet-table-cell">PayPal</td>
                        <td class="wallet-table-cell wallet-amount-positive">+$62.80</td>
                        <td class="wallet-table-cell">$62.80</td>
                        <td class="wallet-table-cell">
                            <span class="wallet-status-badge wallet-status-pending">Pending</span>
                        </td>
                    </tr>
                    <tr class="wallet-table-row">
                        <td class="wallet-table-cell">02 Sep 2023, 07:42 PM</td>
                        <td class="wallet-table-cell">1023460</td>
                        <td class="wallet-table-cell">Purchase</td>
                        <td class="wallet-table-cell">Stripe</td>
                        <td class="wallet-table-cell wallet-amount-negative">-$73.30</td>
                        <td class="wallet-table-cell">$73.30</td>
                        <td class="wallet-table-cell">
                            <span class="wallet-status-badge wallet-status-paid">Paid</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
    
    </>);

}