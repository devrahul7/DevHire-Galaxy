import Usersidebar from '../../components/Usersidebar';
import '../../cssfolder/Userdashboardcss/Userfreelancerviewprofile.css';


export default  function Userfreelancerviewprofile() {

  return (
    <>
<div>
    <Usersidebar/>
    <div class="freelancer-profile-wrapper-x">
        <div class="freelancer-main-container-x">
            {/*  Main Content  */}
            <div>
                {/*  Profile Header  */}
                <div class="freelancer-header-card-x">
                    <div class="freelancer-profile-top-x">
                        <div class="freelancer-avatar-container-x">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Michael Stewart" class="freelancer-avatar-image-x"/>
                        </div>
                        <div class="freelancer-info-details-x">
                            <h1 class="freelancer-name-title-x">Michael Stewart</h1>
                            <p class="freelancer-job-title-x">UI UX Designer</p>
                            <div class="freelancer-meta-info-x">
                                <div class="freelancer-meta-item-x">
                                    <svg class="freelancer-meta-icon-x" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                    </svg>
                                    Los Angeles
                                </div>
                                <div class="freelancer-meta-item-x">
                                    <svg class="freelancer-meta-icon-x" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                    </svg>
                                    22 September 2023
                                </div>
                                <div class="freelancer-rating-display-x">
                                    <span class="freelancer-star-icon-x">★</span>
                                    <span>5.0, 245 Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="freelancer-stats-grid-x">
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-recommended-icon-x">📋</div>
                            <div class="freelancer-stat-value-x">89%</div>
                            <div class="freelancer-stat-label-x">Recommended</div>
                        </div>
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-completed-icon-x">🕒</div>
                            <div class="freelancer-stat-value-x">220</div>
                            <div class="freelancer-stat-label-x">Completed Projects</div>
                        </div>
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-ongoing-icon-x">🕒</div>
                            <div class="freelancer-stat-value-x">10</div>
                            <div class="freelancer-stat-label-x">Ongoing Projects</div>
                        </div>
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-feedback-icon-x">👤</div>
                            <div class="freelancer-stat-value-x">78</div>
                            <div class="freelancer-stat-label-x">Feedbacks</div>
                        </div>
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-retired-icon-x">🚫</div>
                            <div class="freelancer-stat-value-x">Rehired</div>
                            <div class="freelancer-stat-label-x">Rehired</div>
                        </div>
                        <div class="freelancer-stat-item-x">
                            <div class="freelancer-stat-icon-x freelancer-response-icon-x">⏱️</div>
                            <div class="freelancer-stat-value-x">1 Hour</div>
                            <div class="freelancer-stat-label-x">Response Times</div>
                        </div>
                    </div>
                </div>

                {/*  Description  */}
                <div class="freelancer-description-card-x">
                    <h2 class="freelancer-section-title-x">Description</h2>
                    <p class="freelancer-description-text-x">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, Duis aute 
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="freelancer-description-text-x">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt,
                    </p>
                </div>

                {/*  Experience  */}
                <div class="freelancer-experience-card-x">
                    <h2 class="freelancer-section-title-x">Experience</h2>
                    
                    <div class="freelancer-experience-item-x">
                        <div class="freelancer-exp-icon-x">🏢</div>
                        <div class="freelancer-exp-content-x">
                            <div class="freelancer-exp-header-x">
                                <h3 class="freelancer-exp-title-x">Team Leader</h3>
                                <span class="freelancer-exp-period-x">2017-2023</span>
                            </div>
                            <p class="freelancer-exp-company-x">UI UX Designer</p>
                            <p class="freelancer-exp-description-x">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>

                    <div class="freelancer-experience-item-x">
                        <div class="freelancer-exp-icon-x">🏢</div>
                        <div class="freelancer-exp-content-x">
                            <div class="freelancer-exp-header-x">
                                <h3 class="freelancer-exp-title-x">Senior UT Ux Designer</h3>
                                <span class="freelancer-exp-period-x">2019-2021</span>
                            </div>
                            <p class="freelancer-exp-company-x">UI UX Designer</p>
                            <p class="freelancer-exp-description-x">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>

                    <div class="freelancer-experience-item-x">
                        <div class="freelancer-exp-icon-x">🏢</div>
                        <div class="freelancer-exp-content-x">
                            <div class="freelancer-exp-header-x">
                                <h3 class="freelancer-exp-title-x">junior UT Ux Designer</h3>
                                <span class="freelancer-exp-period-x">2016-2019</span>
                            </div>
                            <p class="freelancer-exp-company-x">UI UX Designer</p>
                            <p class="freelancer-exp-description-x">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Sidebar  */}
            <div class="freelancer-sidebar-container-x">
                {/*  Budget Card  */}
                <div class="freelancer-sidebar-card-x">
                    <div class="freelancer-budget-section-x">
                        <div class="freelancer-budget-label-x">Budget</div>
                        <div class="freelancer-budget-amount-x">$125-$180</div>
                        <div class="freelancer-budget-rate-x">Hourly Rate</div>
                    </div>
                    
                    <div class="freelancer-details-list-x">
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                </svg>
                                Location
                            </span>
                            <span class="freelancer-detail-value-x">London, UK</span>
                        </div>
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Years of Experience
                            </span>
                            <span class="freelancer-detail-value-x">5 Years</span>
                        </div>
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                                </svg>
                                Delivery Time
                            </span>
                            <span class="freelancer-detail-value-x">3-5 Days</span>
                        </div>
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                </svg>
                                Language Level
                            </span>
                            <span class="freelancer-detail-value-x">Basic</span>
                        </div>
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                Phone
                            </span>
                            <span class="freelancer-detail-value-x">-919988776655</span>
                        </div>
                        <div class="freelancer-detail-row-x">
                            <span class="freelancer-detail-label-x">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                Mail
                            </span>
                            <span class="freelancer-detail-value-x">info@example.com</span>
                        </div>
                    </div>
                    
                    <button class="freelancer-invite-btn-x">Send Invite</button>
                </div>

                {/*  Skills Card  */}
                <div class="freelancer-sidebar-card-x">
                    <h3 class="freelancer-section-title-x">Skills</h3>
                    <div class="freelancer-skills-grid-x">
                        <span class="freelancer-skill-tag-x">After Effects</span>
                        <span class="freelancer-skill-tag-x">Illustrator</span>
                        <span class="freelancer-skill-tag-x">html</span>
                        <span class="freelancer-skill-tag-x">Whiteboard</span>
                        <span class="freelancer-skill-tag-x">Software Design</span>
                        <span class="freelancer-skill-tag-x">html5</span>
                        <span class="freelancer-skill-tag-x">Design Writing</span>
                        <span class="freelancer-skill-tag-x">Whiteboard</span>
                        <span class="freelancer-skill-tag-x">Web design</span>
                    </div>
                </div>

                {/*  Location Card  */}
                <div class="freelancer-sidebar-card-x">
                    <h3 class="freelancer-section-title-x">Location</h3>
                    <div class="freelancer-map-container-x">
                        <div class="freelancer-map-placeholder-x">
                            📍 Map Location Display
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



    </>
  );
}


