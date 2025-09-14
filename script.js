var facultyLink = document.getElementById('nav-faculty-link');
var courseLink = document.getElementById('nav-course-link');
var newsEventsLink = document.getElementById('nav-news&events-link');
var careerLink = document.getElementById('nav-career-link');
var aminitiesLink = document.getElementById('nav-aminities-link');
var aboutLink = document.getElementById('nav-about-link');
var contactLink = document.getElementById('nav-contact-link');
var homeLink = document.getElementById('nav-home-link');

var mainContainer = document.getElementById('main-container');
var currentPage = homeLink;
 function setActiveLink(activeLink) {
       currentPage.classList.remove('active');  
       activeLink.classList.add('active');    
        currentPage = activeLink;
    }


facultyLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !==  facultyLink) {
        mainContainer.innerHTML = `<!-- Page Header -->
    <header class="page-header">
        <div class="container">
            <h1 class="page-title">Our Faculty</h1>
            <p class="page-subtitle">Meet the dedicated team of educators and staff who are shaping the future of technology at our department.</p>
        </div>
    </header>

    <!-- Main Content: Faculty Details -->
    <main class="faculty-grid-section">
        <div class="container">
            <!-- HOD Row -->
            <div class="faculty-row">
                <div class="faculty-card">
                     <img src="images/faculty/hod.jpg" alt="Head of Department" class="faculty-image">
                    <h3 class="faculty-name">Dr.Vijay Anand K S</h3>
                    <p class="faculty-title">Head of Department</p>
                </div>
            </div>

            <!-- Assistant Professors Row -->
            <div class="faculty-row">
                <div class="faculty-card">
                    <img src="images/faculty/rateesh.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Prof.Rateesh T K</h3>
                    <p class="faculty-title">Assistant Professor</p>
                </div>
                <div class="faculty-card">
                     <img src="images/faculty/rejin.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Prof.Rejin R</h3>
                    <p class="faculty-title">Assistant Professor</p>
                </div>
                <div class="faculty-card">
                   <img src="images/faculty/praveen.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Prof.Praveen</h3>
                    <p class="faculty-title">Assistant Professor</p>
                </div>
            </div>

            <!-- Lecturers Row -->
            <div class="faculty-row">
                 <div class="faculty-card">
                     <img src="images/faculty/shafeena.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Ms.Shafeena</h3>
                    <p class="faculty-title">Lecturer</p>
                </div>
                 <div class="faculty-card">
                    <img src="images/faculty/sreedivya.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Ms.Sreedivya</h3>
                    <p class="faculty-title">Lecturer</p>
                </div>
                 <div class="faculty-card">
                    <img src="images/faculty/sudhina.jpg" alt="Faculty Member" class="faculty-image">
                    <h3 class="faculty-name">Mr.Sudhina</h3>
                    <p class="faculty-title">Lecturer</p>
                </div>
            </div>

           
        </div>
    </main>`;
       
        setActiveLink(facultyLink);
        
    }
});


homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !== homeLink) {
        mainContainer.innerHTML = ` <section class="banner">
            <h1 class="banner-heading">Welcome to the Department of IT</h1>
            <p class="banner-tagline">Fostering Innovation and Excellence in Information Technology.</p>
            <div class="banner-buttons">
                <a href="#" class="btn btn-primary" >
                    Explore Courses 
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg> -->
                </a>
                <a href="#" class="btn btn-secondary">Learn More</a>
            </div>
        </section>

        <!-- Message from HOD Section -->
        <section class="hod-message-section">
            <div class="container">
                <h2 class="hod-message-section-heading">Message from the HOD</h2>
                <div class="hod-message-content">
                    <div class="hod-message-text">
                        <p>"Department of information Technology is started in the year 2000 with under graduate B.Tech course and post graduate programme M.Tech with specialization in Network Engineering started in the year 2013. Department functions with eminent and dedicated faculty members and supporting staffs and equipped with established lab facility and smart class rooms. Our Department focuses towards outcome based education which emphasis on the placement by providing quality education. Various training programmes, remedial classes, poster presentations and GATE coaching classes are organized throughout the year. Our faculty members and students are deeply engaged in research work and five of our student projects got approval for funding in this academic year.".</p>
                    </div>
                    <div class="hod-image-container">
                        <img src="images/hod.jpg" alt="Head of Department" class="hod-image">
                    </div>
                </div>
            </div>
        </section>

    
        <!-- Stats Section -->
        <section class="stats-section">
            <div class="container">
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                        </div>
                        <h3 class="stat-number">300+</h3>
                        <p class="stat-label">Active Students</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                        </div>
                        <h3 class="stat-number">15+</h3>
                        <p class="stat-label">Faculties</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                            </svg>
                        </div>
                        <h3 class="stat-number">200+</h3>
                        <p class="stat-label">Projects</p>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"/> <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                            </svg>
                        </div>
                        <h3 class="stat-number">100+</h3>
                        <p class="stat-label">Placments</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- News & Events Section -->
        <section class="news-events-section">
            <div class="container">
                <h2 class="section-heading">News & Events</h2>
                <p class="section-subheading">Stay updated with our latest announcements, events, and community achievements.</p>
                <div class="news-grid">
                    <!-- Card 1 -->
                    <div class="news-card">
                        <img src="https://placehold.co/600x400/e2e8f0/4a5568?text=Event+One" alt="News event image">
                        <div class="card-content">
                            <p class="card-date">September 10, 2025</p>
                            <h3 class="card-title">MuLearn GECI ExeCom</h3>
                        </div>
                    </div>
                    <!-- Card 2 -->
                    <div class="news-card">
                        <img src="https://placehold.co/600x400/e2e8f0/4a5568?text=Event+Two" alt="News event image">
                        <div class="card-content">
                            <p class="card-date">August 22, 2025</p>
                            <h3 class="card-title">Tech Fest Announcement</h3>
                        </div>
                    </div>
                    <!-- Card 3 -->
                    <div class="news-card">
                        <img src="https://placehold.co/600x400/e2e8f0/4a5568?text=Event+Three" alt="News event image">
                        <div class="card-content">
                            <p class="card-date">July 15, 2025</p>
                            <h3 class="card-title">Workshop on AI/ML</h3>
                        </div>
                    </div>
                </div>
                <div class="view-all-container">
                    <a href="#" class="btn btn-primary news-events-btn">
                        View All Updates
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>`;
       
        setActiveLink(homeLink);    
    }
});    

newsEventsLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !== newsEventsLink) {
      mainContainer.innerHTML = ` <header class="page-header">
        <div class="container">
            <h1 class="page-title">News & Events</h1>
            <p class="page-subtitle">Stay up-to-date with the latest happenings, workshops, and achievements from the Department of Information Technology.</p>
        </div>
    </header>

    <!-- Main Content: Events -->
    <main class="events-section">
        <div class="container">
            <!-- Upcoming Events Section -->
            <section class="event-category">
                <h2 class="category-title">Upcoming Events</h2>
                <div class="events-grid">
                    <div class="event-card">
                        <img src="https://placehold.co/400x250/4f46e5/ffffff?text=Workshop" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">October 25, 2025</p>
                            <h3 class="event-title">AI & Machine Learning Workshop</h3>
                            <p class="event-description">A hands-on workshop covering the fundamentals of AI and ML with practical examples.</p>
                        </div>
                    </div>
                    <div class="event-card">
                        <img src="https://placehold.co/400x250/34d399/ffffff?text=Seminar" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">November 12, 2025</p>
                            <h3 class="event-title">Cybersecurity Seminar</h3>
                            <p class="event-description">Join industry experts to discuss the latest trends and threats in cybersecurity.</p>
                        </div>
                    </div>
                    <div class="event-card">
                        <img src="https://placehold.co/400x250/f59e0b/ffffff?text=Contest" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">December 5, 2025</p>
                            <h3 class="event-title">Annual Coding Contest</h3>
                            <p class="event-description">Showcase your programming skills and compete for exciting prizes in our annual contest.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Past Events Section -->
            <section class="event-category">
                <h2 class="category-title">Past Events</h2>
                <div class="events-grid">
                     <div class="event-card">
                        <img src="images/events/cprogramming-bootcamp.jpg" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">August 15, 2025</p>
                            <h3 class="event-title">Innovate & Create Hackathon</h3>
                            <p class="event-description">A 24-hour event where students collaborated to build innovative tech solutions.</p>
                        </div>
                    </div>
                    <div class="event-card">
                        <img src="images/events/asso-inauguration.jpg" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">July 22, 2025</p>
                            <h3 class="event-title">Guest Lecture on Cloud Computing</h3>
                            <p class="event-description">An insightful session on the future of cloud technologies by a guest from AWS.</p>
                        </div>
                    </div>
                     <div class="event-card">
                        <img src="images/events/farewell-2025.jpg" alt="Event Image" class="event-image">
                        <div class="event-content">
                            <p class="event-date">June 10, 2025</p>
                            <h3 class="event-title">Final Year Project Expo</h3>
                            <p class="event-description">Our final year students presented their capstone projects to faculty and industry experts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>`;
  
        setActiveLink(newsEventsLink);    
    }
});

careerLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !== aboutLink) {
        mainContainer.innerHTML = ` <!-- Page Header -->
    <header class="page-header">
        <div class="container">
            <h1 class="page-title">Career & Placements</h1>
            <p class="page-subtitle">Explore the diverse career paths and celebrate the success of our students in the professional world.</p>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <div class="container">
            <!-- Career Opportunities Section -->
            <section class="content-section">
                <h2 class="section-title">Career Opportunities</h2>
                <ul class="opportunities-list">
                    <li class="opportunity-item">
                        <h3>Software Developer</h3>
                        <p>Design, develop, and maintain software applications for various platforms.</p>
                    </li>
                    <li class="opportunity-item">
                        <h3>Data Scientist / Analyst</h3>
                        <p>Analyze complex data sets to help organizations make better decisions.</p>
                    </li>
                    <li class="opportunity-item">
                        <h3>Cybersecurity Specialist</h3>
                        <p>Protect computer systems and networks from security breaches and cyber threats.</p>
                    </li>
                     <li class="opportunity-item">
                        <h3>Cloud Engineer</h3>
                        <p>Manage and maintain cloud infrastructure for businesses on platforms like AWS, Azure, or GCP.</p>
                    </li>
                     <li class="opportunity-item">
                        <h3>AI/ML Engineer</h3>
                        <p>Develop intelligent systems and algorithms that can learn and make predictions.</p>
                    </li>
                     <li class="opportunity-item">
                        <h3>Network Administrator</h3>
                        <p>Ensure the reliability and performance of an organization's IT network infrastructure.</p>
                    </li>
                </ul>
            </section>

            <!-- Placement Details Section -->
            <section class="content-section">
                <h2 class="section-title">Placement Highlights</h2>
                <div class="placements-grid">
                    <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">John Doe</h3>
                        <p class="placement-company">at Google</p>
                        <span class="placement-salary">25 LPA</span>
                    </div>
                    <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">Jane Smith</h3>
                        <p class="placement-company">at Microsoft</p>
                         <span class="placement-salary">22 LPA</span>
                    </div>
                    <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">Peter Jones</h3>
                        <p class="placement-company">at Amazon</p>
                         <span class="placement-salary">20 LPA</span>
                    </div>
                     <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">Mary Williams</h3>
                        <p class="placement-company">at TCS</p>
                         <span class="placement-salary">10 LPA</span>
                    </div>
                     <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">David Brown</h3>
                        <p class="placement-company">at Infosys</p>
                         <span class="placement-salary">9 LPA</span>
                    </div>
                     <div class="student-card">
                        <img src="https://placehold.co/120x120/e0e0e0/cccccc?text=Student" alt="Student Photo" class="student-image">
                        <h3 class="student-name">Susan Davis</h3>
                        <p class="placement-company">at Wipro</p>
                         <span class="placement-salary">8.5 LPA</span>
                    </div>
                </div>
            </section>
        </div>
    </main>`;
       
        setActiveLink(careerLink);    
    }
});

aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !== aboutLink) {
            mainContainer.innerHTML = `  <!-- Page Header -->
        <header class="page-header">
            <div class="container">
                <h1 class="page-title">About Our Department</h1>
                <p class="page-subtitle">Learn more about our history, our goals, and the values that drive us forward.</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <!-- About Department Section -->
                <section class="content-section">
                    <div class="about-layout">
                        <div class="about-text">
                            <h2>Welcome to the Department of IT</h2>
                            <p>
                                Established in 2000, the Department of Information Technology at Government Engineering College, Idukki, is committed to excellence. Our highly qualified faculty are dedicated to nurturing students not just in academics but also in co-curricular and extra-curricular activities. We boast an advanced infrastructure with high-speed internet, modern classrooms, and state-of-the-art labs equipped with the latest software and development tools. We also conduct regular training programs to keep both students and staff updated with the latest technological trends.
                            </p>
                        </div>
                        <div class="about-image-container">
                            <img src="images/home-page-banner.png" alt="Department Building or Campus" class="about-image">
                        </div>
                    </div>
                </section>
            </div>

            <!-- Vision Section -->
            <section class="vision-section">
                <div class="container">
                    <div class="vision-content">
                        <h2 class="section-title">Our Vision</h2>
                        <p>
                            "To be a centre of excellence in the field of Information Technology which nurtures young minds through technological adaptation, research, innovation and entrepreneurial skills complying to the needs of society and industry."
                        </p>
                    </div>
                </div>
            </section>
            
            <div class="container">
                <!-- Mission Section -->
                <section class="content-section" style="margin-top: 4rem;">
                    <h2 class="section-title">Our Mission</h2>
                    <div class="mission-grid">
                        <div class="mission-card">
                            <div class="mission-number">01</div>
                            <p>Imparting career-oriented professional education to students through effective delivery of the curriculum.</p>
                        </div>
                        <div class="mission-card">
                            <div class="mission-number">02</div>
                            <p>Establishing effective adaptation of cutting-edge technologies through industry collaborations and mentoring.</p>
                        </div>
                        <div class="mission-card">
                            <div class="mission-number">03</div>
                            <p>Empowering individuals to be socially responsible by inculcating critical thinking, innovation and ethical values.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>`;
       
        setActiveLink(aboutLink);    
    }
});


