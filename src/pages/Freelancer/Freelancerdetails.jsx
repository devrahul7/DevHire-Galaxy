// import '../.././cssfolder/Freelancerdetails.css';
import '../../cssfolder/Freelancercss/Freelancerdetails.css';

import georgeImage from '../.././assets/george.jpg';
import sitaImage from '../.././assets/sita.jpg';
import timothyImage from '../.././assets/timothy.jpeg';
import janetImage from '../.././assets/janet.avif';
import jamesImage from '../.././assets/james.avif';
import floydImage from '../.././assets/floyd.avif';


export default function Freelancerdetails(){
    return   <>
    <div className="container">
        {/*  Sidebar Filters */}
        <div className="sidebar">
            <h3>Search Filter</h3>
            
            {/*  Location Filter */}
            <div className="filter-section">
                <h4>Location <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox"/> USA (25)</label>
                    <label><input type="checkbox"/> IND (62)</label>
                    <label><input type="checkbox"/> UK (46)</label>
                    <label><input type="checkbox"/> AUS (37)</label>
                </div>
                <button className="show-more">+ Show More</button>
            </div>

            {/*  Skills Filter */}
            <div className="filter-section">
                <h4>Skills <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox"/> After Effects(6)</label>
                    <label><input type="checkbox"/> Android Developer (7)</label>
                    <label><input type="checkbox"/> Backend Developer (7)</label>
                    <label><input type="checkbox"/> Computer Operator (1)</label>
                </div>
                <button className="show-more">+ Show More</button>
            </div>

            {/*  Category Filter */}
            <div className="filter-section">
                <h4>Category <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox"/> Developer (25)</label>
                    <label><input type="checkbox"/> UI Developer (62)</label>
                    <label><input type="checkbox"/> React Developer (46)</label>
                    <label><input type="checkbox"/> Net Developer (37)</label>
                </div>
                <button className="show-more">+ Show More</button>
            </div>

            {/*  Freelancer Type Filter */}
            <div className="filter-section">
                <h4>Freelancer Type <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox" className="square"/> Fixed (6)</label>
                    <label><input type="checkbox" className="square"/> Hourly (7)</label>
                </div>
            </div>

            {/*  Languages Filter */}
            <div className="filter-section">
                <h4>Languages <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox"/> English (5)</label>
                    <label><input type="checkbox"/> Arabic(2)</label>
                    <label><input type="checkbox" className="square"/> German (1)</label>
                </div>
                <button className="show-more">+ Show More</button>
            </div>

            {/*  Full Time Filter */}
            <div className="filter-section">
                <h4>Freelancer Type <span className="arrow">▼</span></h4>
                <div className="checkbox-group">
                    <label><input type="checkbox" className="square"/> Full Time (3)</label>
                </div>
            </div>
        </div>

        {/*  Main Content */}
        <div className="main-content">
            {/*  Header */}
            <div className="content-header">
                <span className="results-count">Found 9 Results</span>
                <div className="sort-controls">
                    <span>Sort by</span>
                    <select className="sort-select">
                        <option>(Default)</option>
                    </select>
                    <div className="view-toggle">
                        <button className="view-btn grid-view active">⊞</button>
                        <button className="view-btn list-view">☰</button>
                    </div>
                </div>
            </div>

            {/*  Freelancer Cards Grid */}
            <div className="freelancer-grid">
                {/*  Row 1 */}
                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn">♡</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">

                     <img src={georgeImage} alt="George picture" />  
                     {/* image import */}
                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>George Wells</h3>
                        <p className="job-title">UI/UX Designer</p>
                        <p className="location">📍 Alabama, USA</p>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-text">4.7 (32)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">$25 Hourly</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>

                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn favorited">♥</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">

                                     {/* image import */}
                            <img src={timothyImage} alt="Timothy Picture" />
                            
                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>Timothy Smith</h3>
                        <p className="job-title">PHP Developer</p>
                        <p className="location">📍 Illinois, USA</p>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-text">4.8 (55)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">$21 Hourly</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>

                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn">♡</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">

                    {/* import image  */}
                    <img src={janetImage} alt="Janet Picture" />
                                                

                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>Janet Pagan</h3>
                        <p className="job-title">Graphic Designer</p>
                        <p className="location">📍 New York, USA</p>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-text">4.1 (30)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">Free</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>

                {/*  Row 2  */}
                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn">♡</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">
                            
                            {/* import image  */}

                            <img src={jamesImage} alt="James Picture" />

                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>James Douglas</h3>
                        <p className="job-title">iOS Developer</p>
                        <p className="location">📍 Florida, USA</p>
                        <div className="rating">
                            <span className="stars">★★★☆☆</span>
                            <span className="rating-text">3.2 (22)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">Free</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>

                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn">♡</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">

                            {/* import image  */}
                            <img src={floydImage} alt="Floyd Picture" />

                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>Floyd Lewis</h3>
                        <p className="job-title">SEO Developer</p>
                        <p className="location">📍 Texas, USA</p>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-text">4.9 (40)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">$30 Hourly</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>

                <div className="freelancer-card">
                    <div className="card-header">
                        <button className="favorite-btn">♡</button>
                    </div>
                    <div className="profile-section">
                        <div className="profile-image">

                        {/* import image  */}

                         <img src={sitaImage} alt="sita Picture" />


                           
                            <span className="status-badge online">✓</span>
                        </div>
                        <h3>Sita Ram</h3>
                        <p className="job-title">SM Developer</p>
                        <p className="location">📍 California, USA</p>
                        <div className="rating">
                            <span className="stars">★★★★☆</span>
                            <span className="rating-text">4.3 (35)</span>
                        </div>
                        <div className="skills">
                            <span className="skill-tag">Web Design</span>
                            <span className="skill-tag">UI Design</span>
                            <span className="skill-tag">Node Js</span>
                        </div>
                        <div className="price">$12 Hourly</div>
                        <div className="actions">
                            <button className="invite-btn">Invite</button>
                            <button className="profile-btn">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>




}