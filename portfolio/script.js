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

      const logo = document.createElement("a");
      logo.href = "#";
      logo.className = "logo";
      logo.innerHTML = "<span>Ole Mathias</span>";
      navElement.appendChild(logo);

      const ul = document.createElement("ul");
      ul.className = "links";

      const links = ["Hjem", "Om meg", "Prosjekter", "Kontakt meg"];
      const ids = ["home", "about", "project", "contact"];
      links.forEach((link, index) => {
        const a = document.createElement("a");
        a.href = `#${ids[index]}`;
        a.textContent = link;
        ul.appendChild(a);
      });
      navElement.appendChild(ul);

      const menuIcon = document.createElement("i");
      menuIcon.className = "bx bx-menu-alt-right";
      menuIcon.id = "menu";
      navElement.appendChild(menuIcon);

      const contactBtn = document.createElement("a");
      contactBtn.href = "#contact";
      contactBtn.className = "btn";
      contactBtn.textContent = "Kontakt Meg";
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
    }

    function createSection(id, innerHTML) {
      console.log(`Creating section: ${id}`);
      const section = document.createElement("section");
      section.id = id;
      section.innerHTML = innerHTML;
      body.appendChild(section);
    }

    createNav();

    createSection(
      "home",
      `
      <img src="./pics/image.jpg" alt="" />
      <div class="info-box">
        <h1><span>Hei, jeg er Ole Mathias</span></h1>
        <h3><span>Jr.Frontend Dev</span><i class='bx bx-map'></i>Norge</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, labore!</p>
      </div>
      <div class="btn-box">
        <div class="btn">Ansettelse?</div>
        <div class="btn">Kontakt meg</div>
      </div>
    `
    );

    createSection(
      "about",
      `
      <div class="about-box">
        <div class="about-info">
          <h1><span>Om meg</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus autem perferendis libero laboriosam consequatur voluptas repellat vel quidem doloribus.</p>
        </div>
        <h2><span>Skills</span></h2>
        <div class="skills">
          <ul>
            <li><span><i class="bx bx-chevron-right"></i> HTML</span></li>
            <li><span><i class="bx bx-chevron-right"></i> CSS</span></li>
            <li><span><i class="bx bx-chevron-right"></i> JavaScript</span></li>
          </ul>
          <ul>
            <li><span><i class="bx bx-chevron-right"></i> React</span></li>
            <li><span><i class="bx bx-chevron-right"></i> Node</span></li>
            <li><span><i class="bx bx-chevron-right"></i> Figma</span></li>
          </ul>
        </div>
      </div>
      <img src="./pics/image.jpg" alt="" />
    `
    );

    createSection(
      "project",
      `
      <h1 class="header"><span>Prosjekter</span></h1>
      <div class="project-container">
        <div class="box">
          <h1><span>Prosjekt-1</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-design.jpg" alt="" />
        </div>
        <div class="box">
          <h1><span>Prosjekt-2</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-dev.jpg" alt="" />
        </div>
        <div class="box">
          <h1><span>Prosjekt-3</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.</p>
          <img src="./pics/web-dev.jpg" alt="" />
        </div>
      </div>
    `
    );

    createSection(
      "contact",
      `
      <h1 class="header"><span>Kontakt Meg</span></h1>
      <div class="contact-box">
        <div class="contact-info">
          <h1><span>Kontakt Informasjon</span></h1>
          <ul>
            <li><span><i class="bx bx-map"></i> Volda, Norge</span></li>
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
        <span>Om min kunnskap</span>
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
