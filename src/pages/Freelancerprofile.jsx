import '../cssfolder/Freelancerprofile.css'

export default  function Freelancerprofile() {

  return (
    <>

<div>
    <div className="container">
        <div className="main-content">
            {/*  Header  */}
            <div className="header">
                <div className="avatar">MS</div>
                <div className="header-info">
                    <h1>Dev Shukra</h1>
                    <div className="role">UI UX Designer</div>
                    <div className="header-meta">
                        <div className="meta-item">
                            <span className="icon-location"></span>
                            Los Angeles
                        </div>
                        <div className="meta-item">
                            <span className="icon-calendar"></span>
                            22 September 2023
                        </div>
                        <div className="meta-item">
                            <span className="icon-star"></span>
                            5.0, 245 Reviews
                        </div>
                    </div>
                </div>
            </div>

            {/*  Stats  */}
            <div className="stats">
                <div className="stat-group">
                    <div className="stat-item recommended">
                        <div className="stat-icon">👍</div>
                        <div className="stat-content">
                            <div className="stat-value">89%</div>
                            <p>Recommended</p>
                        </div>
                    </div>
                    <div className="stat-item feedbacks">
                        <div className="stat-icon">💬</div>
                        <div className="stat-content">
                            <div className="stat-value">78</div>
                            <p>Feedbacks</p>
                        </div>
                    </div>
                </div>
                <div className="stat-group">
                    <div className="stat-item completed">
                        <div className="stat-icon">✅</div>
                        <div className="stat-content">
                            <div className="stat-value">220</div>
                            <p>Completed Projects</p>
                        </div>
                    </div>
                    <div className="stat-item rehired">
                        <div className="stat-icon">🔄</div>
                        <div className="stat-content">
                            <div className="stat-value">Rehired</div>
                            <p>Rehired</p>
                        </div>
                    </div>
                </div>
                <div className="stat-group">
                    <div className="stat-item ongoing">
                        <div className="stat-icon">⏳</div>
                        <div className="stat-content">
                            <div className="stat-value">10</div>
                            <p>Ongoing Projects</p>
                        </div>
                    </div>
                    <div className="stat-item response">
                        <div className="stat-icon">⚡</div>
                        <div className="stat-content">
                            <div className="stat-value">1 Hour</div>
                            <p>Response Times</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Description  */}
            <div className="description">
                <h2 className="section-title">Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>

            {/*  Experience  */}
            <div className="experience">
                <h2 className="section-title">Experience</h2>
                <div className="experience-item">
                    <div className="exp-icon">👥</div>
                    <div className="exp-content">
                        <h4>Team Leader <span className="exp-dates">2017-2023</span></h4>
                        <div className="exp-company">UI UX Designer</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="exp-icon">🎨</div>
                    <div className="exp-content">
                        <h4>Senior UT Ux Designer <span className="exp-dates">2019-2021</span></h4>
                        <div className="exp-company">UI UX Designer</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="exp-icon">💡</div>
                    <div className="exp-content">
                        <h4>junior UT Ux Designer <span className="exp-dates">2016-2019</span></h4>
                        <div className="exp-company">UI UX Designer</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="sidebar">
            {/*  Budget Card  */}
            <div className="sidebar-card">
                <div className="budget-header">
                    <div className="budget-title">Budget</div>
                    <div className="budget-amount">$125-$180</div>
                    <div className="budget-type">Hourly Rate</div>
                </div>
                <ul className="info-list">
                    <li className="info-item">
                        <span className="info-label"><span className="icon-location"></span>Location</span>
                        <span className="info-value">London, UK</span>
                    </li>
                    <li className="info-item">
                        <span className="info-label"><span className="icon-building"></span>Years of Experience</span>
                        <span className="info-value">5 Years</span>
                    </li>
                    <li className="info-item">
                        <span className="info-label"><span className="icon-delivery"></span>Delivery Time</span>
                        <span className="info-value">3-5 Days</span>
                    </li>
                    <li className="info-item">
                        <span className="info-label"><span className="icon-language"></span>Language Level</span>
                        <span className="info-value">Basic</span>
                    </li>
                    <li className="info-item">
                        <span className="info-label"><span className="icon-phone"></span>Phone</span>
                        <span className="info-value">+919988776655</span>
                    </li>
                    <li className="info-item">
                        <span className="info-label"><span className="icon-mail"></span>Mail</span>
                        <span className="info-value">info@example.com</span>
                    </li>
                </ul>
                <button className="send-invite">Send Invite</button>
            </div>

            {/*  Skills Card  */}
            <div className="sidebar-card">
                <h3 className="section-title">Skills</h3>
                <div className="skills-grid">
                    <span className="skill-tag">After Effects</span>
                    <span className="skill-tag">Illustrator</span>
                    <span className="skill-tag">html</span>
                    <span className="skill-tag">Whiteboard</span>
                    <span className="skill-tag">Software Design</span>
                    <span className="skill-tag">html5</span>
                    <span className="skill-tag">Design Writing</span>
                    <span className="skill-tag">Whiteboard</span>
                    <span className="skill-tag">Web design</span>
                </div>
            </div>

            {/*  Location Card  */}
            <div className="sidebar-card">
                <h3 className="section-title">Location</h3>
                <div className="map-container">
                    <div className="map-placeholder">
                        <div className="map-pin"></div>
                        Map showing location in London, UK
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      
    </>
  )
}


