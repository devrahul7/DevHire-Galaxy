
import '../../cssfolder/Developerdashboardcss/Developerpayment.css';

import Developersidebar from "../../components/Developersidebar";


export default function Developerpayment(){
  return (<>

<Developersidebar/>

  <div class="dev-payout-root">
    <div class="dp-header">
        <h1 class="dp-title">Payout</h1>
        <button class="dp-settings-btn">Payout Settings</button>
    </div>

    <div class="dp-stats-grid">
        <div class="dp-stat-card">
            <div class="dp-card-header">
                <div class="dp-icon dp-icon-primary">P</div>
                <div class="dp-card-title">Previous Payout</div>
            </div>
            <div class="dp-amount">5,231.00</div>
            <div class="dp-status dp-status-paid">Paid</div>
            <div class="dp-meta">17 Aug 2023</div>
            <a href="#" class="dp-action-link">View</a>
        </div>

        <div class="dp-stat-card">
            <div class="dp-card-header">
                <div class="dp-icon dp-icon-secondary">B</div>
                <div class="dp-card-title">Balance</div>
            </div>
            <div class="dp-amount">3,270.00</div>
            <div class="dp-status dp-status-pending">Pending</div>
            <div class="dp-meta">Payout Request</div>
            <a href="#" class="dp-action-link">View</a>
        </div>

        <div class="dp-stat-card">
            <div class="dp-card-header">
                <div class="dp-icon dp-icon-primary">T</div>
                <div class="dp-card-title">Total Projects</div>
            </div>
            <div class="dp-projects-count">107</div>
        </div>
    </div>

    <div class="dp-history-section">
        <div class="dp-history-header">
            <h2 class="dp-history-title">Payout History</h2>
        </div>
        
        <div class="dp-table-container">
            <table class="dp-table">
                <thead class="dp-table-header">
                    <tr>
                        <th>Payout Date</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Payout Processed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="dp-table-row">
                        <td class="dp-table-cell dp-date-cell">29 Sep 2023, 11:26 PM</td>
                        <td class="dp-table-cell">
                            <span class="dp-payment-type" data-type="paypal">PayPal</span>
                        </td>
                        <td class="dp-table-cell dp-amount-cell">80.00</td>
                        <td class="dp-table-cell">
                            <span class="dp-status dp-status-pending">Pending</span>
                        </td>
                        <td class="dp-table-cell dp-date-cell">29 Sep 2023, 12:26 PM</td>
                    </tr>
                    <tr class="dp-table-row">
                        <td class="dp-table-cell dp-date-cell">17 Sep 2023, 09:14 AM</td>
                        <td class="dp-table-cell">
                            <span class="dp-payment-type" data-type="paypal">PayPal</span>
                        </td>
                        <td class="dp-table-cell dp-amount-cell">20.50</td>
                        <td class="dp-table-cell">
                            <span class="dp-status dp-status-paid">Paid</span>
                        </td>
                        <td class="dp-table-cell dp-date-cell">17 Sep 2023, 010:14AM</td>
                    </tr>
                    <tr class="dp-table-row">
                        <td class="dp-table-cell dp-date-cell">13 Sep 2023, 11:15 AM</td>
                        <td class="dp-table-cell">
                            <span class="dp-payment-type" data-type="bank">Bank Transfer</span>
                        </td>
                        <td class="dp-table-cell dp-amount-cell">35.70</td>
                        <td class="dp-table-cell">
                            <span class="dp-status dp-status-paid">Paid</span>
                        </td>
                        <td class="dp-table-cell dp-date-cell">13 Sep 2023, 12:15 AM</td>
                    </tr>
                    <tr class="dp-table-row">
                        <td class="dp-table-cell dp-date-cell">07 Sep2023, 05:37 PM</td>
                        <td class="dp-table-cell">
                            <span class="dp-payment-type" data-type="paypal">PayPal</span>
                        </td>
                        <td class="dp-table-cell dp-amount-cell">62.80</td>
                        <td class="dp-table-cell">
                            <span class="dp-status dp-status-paid">Paid</span>
                        </td>
                        <td class="dp-table-cell dp-date-cell">07 Sep2023, 07:37 PM</td>
                    </tr>
                    <tr class="dp-table-row">
                        <td class="dp-table-cell dp-date-cell">02 Sep 2023, 07:42 PM</td>
                        <td class="dp-table-cell">
                            <span class="dp-payment-type" data-type="stripe">Stripe</span>
                        </td>
                        <td class="dp-table-cell dp-amount-cell">73.30</td>
                        <td class="dp-table-cell">
                            <span class="dp-status dp-status-paid">Paid</span>
                        </td>
                        <td class="dp-table-cell dp-date-cell">02 Sep 2023, 08:42 PM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  
  </>);
}