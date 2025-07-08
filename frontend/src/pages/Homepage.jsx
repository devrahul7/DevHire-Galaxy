import { useEffect } from 'react';
import '../cssfolder/Homepage.css'; 
import { useNavigate } from 'react-router-dom';

import jamesImage from '../assets/james.avif';
import timothyImage from '../assets/timothy.jpeg';
import janetImage from '../assets/janet.avif';
import floydImage from '../assets/floyd.avif';
import Footer from '../components/Homepagecomponents/Footer';
import Navbar from '../components/Homepagecomponents/Navbar';
 

export default function Homepage() {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleClick = (e) => {
            if (e.target.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(e.target.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        // Add scroll effect to header
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(30, 58, 138, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#1e3a8a';
                header.style.backdropFilter = 'none';
            }
        };

        // Animate cards on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Apply animation to cards
        document.querySelectorAll('.project-card, .review-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Add event listeners
        document.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);
        const navigate = useNavigate();


    return (
        <div>
          
          <Navbar/>
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 id='getperfect'>Get the Perfect Developers & Projects</h1>
                            <p>Connect with top-rated developers worldwide and find the perfect project that matches your skills. Build your career with confidence.</p>
                            <a onClick={() => navigate('/login')} id='getstartednow' >Get Started</a>
                            <div className="hero-stats">
                                <div className="stat">
                                    <span className="stat-number">5K+</span>
                                    <span>Projects</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">2K+</span>
                                    <span>Developers</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">98%</span>
                                    <span>Success Rate</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-image">
                            
                            <div style={{
                                width: '400px',
                                height: '300px',
                                // background: 'rgba(255,255,255,0.1)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto'
                            }}   >
                            <img src={jamesImage} alt="james image"/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recently Updated Projects */}
            <section className="section" id="projects">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Recently Updated Projects for You</h2>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">Mobile App Design</div>
                            <div className="project-content">
                                <h3 className="project-title">E-commerce Mobile App</h3>
                                <p className="project-description">Modern mobile app design for online shopping platform with intuitive user experience.</p>
                                <div className="project-meta">
                                    <span className="project-price">$1,200</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">Web Development</div>
                            
                            <div className="project-content">
                                <h3 className="project-title">Corporate Website</h3>
                                <p className="project-description">Professional website development using modern frameworks and responsive design.</p>
                                <div className="project-meta">
                                    <span className="project-price">$2,500</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">Data Analysis</div>
                            <div className="project-content">
                                <h3 className="project-title">Business Analytics Dashboard</h3>
                                <p className="project-description">Interactive dashboard for business intelligence and data visualization.</p>
                                <div className="project-meta">
                                    <span className="project-price">$1,800</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">AI/ML Project</div>
                            <div className="project-content">
                                <h3 className="project-title">Machine Learning Model</h3>
                                <p className="project-description">Custom ML model development for predictive analytics and automation.</p>
                                <div className="project-meta">
                                    <span className="project-price">$3,200</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">Game Development</div>
                            <div className="project-content">
                                <h3 className="project-title">Indie Game Project</h3>
                                <p className="project-description">2D indie game development with engaging gameplay and stunning visuals.</p>
                                <div className="project-meta">
                                    <span className="project-price">$2,800</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-card">
                            <div className="project-image">Blockchain</div>
                            <div className="project-content">
                                <h3 className="project-title">DeFi Platform</h3>
                                <p className="project-description">Decentralized finance platform with smart contracts and Web3 integration.</p>
                                <div className="project-meta">
                                    <span className="project-price">$4,500</span>
                                    <div className="project-rating">
                                        <span className="stars">★★★★★</span>
                                        <span>4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  style={{ textAlign: 'center' , marginTop: '1px' }}>
                        <a onClick={() => navigate('/adminprojects')} className="btn btn-primary-homepage">View All Projects</a>
                    </div>
                </div>
            </section>

           

            {/* Featured Skills */}
            <section className="section skills-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Featured Skills</h2>
                    </div>
                    <div className="skills-grid">
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">Python</div>
                        <div className="skill-item">React</div>
                        <div className="skill-item">Node.js</div>
                        <div className="skill-item">UI/UX Design</div>
                        <div className="skill-item">Mobile App</div>
                        <div className="skill-item">Machine Learning</div>
                        <div className="skill-item">Blockchain</div>
                        <div className="skill-item">DevOps</div>
                        <div className="skill-item">Cloud Computing</div>
                        <div className="skill-item">Data Science</div>
                        <div className="skill-item">Game Development</div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section stats-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">What's Great About DevHire</h2>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>5000+</h3>
                            <p>Active Projects</p>
                        </div>
                        <div className="stat-item">
                            <h3>2500+</h3>
                            <p>Expert Developers</p>
                        </div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Success Rate</p>
                        </div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section reviews-section">
                <div className="container">
                    <div className="section-header">
                        <h2   id='reviewofusers' className="section-title">Reviews Of The Users</h2>
                    </div>
                    <div className="reviews-grid">
                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">JD</div>
                                <div>
                                    <h4>John Doe</h4>
                                    <p>CEO, TechCorp</p>
                                </div>
                            </div>
                            <div className="stars">★★★★★</div>
                            <p>"Amazing platform! Found the perfect developer for our project. The quality of work exceeded our expectations."</p>
                        </div>
                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">SM</div>
                                <div>
                                    <h4>Sarah Mitchell</h4>
                                    <p>Startup Founder</p>
                                </div>
                            </div>
                            <div className="stars">★★★★★</div>
                            <p>"Great experience working with developers from DevHire. Professional, timely, and excellent communication throughout."</p>
                        </div>

 <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">SM</div>
                                <div>
                                    <h4>Sarah Mitchell</h4>
                                    <p>Startup Founder</p>
                                </div>
                            </div>
                            <div className="stars">★★★★★</div>
                            <p>"Great experience working with developers from DevHire. Professional, timely, and excellent communication throughout."</p>
                        </div>

                        


                        <div className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">MJ</div>
                                <div>
                                    <h4>Sita Mahalaxmi</h4>
                                    <p>Product Manager</p>
                                </div>
                            </div>
                            <div className="stars">★★★★★</div>
                            <p>"The platform made it easy to find skilled developers. Our mobile app project was completed ahead of schedule."</p>
                        </div>
                    </div>
                </div>
            </section>
 <Footer/>
        </div>
    );
}