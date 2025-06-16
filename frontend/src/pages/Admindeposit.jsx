
import '../cssfolder/Admindeposit.css'


import georgeImage from '../assets/george.jpg';
import sitaImage from '../assets/sita.jpg';
import timothyImage from '../assets/timothy.jpeg';
import janetImage from '../assets/janet.avif';
import jamesImage from '../assets/james.avif';
import floydImage from '../assets/floyd.avif';

export default function Admindeposit(){
    return (<>


    <div class="container">
        <header>
            <p class="breadcrumbs">Home / Deposits</p>
            <h1>Deposits</h1>
        </header>

        <nav class="tabs">
            <a href="#" class="tab-item active">History</a>
            <a href="#" class="tab-item">Pending</a>
            <a href="#" class="tab-item">On Hold</a>
            <a href="#" class="tab-item">Cancelled</a>
            <a href="#" class="tab-item">Completed</a>
        </nav>

        <main class="card">
            <div class="card-header">
                <div class="history-info">
                    <h2>History</h2>
                    <p>Total 57 Transaction</p>
                </div>
                <div class="actions">
                    <button class="export-btn"><i class="fas fa-upload"></i> Export</button>
                    <button class="menu-btn"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>

            <div class="table-controls">
                <div class="entries-per-page">
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                    <span>entries per page</span>
                </div>
                <div class="search-bar">
                    <label for="search">Search:</label>
                    <input type="text" id="search"/>
                </div>
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>Order <i class="fas fa-sort"></i></th>
                            <th>User <i class="fas fa-sort"></i></th>
                            <th>Details <i class="fas fa-sort"></i></th>
                            <th>Trx By <i class="fas fa-sort"></i></th>
                            <th>Amount <i class="fas fa-sort"></i></th>
                            <th>Status <i class="fas fa-sort"></i></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>#24586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={janetImage} alt="Janet Paden"/>
                                    <div>
                                        <p class="user-name">Janet Paden</p>
                                        <p class="user-email">janetbrohere@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">May 25, 2022</p>
                            </td>
                            <td>PayPal</td>
                            <td>
                                <p class="amount-positive">+ 6,335.006 USD</p>
                                <p class="balance">Balance : 6,335.006 USD</p>
                            </td>
                            <td><span class="status completed">Completed</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>#44586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={floydImage} alt="Floyd Lewis"/>
                                    <div>
                                        <p class="user-name">Floyd Lewis</p>
                                        <p class="user-email">floydlewis@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">Jun 15, 2022</p>
                            </td>
                            <td>Bank Transfer</td>
                            <td>
                                <p class="amount-negative">- 5,165.000 USD</p>
                                <p class="balance">Balance : 1,335.006 USD</p>
                            </td>
                            <td><span class="status pending">Pending</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                         <tr>
                            <td><input type="checkbox"/></td>
                            <td>#34586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={jamesImage} alt="james image"/>
                                    <div>
                                        <p class="user-name">Mr james</p>
                                        <p class="user-email">jamesdonboss@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">Apr 22, 2021</p>
                            </td>
                            <td>Bank Transfer</td>
                            <td>
                                <p class="amount-positive">+ 6,335.006 USD</p>
                                <p class="balance">Balance : 6,335.006 USD</p>
                            </td>
                            <td><span class="status cancelled">Cancelled</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>#24586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={sitaImage} alt="Sita Image"/>
                                    <div>
                                        <p class="user-name">Sita Mahalaxmi</p>
                                        <p class="user-email">sitamahalaxmi@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">May 25, 2022</p>
                            </td>
                            <td>PayPal</td>
                            <td>
                                <p class="amount-positive">+ 6,335.006 USD</p>
                                <p class="balance">Balance : 6,335.006 USD</p>
                            </td>
                            <td><span class="status completed">Completed</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>#44586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={timothyImage} alt="timothy image"/>
                                    <div>
                                        <p class="user-name">Mr Timothy</p>
                                        <p class="user-email">timothy@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">Jun 15, 2022</p>
                            </td>
                            <td>Bank Transfer</td>
                            <td>
                                <p class="amount-negative">- 5,165.000 USD</p>
                                <p class="balance">Balance : 1,335.006 USD</p>
                            </td>
                            <td><span class="status pending">Pending</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>#34586414</td>
                            <td>
                                <div class="user-info">
                                    <img src={georgeImage} alt="george image"/>
                                    <div>
                                        <p class="user-name">George patson</p>
                                        <p class="user-email">georgehero@example.com</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p>Deposit Funds</p>
                                <p class="date">Apr 22, 2021</p>
                            </td>
                            <td>Bank Transfer</td>
                            <td>
                                <p class="amount-positive">+ 6,335.006 USD</p>
                                <p class="balance">Balance : 6,335.006 USD</p>
                            </td>
                            <td><span class="status cancelled">Cancelled</span></td>
                            <td><button class="row-menu-btn"><i class="fas fa-ellipsis-v"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-footer">
                <p>Showing 1 to 6 of 6 entries</p>
                <div class="pagination">
                    <button disabled>&laquo;</button>
                    <button class="active">1</button>
                    <button>&raquo;</button>
                </div>
            </div>
        </main>
    </div>

    </>);
}