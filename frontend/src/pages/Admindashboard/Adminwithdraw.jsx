import '../../cssfolder/Admindashboardcss/Adminwithdraw.css';


import georgeImage from '../.././assets/george.jpg';
import sitaImage from '../.././assets/sita.jpg';
import timothyImage from '../.././assets/timothy.jpeg';
import janetImage from '../.././assets/janet.avif';
import jamesImage from '../.././assets/james.avif';
import floydImage from '../.././assets/floyd.avif';
import Adminsidebar from '../../components/Adminsidebar';

export default function Adminwithdraw(){
    return (<>
   <Adminsidebar/> 
    <div class="containerone">
        <div class="breadcrumb">
            <a href="#">Home</a> / Withdrawals
        </div>

        <h1>Withdrawals</h1>

        <div class="tabs">
            <div class="tab active">History</div>
            <div class="tab">Pending</div>
            <div class="tab">Cancelled</div>
            <div class="tab">Completed</div>
        </div>

        <div class="history-header">
            <div class="history-info">
                <strong>History</strong><br/>
                Total 57 Transaction
            </div>
            <div class="controls">
                <button class="export-btn">
                    ↓ Export
                </button>
                <button class="filter-btn">
                    ▼
                </button>
            </div>
        </div>

        <div class="table-controls">
            <div class="entries-control">
                <select>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                entries per page
            </div>
            <div class="search-control">
                Search: <input type="text" placeholder="search here"/>
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th class="sortable">Order</th>
                        <th>User</th>
                        <th>Details</th>
                        <th>Tnx By</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="order-id">#24586414</div>
                        </td>
                        <td>
                            <div class="user-info">

                            <div>  <img src={janetImage} alt="janet picture" /> </div>

                                <div class="user-details">
                                    <div class="user-name">Janet Paden</div>
                                    <div class="user-email">georgewells@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">Dec 08, 2021</div>
                        </td>
                        <td>PayPal</td>
                        <td>
                            <div class="amount">- 4,165.000 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status completed">Completed</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="order-id">#54586414</div>
                        </td>
                        <td>
                            <div class="user-info">

  <div>  <img src={floydImage} alt="folyd picture" /> </div>

                                <div class="user-details">
                                    <div class="user-name">Floyd Lewis</div>
                                    <div class="user-email">floydlewis@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">Jan 15, 2022</div>
                        </td>
                        <td>Bank Transfer</td>
                        <td>
                            <div class="amount">- 2,165.000 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status pending">Pending</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="order-id">#54586414</div>
                        </td>
                        <td>
                            <div class="user-info">
                                
                                
                                  <div>  <img src={jamesImage} alt="james picture" /> </div>


                                <div class="user-details">
                                    <div class="user-name">Mr James</div>
                                    <div class="user-email">mrjames232@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">Dec 21, 2012</div>
                        </td>
                        <td>Bank Transfer</td>
                        <td>
                            <div class="amount">- 4,335.006 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status cancelled">Cancelled</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="order-id">#24586414</div>
                        </td>
                        <td>
                            <div class="user-info">

                                  <div>  <img src={timothyImage} alt="timothy picture" /> </div>

                                <div class="user-details">
                                    <div class="user-name">Timothy crackson</div>
                                    <div class="user-email">timothycrackson525@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">Dec 08, 2021</div>
                        </td>
                        <td>PayPal</td>
                        <td>
                            <div class="amount">- 4,165.000 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status completed">Completed</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="order-id">#54586414</div>
                        </td>
                        <td>
                            <div class="user-info">
                                
                     <div>  <img src={sitaImage} alt="sita Mahalaxmi picture" /> </div>

                                <div class="user-details">
                                    <div class="user-name">Sita Mahalaxmi</div>
                                    <div class="user-email">maasita6@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">May 14, 2022</div>
                        </td>
                        <td>Bank Transfer</td>
                        <td>
                            <div class="amount">- 1,165.000 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status pending">Pending</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="order-id">#54586414</div>
                        </td>
                        <td>
                            <div class="user-info">
                                
                         <div>  <img src={georgeImage} alt="George picture" /> </div>

                                <div class="user-details">
                                    <div class="user-name">George Krickson</div>
                                    <div class="user-email">overgeorge55@example.com</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="withdraw-details">Withdraw Funds</div>
                            <div class="withdraw-date">Dec 21, 2012</div>
                        </td>
                        <td>Bank Transfer</td>
                        <td>
                            <div class="amount">- 4,335.006 USD</div>
                            <div class="balance">Balance : 1,335.006 USD</div>
                        </td>
                        <td>
                            <span class="status cancelled">Cancelled</span>
                        </td>
                        <td class="actions">
                            <button class="action-btn">⋮</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <div class="pagination">
                <div class="pagination-info">Showing 1 to 6 of 6 entries</div>
                <div class="pagination-controls">
                    <button class="pagination-btn" disabled>‹‹</button>
                    <button class="pagination-btn" disabled>‹</button>
                    <button class="pagination-btn active">1</button>
                    <button class="pagination-btn" disabled>›</button>
                    <button class="pagination-btn" disabled>››</button>
                </div>
            </div>
        </div>
    </div>



    </>);
}
