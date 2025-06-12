
import '../cssfolder/Adminfreelancer.css'


import georgeImage from '../assets/george.jpg';
import sitaImage from '../assets/sita.jpg';
import timothyImage from '../assets/timothy.jpeg';
import janetImage from '../assets/janet.avif';
import jamesImage from '../assets/james.avif';
import floydImage from '../assets/floyd.avif';

export default function Adminfreelancer(){
    return (<>
    
    <div>
    <div class="header">
        <div>
            <h1>Freelancer</h1>
            <div class="breadcrumb">Home / Freelancer</div>
        </div>
        <button class="add-btn">
            <span>⊕</span>
            Add Freelancer
        </button>
    </div>

    <div class="tabs">
        <div class="tab-list">
            <div class="tab active">All Freelancer</div>
            <div class="tab">Active Freelancer</div>
            <div class="tab">Inactive Freelancer</div>
            <div class="tab">Suspended</div>
            <div class="tab">Administrator</div>
        </div>
    </div>

    <div class="content">
        <div class="content-header">
            <div class="content-title">All Freelancer</div>
            <div class="content-subtitle">Total 6 Freelancer account</div>
        </div>

        <div class="controls">
            <div class="entries-control">
                <select class="entries-select">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <span>entries per page</span>
            </div>
            <div class="search-control">
                <input type="text" class="search-input" placeholder="Search:"/>
                <button class="export-btn">↗ Export</button>
                <button class="filter-btn">▼</button>
            </div>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th><input type="checkbox" class="checkbox"/></th>
                    <th>Freelancer</th>
                    <th>Expertise</th>
                    <th>Verified</th>
                    <th>Account Balance</th>
                    <th>Joined Date</th>
                    <th>Last Login</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                            <img id='img1' src={janetImage} alt="janet Picture"  />
                            <div class="freelancer-details">
                                <h4>Janet Paden</h4>
                                <p>georgewells@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>Frontend Developer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$7,763.05</td>
                    <td>21 April 2022</td>
                    <td>10 May 2022</td>
                    <td><span class="status active">Active</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                             <img id='img1' src={floydImage} alt="floyd Picture"  />
                                <div class="freelancer-details">
                                <h4>Floyd Lewis</h4>
                                <p>floydlewis@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>Graphic Designer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$6,763.05</td>
                    <td>11 Jun 2022</td>
                    <td>25 Sep 2021</td>
                    <td><span class="status active">Active</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                     <img id='img1' src={sitaImage} alt="sita Picture"  />

                            <div class="freelancer-details">
                                <h4>Sita Mahalaxmi</h4>
                                <p>Andrewglover@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>PHP Developer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$2,763.05</td>
                    <td>01 April 2022</td>
                    <td>28 Dec 2022</td>
                    <td><span class="status inactive">Inactive</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                           <img id='img1' src={jamesImage} alt="james Picture"  />
                                <div class="freelancer-details">
                                <h4>Mr james</h4>
                                <p>james@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>Frontend Developer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$7,763.05</td>
                    <td>21 April 2022</td>
                    <td>10 May 2022</td>
                    <td><span class="status active">Active</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                    <img id='img1' src={timothyImage} alt="timothy Picture"  />            
                            <div class="freelancer-details">
                                <h4>Mr Timothy</h4>
                                <p>Mr timothy@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>Graphic Designer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$6,763.05</td>
                    <td>11 Jun 2022</td>
                    <td>25 Sep 2021</td>
                    <td><span class="status active">Active</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" class="checkbox"/></td>
                    <td>
                        <div class="freelancer-info">
                       <img id='img1' src={georgeImage} alt="george Picture"  />    
                            <div class="freelancer-details">
                                <h4>George image</h4>
                                <p>george3212@example.com</p>
                            </div>
                        </div>
                    </td>
                    <td>PHP Developer</td>
                    <td><div class="verified">Email</div></td>
                    <td class="balance">$2,763.05</td>
                    <td>01 April 2022</td>
                    <td>28 Dec 2022</td>
                    <td><span class="status inactive">Inactive</span></td>
                    <td class="actions">
                        <button class="actions-btn">⋮</button>
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
                <button class="pagination-btn" disabled>›</button>
            </div>
        </div>
    </div>

</div>
    
    </>);
}