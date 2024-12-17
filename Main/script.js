document.addEventListener("DOMContentLoaded", function () {
  // Create header
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>My Portfolio</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><button id="toggle-dark-mode">Dark Mode</button></li>
      </ul>
    </nav>
  `;
  document.body.appendChild(header);

  // Create about section
  const aboutSection = document.createElement("section");
  aboutSection.id = "about";
  aboutSection.innerHTML = `
    <h2>About Me</h2>
    <p>Welcome to my portfolio. I am a web developer with a passion for creating beautiful and functional websites.</p>
  `;
  document.body.appendChild(aboutSection);

  // Create projects section
  const projectsSection = document.createElement("section");
  projectsSection.id = "projects";
  projectsSection.innerHTML = `<h2>Projects</h2><div id="projects-container"></div>`;
  document.body.appendChild(projectsSection);

  // Create testimonials section
  const testimonialsSection = document.createElement("section");
  testimonialsSection.id = "testimonials";
  testimonialsSection.innerHTML = `<h2>Testimonials</h2><div id="testimonials-container"></div>`;
  document.body.appendChild(testimonialsSection);

  // Create contact section
  const contactSection = document.createElement("section");
  contactSection.id = "contact";
  contactSection.innerHTML = `
    <h2>Contact</h2>
    <form id="contact-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div id="form-feedback"></div>
  `;
  document.body.appendChild(contactSection);

  // Create blog section
  const blogSection = document.createElement("section");
  blogSection.id = "blog";
  blogSection.innerHTML = `<h2>Blog</h2><div id="blog-container"></div>`;
  document.body.appendChild(blogSection);

  // Create footer
  const footer = document.createElement("footer");
  footer.innerHTML = `<p>&copy; 2023 My Portfolio. All rights reserved.</p><div class="social-media"></div>`;
  document.body.appendChild(footer);

  // Load project details dynamically
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1.",
      image: "path/to/image1.jpg",
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
      image: "path/to/image2.jpg",
    },
    {
      title: "Project 3",
      description: "Description of project 3.",
      image: "path/to/image3.jpg",
    },
    {
      title: "Project 4",
      description: "Description of project 4.",
      image: "path/to/image4.jpg",
    },
    // Add more projects as needed
  ];

  function loadProjects() {
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}" />
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectDiv.style.opacity = "0";
      projectDiv.style.transition = "opacity 0.5s ease-in-out";
      projectsContainer.appendChild(projectDiv);
      setTimeout(() => {
        projectDiv.style.opacity = "1";
      }, 100);
    });
  }

  loadProjects();

  // Form validation with feedback
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const feedback = document.getElementById("form-feedback");

      if (name && email && message) {
        feedback.textContent = "Message sent!";
        feedback.style.color = "green";
      } else {
        feedback.textContent = "Please fill in all fields.";
        feedback.style.color = "red";
      }
    });

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Load social media links
  const socialMediaLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yourprofile",
    },
    {
      platform: "GitHub",
      url: "https://github.com/yourprofile",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
    },
  ];

  function loadSocialMediaLinks() {
    const socialMediaDiv = document.querySelector(".social-media");
    socialMediaLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.textContent = link.platform;
      anchor.target = "_blank";
      socialMediaDiv.appendChild(anchor);
    });
  }

  loadSocialMediaLinks();

  // Load testimonials
  const testimonials = [
    {
      name: "Client 1",
      feedback: "Great work! Highly recommended.",
    },
    {
      name: "Client 2",
      feedback: "Very professional and delivered on time.",
    },
    // Add more testimonials as needed
  ];

  function loadTestimonials() {
    const testimonialsContainer = document.getElementById(
      "testimonials-container"
    );
    testimonials.forEach((testimonial) => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.className = "testimonial";
      testimonialDiv.innerHTML = `<p>"${testimonial.feedback}"</p><p>- ${testimonial.name}</p>`;
      testimonialDiv.style.opacity = "0";
      testimonialDiv.style.transition = "opacity 0.5s ease-in-out";
      testimonialsContainer.appendChild(testimonialDiv);
      setTimeout(() => {
        testimonialDiv.style.opacity = "1";
      }, 100);
    });
  }

  loadTestimonials();

  // Load blog posts
  const blogPosts = [
    {
      title: "Blog Post 1",
      content: "Content of blog post 1.",
    },
    {
      title: "Blog Post 2",
      content: "Content of blog post 2.",
    },
    // Add more blog posts as needed
  ];

  function loadBlogPosts() {
    const blogContainer = document.getElementById("blog-container");
    blogPosts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "blog-post";
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      blogContainer.appendChild(postDiv);
    });
  }

  loadBlogPosts();

  // Toggle dark mode
  const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
  toggleDarkModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Add loading spinner
  const spinner = document.createElement("div");
  spinner.id = "loading-spinner";
  spinner.innerHTML = `<div class="spinner"></div>`;
  document.body.appendChild(spinner);

  function showSpinner() {
    spinner.style.display = "block";
  }

  function hideSpinner() {
    spinner.style.display = "none";
  }

  showSpinner();
  setTimeout(hideSpinner, 1000); // Simulate loading time

  // Testimonials carousel
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    const testimonials = document.querySelectorAll(".testimonial");
    testimonials.forEach((testimonial, i) => {
      testimonial.style.display = i === index ? "block" : "none";
      testimonial.style.opacity = i === index ? "1" : "0";
      testimonial.style.transition = "opacity 0.5s ease-in-out";
    });
  }

  function nextTestimonial() {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  }

  setInterval(nextTestimonial, 3000); // Change testimonial every 3 seconds

  showTestimonial(currentTestimonialIndex);
});
