import '../../cssfolder/Userdashboardcss/Userreview.css';

import georgeImage from '../.././assets/george.jpg';
import sitaImage from '../.././assets/sita.jpg';
import timothyImage from '../.././assets/timothy.jpeg';
import floydImage from '../.././assets/floyd.avif';
import Developersidebar from '../../components/Developersidebar';


export default function Developerreview(){
    return (<>
    
    <div>
        <Developersidebar/>
    <div class="reviews-container-unique" >
        <h2 class="reviews-title-unique">Reviews</h2>
        
        <div class="review-card-unique">
            <h3 class="review-header-unique">Fast and clear.</h3>
            <p class="review-content-unique">Fast and clear. European visual concepts. Easy to communicate TOP</p>
            <div class="reviewer-info-unique">
               
                 <img src={georgeImage} alt="George picture" class="reviewer-avatar-unique"/>  
               
                <div class="reviewer-details-unique">
                    <div class="reviewer-name-unique">George patrick</div>
                    <div class="review-meta-unique">
                        <div class="star-rating-unique">
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-empty-unique">★</span>
                            <span class="rating-number-unique">4</span>
                        </div>
                        <div class="review-timestamp-unique">
                            <svg class="timestamp-icon-unique" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            Just now
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="review-card-unique">
            <h3 class="review-header-unique">This seller was great overall.</h3>
            <p class="review-content-unique">This seller was great overall One thing I noticed was that there was one logo out of the 4 I got that stood out amongst the others. Now I loved that one logo but the other ones did not look like much thought were put into them and they were a little disappointing. It is understandable for the price for them to only put effort into one logo, which like I said I loved. I think it would be better to tell this seller to make one good logo and to provide 3 other logos that work off the one good logo, Maybe make that one good logo and then, change colors and fonts for the other 3. But overall this seller was great!</p>
            <div class="reviewer-info-unique">
                

                 <img src={sitaImage} alt="George picture" class="reviewer-avatar-unique"/>  

                <div class="reviewer-details-unique">
                    <div class="reviewer-name-unique">Miss Sita</div>
                    <div class="review-meta-unique">
                        <div class="star-rating-unique">
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="rating-number-unique">5</span>
                        </div>
                        <div class="review-timestamp-unique">
                            <svg class="timestamp-icon-unique" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            1 min ago
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="review-card-unique">
            <h3 class="review-header-unique">Great help given and work</h3>
            <p class="review-content-unique">Great help given and work was done as asked on time! :)</p>
            <div class="reviewer-info-unique">
                
                <img src={timothyImage} alt="George picture" class="reviewer-avatar-unique"/>  
  
                <div class="reviewer-details-unique">
                    <div class="reviewer-name-unique">Mr Timothy </div>
                    <div class="review-meta-unique">
                        <div class="star-rating-unique">
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="rating-number-unique">5</span>
                        </div>
                        <div class="review-timestamp-unique">
                            <svg class="timestamp-icon-unique" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            25 mins ago
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="review-card-unique">
            <h3 class="review-header-unique">very quick & smart.</h3>
            <p class="review-content-unique">very quick & smart, Recommend him for any web related work</p>
            <div class="reviewer-info-unique">
                               <img src={floydImage} alt="George picture" class="reviewer-avatar-unique"/>  


                <div class="reviewer-details-unique">
                    <div class="reviewer-name-unique">Floyd McDonald</div>
                    <div class="review-meta-unique">
                        <div class="star-rating-unique">
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="star-filled-unique">★</span>
                            <span class="rating-number-unique">5</span>
                        </div>
                        <div class="review-timestamp-unique">
                            <svg class="timestamp-icon-unique" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                            </svg>
                            1 hour ago
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>);
}