aminitiesLink.addEventListener('click', function(event) {  
    event.preventDefault();
    if (currentPage !== aminitiesLink) {
        mainContainer.innerHTML = `<!-- Page Header -->
        <header class="page-header">
            <div class="container">
                <h1 class="page-title">Our Facilities</h1>
                <p class="page-subtitle">Explore the state-of-the-art infrastructure and resources available to our students and faculty.</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <!-- Seminar Hall Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Seminar Hall</h2>
                        <p>Our seminar hall is equipped with modern audio-visual technology to host workshops, guest lectures, and department events, providing an ideal environment for learning and collaboration.</p>
                        <ul class="amenity-features">
                            <li>High-Definition Projector & Screen</li>
                            <li>Advanced Sound System</li>
                            <li>Seating Capacity for 150+</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="https://placehold.co/600x400/4f46e5/ffffff?text=Seminar+Hall" alt="Seminar Hall" class="amenity-image">
                    </div>
                </section>

                <!-- Software Lab Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Software Lab</h2>
                        <p>The Software Lab is equipped with high-performance workstations running the latest software and development tools, enabling students to work on programming, database management, and software engineering projects.</p>
                        <ul class="amenity-features">
                            <li>Latest Generation Processors</li>
                            <li>Licensed Development Software</li>
                            <li>High-Speed Internet Access</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                          <img src="images/aminities/software lab.png" alt="Software Lab" class="amenity-image">
                    </div>
                </section>
                
                <!-- ML Lab Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Machine Learning Lab</h2>
                        <p>Our dedicated ML Lab provides access to powerful GPUs and specialized frameworks, allowing students and researchers to explore the frontiers of Artificial Intelligence, deep learning, and data science.</p>
                        <ul class="amenity-features">
                            <li>NVIDIA GPUs for Accelerated Computing</li>
                            <li>TensorFlow, PyTorch, and Scikit-learn</li>
                            <li>Access to Large Datasets</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="https://placehold.co/600x400/f59e0b/ffffff?text=ML+Lab" alt="Machine Learning Lab" class="amenity-image">
                    </div>
                </section>

                <!-- Hardware Lab Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Hardware Lab</h2>
                        <p>The Hardware Lab allows students to gain hands-on experience with digital logic design, microprocessors, and embedded systems. It is equipped with all necessary kits and components for practical experimentation.</p>
                        <ul class="amenity-features">
                            <li>Microprocessor & Microcontroller Kits</li>
                            <li>Digital Logic Design Trainers</li>
                            <li>Soldering Stations & Testing Equipment</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="https://placehold.co/600x400/ef4444/ffffff?text=Hardware+Lab" alt="Hardware Lab" class="amenity-image">
                    </div>
                </section>

                <!-- Project & Robotics Lab Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Project & Robotics Lab</h2>
                        <p>This lab is a hub for innovation, providing students with the tools and space to work on their final year projects, develop robotics applications, and experiment with IoT devices.</p>
                        <ul class="amenity-features">
                            <li>Robotics Kits and Components</li>
                            <li>3D Printers and Prototyping Tools</li>
                            <li>Dedicated Project Workstations</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="https://placehold.co/600x400/10b981/ffffff?text=Robotics+Lab" alt="Project & Robotics Lab" class="amenity-image">
                    </div>
                </section>

                <!-- Network Lab Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Network Lab</h2>
                        <p>The Network Lab is equipped with routers, switches, and other networking hardware to provide students with practical experience in network design, configuration, and security management.</p>
                        <ul class="amenity-features">
                            <li>Cisco Routers and Switches</li>
                            <li>Network Simulation Software</li>
                            <li>Secure Environment for Ethical Hacking</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="images/aminities/network-lab.png" alt="Network Lab" class="amenity-image">
                    </div>
                </section>
                
                <!-- Department Library Section -->
                <section class="amenity-section">
                    <div class="amenity-text">
                        <h2>Department Library</h2>
                        <p>Our department library offers a vast collection of textbooks, reference materials, research journals, and digital resources, providing a quiet and resourceful space for students to study and deepen their knowledge.</p>
                        <ul class="amenity-features">
                            <li>Extensive Collection of IT Books</li>
                            <li>Subscription to IEEE Journals</li>
                            <li>Quiet & Conducive Reading Area</li>
                        </ul>
                    </div>
                    <div class="amenity-image-container">
                        <img src="https://placehold.co/600x400/6b7280/ffffff?text=Dept.+Library" alt="Department Library" class="amenity-image">
                    </div>
                </section>

            </div>
        </main>`;
        setActiveLink(aminitiesLink);
    }
});

