import Usersidebar from '../../components/Usersidebar';
import '../../cssfolder/Userdashboardcss/Usersetting.css';


export default function Usersetting(){

    return (<>
    <Usersidebar/>
    
    <div>
    <div class="profile-settings-container-unique">
        <h1 class="profile-main-title-unique">Profile Setting</h1>
        
        <form>
            <div class="profile-section-unique">
                <h2 class="profile-section-title-unique">Personal Information</h2>
                
                <div class="profile-picture-section-unique">
                    <label class="profile-picture-label-unique">Profile Picture</label>
                    <div class="profile-picture-container-unique">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Profile Picture" class="profile-avatar-unique"/>
                        <button type="button" class="upload-button-unique">Upload Image</button>
                    </div>
                    <div class="image-size-note-unique">Max Image size 300*300</div>
                </div>

                <div class="form-row-unique">
                    <div class="form-group-unique">
                        <label class="form-label-unique">First Name</label>
                        <input type="text" class="form-input-unique" placeholder=""/>
                    </div>
                    <div class="form-group-unique">
                        <label class="form-label-unique">Last Name</label>
                        <input type="text" class="form-input-unique" placeholder=""/>
                    </div>
                </div>

                <div class="form-row-unique">
                    <div class="form-group-unique">
                        <label class="form-label-unique">Phone Number</label>
                        <input type="tel" class="form-input-unique" placeholder=""/>
                    </div>
                    <div class="form-group-unique">
                        <label class="form-label-unique">Email Address</label>
                        <input type="email" class="form-input-unique" placeholder=""/>
                    </div>
                </div>
            </div>

            <div class="profile-section-unique">
                <h2 class="profile-section-title-unique">Address</h2>
                
                <div class="form-group-unique full-width-unique">
                    <label class="form-label-unique">Address</label>
                    <textarea class="form-textarea-unique" placeholder=""></textarea>
                </div>

                <div class="address-row-unique">
                    <div class="form-group-unique">
                        <label class="form-label-unique">Country</label>
                        <select class="form-select-unique">
                            <option value="">Select</option>
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="uk">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="jp">Japan</option>
                            <option value="in">India</option>
                        </select>
                    </div>
                    <div class="form-group-unique">
                        <label class="form-label-unique">State</label>
                        <select class="form-select-unique">
                            <option value="">Select</option>
                            <option value="al">Alabama</option>
                            <option value="ak">Alaska</option>
                            <option value="az">Arizona</option>
                            <option value="ar">Arkansas</option>
                            <option value="ca">California</option>
                            <option value="co">Colorado</option>
                            <option value="ct">Connecticut</option>
                            <option value="de">Delaware</option>
                            <option value="fl">Florida</option>
                            <option value="ga">Georgia</option>
                        </select>
                    </div>
                </div>

                <div class="city-zipcode-row-unique">
                    <div class="form-group-unique">
                        <label class="form-label-unique">City</label>
                        <select class="form-select-unique">
                            <option value="">Select</option>
                            <option value="nyc">New York City</option>
                            <option value="la">Los Angeles</option>
                            <option value="chicago">Chicago</option>
                            <option value="houston">Houston</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="philadelphia">Philadelphia</option>
                            <option value="san_antonio">San Antonio</option>
                            <option value="san_diego">San Diego</option>
                        </select>
                    </div>
                    <div class="form-group-unique">
                        <label class="form-label-unique">Zipcode</label>
                        <input type="text" class="form-input-unique" placeholder=""/>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>

    
    </>);
}