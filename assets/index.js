

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Job listings data
const jobs = [
    { title: 'Frontend Developer', category: 'development', description: 'We are looking for a skilled frontend developer to join our team.' },
    { title: 'UX Designer', category: 'design', description: 'Seeking a talented UX designer to create intuitive user experiences.' },
    { title: 'Content Writer', category: 'writing', description: 'We need a creative content writer to produce engaging articles.' },
    { title: 'Mobile App Developer', category: 'development', description: 'Experienced mobile app developer needed for iOS and Android projects.' },
    { title: 'Graphic Designer', category: 'design', description: 'Looking for a graphic designer to create stunning visual content.' },
    { title: 'Technical Writer', category: 'writing', description: 'Seeking a technical writer to produce clear an concise documentation.' }
];

// Render job listings
const jobList = document.querySelector('.job-list');

function renderJobs(filter = 'all') {
    jobList.innerHTML = '';
    jobs.forEach(job => {
        if (filter === 'all' || job.category === filter) {
            const jobItem = document.createElement('div');
            jobItem.classList.add('job-item');
            jobItem.innerHTML = `
                <h3 class="job-title">${job.title}</h3>
                <p class="job-category">${job.category}</p>
                <p class="job-description">${job.description}</p>
            `;
            jobList.appendChild(jobItem);
        }
    });
}

// Initial render
renderJobs();

// Filter jobs
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderJobs(button.getAttribute('data-filter'));
    });
});

// Category item click event
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.getAttribute('data-category');
        filterButtons.forEach(btn => {
            if (btn.getAttribute('data-filter') === category) {
                btn.click();
            }
        });
        window.scrollTo({
            top: document.querySelector('.job-listings').offsetTop,
            behavior: 'smooth'
        });
    });
});