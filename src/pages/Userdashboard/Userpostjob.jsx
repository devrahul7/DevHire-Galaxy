import '../../cssfolder/Userdashboardcss/Userpostjob.css';

import Usersidebar from "../../components/Usersidebar";

export default function Userpostjob(){

    return (<>

<div>

        <Usersidebar/>

    <div class="pcf-form">
        <div class="pcf-container">
            {/* Basic Details Section  */}
            <div class="pcf-section">
                <h2 class="pcf-section-title">Basic Details</h2>
                
                <div class="pcf-form-group">
                    <label class="pcf-label" for="project-title">Project Title</label>
                    <input type="text" id="project-title" class="pcf-input" placeholder="Enter project title"/>
                </div>

                <div class="pcf-form-row">
                    <div class="pcf-form-group">
                        <label class="pcf-label" for="project-category">Project Category</label>
                        <select id="project-category" class="pcf-select">
                            <option value="">Select</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-development">Mobile Development</option>
                            <option value="design">Design</option>
                            <option value="writing">Writing</option>
                        </select>
                    </div>

                    <div class="pcf-form-group">
                        <label class="pcf-label" for="project-duration">Project Duration</label>
                        <select id="project-duration" class="pcf-select">
                            <option value="">1-3Week</option>
                            <option value="1-week">1 Week</option>
                            <option value="2-weeks">2 Weeks</option>
                            <option value="3-weeks">3 Weeks</option>
                            <option value="1-month">1 Month</option>
                            <option value="2-months">2 Months</option>
                            <option value="3-months">3+ Months</option>
                        </select>
                    </div>

                    <div class="pcf-form-group">
                        <label class="pcf-label" for="deadline-date">Deadline Date</label>
                        <input type="date" id="deadline-date" class="pcf-date-input" placeholder="Choose"/>
                    </div>
                </div>

                <div class="pcf-form-row-two">
                    <div class="pcf-form-group">
                        <label class="pcf-label" for="freelancer-type">Freelancer Type</label>
                        <select id="freelancer-type" class="pcf-select">
                            <option value="">Select</option>
                            <option value="individual">Individual</option>
                            <option value="agency">Agency</option>
                            <option value="team">Team</option>
                        </select>
                    </div>

                    <div class="pcf-form-group">
                        <label class="pcf-label" for="freelancer-level">Freelancer Level</label>
                        <select id="freelancer-level" class="pcf-select">
                            <option value="">Basic</option>
                            <option value="entry">Entry Level</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>
                </div>

                <div class="pcf-form-group">
                    <label class="pcf-label" for="tags">Tags</label>
                    <input type="text" id="tags" class="pcf-input" placeholder="Enter tags separated by commas"/>
                </div>
            </div>

            {/* Skills Section  */}
            <div class="pcf-section">
                <h2 class="pcf-section-title">Skills</h2>
                
                <div class="pcf-form-group">
                    <label class="pcf-label" for="skill-set">Skill Set</label>
                    <div class="pcf-skills-container">
                        <div class="pcf-skill-tag">
                            Web Design
                            <button type="button" class="pcf-skill-remove">×</button>
                        </div>
                        <input type="text" id="skill-set" class="pcf-skills-input" placeholder="UX, UI, App Design, Wirefram" value="UX, UI, App Design, Wirefram"/>
                    </div>
                    <div class="pcf-help-text">Enter skills for needed for project, for best result add 5 or more Skills</div>
                </div>
            </div>

            {/* Budget Section  */}
            <div class="pcf-section">
                <h2 class="pcf-section-title">Budget</h2>
                
                <div class="pcf-budget-options">
                    <div class="pcf-budget-option pcf-selected" onclick="selectBudgetType('hourly')">
                        <input type="radio" name="budget-type" value="hourly" checked/>
                        <div class="pcf-budget-icon">🕐</div>
                        <div class="pcf-budget-title">Hourly Rate</div>
                    </div>
                    
                    <div class="pcf-budget-option" onclick="selectBudgetType('fixed')">
                        <input type="radio" name="budget-type" value="fixed"/>
                        <div class="pcf-budget-icon">💰</div>
                        <div class="pcf-budget-title">Fixed budget</div>
                    </div>
                </div>

                <div class="pcf-budget-inputs">
                    <div class="pcf-input-group">
                        <label class="pcf-label" for="budget-from">From ($)</label>
                        <div class="pcf-input-prefix">
                            <span class="pcf-prefix-symbol">$</span>
                            <input type="number" id="budget-from" class="pcf-input" value="15"/>
                        </div>
                    </div>

                    <div class="pcf-input-group">
                        <label class="pcf-label" for="budget-to">To ($)</label>
                        <div class="pcf-input-prefix">
                            <span class="pcf-prefix-symbol">$</span>
                            <input type="number" id="budget-to" class="pcf-input" value="250"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

    </>);
}