aboutLink.addEventListener('click', function(event) { 
    event.preventDefault();
    if (currentPage !== aboutLink) {
        mainContainer.innerHTML = ` <!-- Page Header -->
        <header class="page-header">
            <div class="container">
                <h1 class="page-title">About Our Department</h1>
                <p class="page-subtitle">Learn more about our history, our goals, and the values that drive us forward.</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <!-- About Department Section -->
                <section class="content-section">
                    <div class="about-layout">
                        <div class="about-text">
                            <h2>Welcome to the Department of IT</h2>
                            <p>
                                Established in 2000, the Department of Information Technology at Government Engineering College, Idukki, is committed to excellence. Our highly qualified faculty are dedicated to nurturing students not just in academics but also in co-curricular and extra-curricular activities. We boast an advanced infrastructure with high-speed internet, modern classrooms, and state-of-the-art labs equipped with the latest software and development tools. We also conduct regular training programs to keep both students and staff updated with the latest technological trends.
                            </p>
                        </div>
                        <div class="about-image-container">
                            <img src="images/home-page-banner.png" alt="Department Building or Campus" class="about-image">
                        </div>
                    </div>
                </section>
            </div>

            <!-- Vision Section -->
            <section class="vision-section">
                <div class="container">
                    <div class="vision-content">
                        <h2 class="section-title">Our Vision</h2>
                        <p>
                            "To be a centre of excellence in the field of Information Technology which nurtures young minds through technological adaptation, research, innovation and entrepreneurial skills complying to the needs of society and industry."
                        </p>
                    </div>
                </div>
            </section>
            
            <div class="container">
                <!-- Mission Section -->
                <section class="content-section" style="margin-top: 4rem;">
                    <h2 class="section-title">Our Mission</h2>
                    <div class="mission-grid">
                        <div class="mission-card">
                            <div class="mission-number">01</div>
                            <p>Imparting career-oriented professional education to students through effective delivery of the curriculum.</p>
                        </div>
                        <div class="mission-card">
                            <div class="mission-number">02</div>
                            <p>Establishing effective adaptation of cutting-edge technologies through industry collaborations and mentoring.</p>
                        </div>
                        <div class="mission-card">
                            <div class="mission-number">03</div>
                            <p>Empowering individuals to be socially responsible by inculcating critical thinking, innovation and ethical values.</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>`;
       
        setActiveLink(aboutLink);    
    }
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    if (currentPage !== contactLink) {
        mainContainer.innerHTML = ` <!-- Page Header -->
            <header class="page-header">
            <div class="container">
                <h1 class="page-title">Get in Touch</h1>
                <p class="page-subtitle">We'd love to hear from you. Whether you have a question about our programs or anything else, our team is ready to answer all your questions.</p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <div class="contact-layout">
                    <!-- Contact Information -->
                    <div class="contact-info-container">
                        <h2>Contact Information</h2>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div class="contact-item-text">
                                <h3>Email Us</h3>
                                <a href="mailto:info@itdepartment.com">info@gecidukki.ac.in</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div class="contact-item-text">
                                <h3>Call Us</h3>
                                <a href="tel:+1234567890">04862-233250</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="contact-item-text">
                                <h3>Our Location</h3>
                                <p>Govt Engineering College, Idukki, Kerala</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-instagram"></i>
                            <div class="contact-item-text">
                                <h3>Instagram</h3>
                                <a href="#" target="_blank">@infotechzgeci</a>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Form -->
                    <div class="contact-form-container">
                        <h2>Send us a Message</h2>
                        <form action="#" method="POST">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" id="name" name="name" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" id="email" name="email" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" id="subject" name="subject" class="form-input" required>
                            </div>
                            <div class="form-group">
                                <label for="message" class="form-label">Your Message</label>
                                <textarea id="message" name="message" class="form-textarea" required></textarea>
                            </div>
                            <button type="submit" class="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>`;

        setActiveLink(contactLink);    
    }
});