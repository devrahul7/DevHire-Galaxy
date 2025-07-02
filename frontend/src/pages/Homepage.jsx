import '../cssfolder/Homepage.css'; // Updated import path to the new CSS file


export default function Homepage(){
    return (<>
    <div>
    {/*  Header  */}
    <header>
        <div class="container">
            <div class="header-content">
                <div class="logo">KofeJob</div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#jobs">Jobs</a></li>
                        <li><a href="#employers">Employers</a></li>
                        <li><a href="#candidates">Candidates</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#pages">Pages</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div class="auth-buttons">
                    <a href="#login" class="btn btn-outline">Login</a>
                    <a href="#register" class="btn btn-primary">Register</a>
                </div>
            </div>
        </div>
    </header>

    {/*  Hero Section  */}
    <section class="hero">
        <div class="container">
            <h1>Find Your Dream Job</h1>
            <p>Search Between More Than 50,000 Open Jobs</p>
            
            <div class="search-form">
                <div class="search-row">
                    <div class="form-group">
                        <label for="location">Location</label>
                        <select id="location">
                            <option>Select Location</option>
                            <option>New York</option>
                            <option>Los Angeles</option>
                            <option>Chicago</option>
                            <option>Houston</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="category">Job Category</label>
                        <select id="category">
                            <option>Select Category</option>
                            <option>Technology</option>
                            <option>Marketing</option>
                            <option>Design</option>
                            <option>Sales</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="keywords">Keywords</label>
                        <input type="text" id="keywords" placeholder="Job title, keywords..."/>
                    </div>
                    <button class="search-btn">Search Jobs</button>
                </div>
            </div>

            <div class="popular-tags">
                <p>Popular Searches:</p>
                <div class="tags">
                    <a href="#" class="tag">Designer</a>
                    <a href="#" class="tag">Developer</a>
                    <a href="#" class="tag">IOS</a>
                    <a href="#" class="tag">Android</a>
                    <a href="#" class="tag">Manager</a>
                </div>
            </div>
        </div>
    </section>

    {/*  Stats Section  */}
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>50,000+</h3>
                    <p>Jobs Posted</p>
                </div>
                <div class="stat-item">
                    <h3>25,000+</h3>
                    <p>Jobs Filled</p>
                </div>
                <div class="stat-item">
                    <h3>15,000+</h3>
                    <p>Companies</p>
                </div>
                <div class="stat-item">
                    <h3>100,000+</h3>
                    <p>Candidates</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Categories Section  */}
    <section class="categories">
        <div class="container">
            <div class="section-title">
                <h2>Browse Jobs by Category</h2>
                <p>Find the perfect job in your preferred industry</p>
            </div>
            <div class="categories-grid">
                <div class="category-card">
                    <div class="category-icon">💻</div>
                    <h3>Technology</h3>
                    <p>5,230 Jobs Available</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">🎨</div>
                    <h3>Design</h3>
                    <p>2,150 Jobs Available</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">📊</div>
                    <h3>Marketing</h3>
                    <p>3,420 Jobs Available</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">💼</div>
                    <h3>Business</h3>
                    <p>4,680 Jobs Available</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">🏥</div>
                    <h3>Healthcare</h3>
                    <p>1,890 Jobs Available</p>
                </div>
                <div class="category-card">
                    <div class="category-icon">🎓</div>
                    <h3>Education</h3>
                    <p>2,340 Jobs Available</p>
                </div>
            </div>
        </div>
    </section>
</div>

    </>);
}