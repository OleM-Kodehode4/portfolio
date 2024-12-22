document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Remove fragment identifier from URL
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  try {
    // Create HTML content dynamically
    const body = document.body;

    function createNav() {
      console.log("Creating navigation");
      const navElement = document.createElement("nav");
      navElement.setAttribute("role", "navigation");

      const logo = document.createElement("a");
      logo.href = "#";
      logo.className = "logo";
      logo.innerHTML = "<span>Portfolio</span>";
      logo.setAttribute("aria-label", "Homepage");
      navElement.appendChild(logo);

      const ul = document.createElement("ul");
      ul.className = "links";

      const links = ["Hjem", "Ferdigheter", "Prosjekter", "Om meg", "Kontakt"];
      const ids = ["home", "skill", "project", "about", "contact"];
      links.forEach((link, index) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${ids[index]}`;
        a.textContent = link;
        a.setAttribute("role", "menuitem");
        li.appendChild(a);
        ul.appendChild(li);
      });
      navElement.appendChild(ul);

      const menuIcon = document.createElement("i");
      menuIcon.className = "bx bx-menu-alt-right";
      menuIcon.id = "menu";
      menuIcon.setAttribute("aria-label", "Menu");
      navElement.appendChild(menuIcon);

      const contactBtn = document.createElement("a");
      contactBtn.href = "#contact";
      contactBtn.className = "btn";
      contactBtn.textContent = "Kontakt Meg";
      contactBtn.setAttribute("role", "button");
      navElement.appendChild(contactBtn);

      body.appendChild(navElement);

      // Add event listener for the menu after it has been created
      const menu = document.querySelector("#menu");
      const nav = document.querySelector(".links");

      menu.addEventListener("click", () => {
        try {
          menu.classList.toggle("bx-x");
          nav.classList.toggle("active");
        } catch (error) {
          console.error("Error toggling menu:", error);
        }
      });

      // Add scroll event listener for sticky header
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navElement.classList.add("scrolled");
        } else {
          navElement.classList.remove("scrolled");
        }
      });
    }

    function createSection(id, innerHTML) {
      console.log(`Creating section: ${id}`);
      const section = document.createElement("section");
      section.id = id;
      section.innerHTML = innerHTML;
      section.setAttribute("role", "region");
      section.setAttribute("aria-labelledby", `${id}-header`);
      body.appendChild(section);
    }

    createNav();

    createSection(
      "home",
      `
      <img src="./pics/pic-ole-1.jpg" alt="Ole Mathias" />
      <div class="info-box">
        <h1 id="home-header"><span>Eg er Ole Mathias</span></h1>
        <h3><span>Jr.Frontend</span></h3>
        <p>Lorem100</p>
      </div>
      <div class="btn-box">
        <div class="btn">Github</div>
        <div class="btn">Kontakt meg</div>
      </div>
    `
    );

    createSection(
      "skill",
      `
      <div class="skill-box">
        <div class="skill-info">
          <h1 id="skil-header"><span>(WIP)</span></h1>
          <p>Her kommer en quote API, når jeg finner en som fungerer og ikke slutter å fungere når brukeren reloader siden</p>
        </div>
        <h2><span>Skills</span></h2>
        <div class="skills">
          <ul>
            <li><span><i class='bx bxl-html5'></i> HTML</span></li>
            <li><span><i class='bx bxl-css3' ></i> CSS</span></li>
            <li><span><i class='bx bxl-javascript' ></i></i> JavaScript</span></li>
          </ul>
          <ul>
            <li><span><i class='bx bxl-react' ></i> React</span></li>
            <li><span><i class='bx bxl-git' ></i> Git</span></li>
            <li><span><i class='bx bxl-figma' ></i> Figma</span></li>
          </ul>
        </div>
      </div>
      <img src="./pics/pic-ole-2.jpg" alt="Ole Mathias" />
    `
    );

    createSection(
      "project",
      `
      <h1 id="project-header" class="header"><span>Prosjekter</span></h1>
      <div class="project-container">
        <div class="box">
          <h1><span>Prosjekt-1</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-design.jpg" alt="Prosjekt-1" />
        </div>
        <div class="box">
          <h1><span>Prosjekt-2</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-dev.jpg" alt="Prosjekt-2" />
        </div>
        <div class="box">
          <h1><span>Prosjekt-3</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-dev.jpg" alt="Prosjekt-3" />
        </div>
      </div>
    `
    );

    createSection(
      "about",
      `
      <h1 id="about-header" class="header"><span>Om meg</span></h1>
      <div class="about-container">
        <div class="box">
          <h1><span>Fakta</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
        </div>
        <div class="box">
          <h1><span>Erfaring og kompetanse</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
        </div>
        <a href="./resume.pdf" class="download-btn" download> <i class='bx bxs-download'></i> Download Resume</a>
      </div>
    `
    );

    createSection(
      "contact",
      `
      <h1 id="contact-header" class="header"><span>Kontakt Meg</span></h1>
      <div class="contact-info"> 
      <ul>
            <li><span><i class='bx bxl-github'></i> GitHub</span></li>
            <li><span><i class='bx bxl-linkedin'></i> Linkedin</span></li>
          </ul>
      </div>
      <div class="contact-box">
        <div class="contact-info">
          <ul>
            <li><span><i class="bx bx-map"></i> Norge</span></li>
            <li><span><i class="bx bx-phone"></i> +47 123 45 678</span></li>
            <li><span><i class="bx bx-envelope"></i> example@example.com</span></li>
          </ul>
        </div>
      </div>
    `
    );

    const footer = document.createElement("footer");
    footer.innerHTML = `
      <div class="col-left">
        <div class="col-box">
          <span><i class="bx bx-map"></i></span>
          <span>Oljegata 69, 6969, Volda</span>
        </div>
        <div class="col-box">
          <span><i class="bx bx-phone"></i></span>
          <span>+47 123 45 678</span>
        </div>
        <div class="col-box">
          <span><i class="bx bx-envelope"></i></span>
          <span>example@69mail.com</span>
        </div>
      </div>
      <div class="col-right">
        <span>Om min reise</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae.</p>
        <div class="social-icons">
          <span><i class='bx bxl-github'></i></span>
          <span><i class='bx bxl-twitter'></i></span>
          <span><i class='bx bxl-instagram'></i></span>
          <span><i class='bx bxl-linkedin'></i></span>
        </div>
      </div>
    `;
    body.appendChild(footer);
  } catch (error) {
    console.error("Error creating HTML content:", error);
  }
});
