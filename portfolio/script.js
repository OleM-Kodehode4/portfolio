document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("DOM fully loaded and parsed");

    // Remove fragment identifier from URL
    if (window.location.hash) {
      history.replaceState(null, null, " ");
    }

    try {
      // Create HTML content dynamically
      const body = document.body;

      function createNav() {
        try {
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

          const links = [
            "Hjem",
            "Ferdigheter",
            "Prosjekter",
            "Om meg",
            "Kontakt",
          ];
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
            try {
              if (window.scrollY > 50) {
                navElement.classList.add("scrolled");
              } else {
                navElement.classList.remove("scrolled");
              }
            } catch (error) {
              console.error("Error handling scroll event:", error);
            }
          });
        } catch (error) {
          console.error("Error creating navigation:", error);
        }
      }

      function createSection(id, content) {
        try {
          console.log("Creating section:", id);
          const section = document.createElement("section");
          section.id = id;
          section.setAttribute("role", "region");
          section.setAttribute("aria-labelledby", `${id}-header`);

          content.forEach((element) => {
            section.appendChild(element);
          });

          body.appendChild(section);
        } catch (error) {
          console.error("Error creating section", id, ":", error);
        }
      }

      createNav();

      createSection("home", [
        (() => {
          const img = document.createElement("img");
          img.src = "./pics/pic-ole-1.jpg";
          img.alt = "Ole Mathias";
          return img;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "info-box";
          const h1 = document.createElement("h1");
          h1.id = "home-header";
          h1.innerHTML = "<span>Ole Mathias Brænde</span>";
          const h3 = document.createElement("h3");
          h3.innerHTML = "<span>Jr.Frontend</span>";
          const p = document.createElement("p");
          p.textContent =
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, labore!";
          div.appendChild(h1);
          div.appendChild(h3);
          div.appendChild(p);
          return div;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "btn-box";
          const btn1 = document.createElement("div");
          btn1.className = "btn";
          btn1.textContent = "Github";
          const btn2 = document.createElement("div");
          btn2.className = "btn";
          btn2.textContent = "Kontakt meg";
          div.appendChild(btn1);
          div.appendChild(btn2);
          return div;
        })(),
      ]);

      createSection("skill", [
        (() => {
          const div = document.createElement("div");
          div.className = "skill-box";
          const skillInfo = document.createElement("div");
          skillInfo.className = "skill-info";
          const h1 = document.createElement("h1");
          h1.id = "skil-header";
          h1.innerHTML = "<span>(WIP)</span>";
          const p = document.createElement("p");
          p.textContent =
            "Her kommer en quote API, når jeg finner en som fungerer og ikke slutter å fungere når brukeren reloader siden";
          skillInfo.appendChild(h1);
          skillInfo.appendChild(p);
          const h2 = document.createElement("h2");
          h2.innerHTML = '<span><i class="bx bx-code-alt"></i>Skills</span>';
          const skillsDiv = document.createElement("div");
          skillsDiv.className = "skills";
          const ul1 = document.createElement("ul");
          ["HTML", "CSS", "JavaScript"].forEach((skill) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = `<i class="bx bxl-${skill.toLowerCase()}"></i> ${skill}`;
            li.appendChild(span);
            ul1.appendChild(li);
          });
          const ul2 = document.createElement("ul");
          ["React", "Git", "Figma"].forEach((skill) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = `<i class="bx bxl-${skill.toLowerCase()}"></i> ${skill}`;
            li.appendChild(span);
            ul2.appendChild(li);
          });
          skillsDiv.appendChild(ul1);
          skillsDiv.appendChild(ul2);
          div.appendChild(skillInfo);
          div.appendChild(h2);
          div.appendChild(skillsDiv);
          return div;
        })(),
        (() => {
          const img = document.createElement("img");
          img.src = "./pics/pic-ole-2.jpg";
          img.alt = "Ole Mathias";
          return img;
        })(),
      ]);

      createSection("project", [
        (() => {
          const h1 = document.createElement("h1");
          h1.id = "project-header";
          h1.className = "header";
          h1.innerHTML = "<span>Prosjekter</span>";
          return h1;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "project-container";
          const projects = [
            {
              title: "Prosjekt-1",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
              img: "./pics/web-design.jpg",
            },
            {
              title: "Prosjekt-2",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
              img: "./pics/web-dev.jpg",
            },
            {
              title: "Prosjekt-3",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
              img: "./pics/web-dev.jpg",
            },
          ];
          projects.forEach((project) => {
            const box = document.createElement("div");
            box.className = "box";
            const h1 = document.createElement("h1");
            h1.innerHTML = `<span>${project.title}</span>`;
            const p = document.createElement("p");
            p.textContent = project.desc;
            const img = document.createElement("img");
            img.src = project.img;
            img.alt = project.title;
            box.appendChild(h1);
            box.appendChild(p);
            box.appendChild(img);
            div.appendChild(box);
          });
          return div;
        })(),
      ]);

      createSection("about", [
        (() => {
          const h1 = document.createElement("h1");
          h1.id = "about-header";
          h1.className = "header";
          h1.innerHTML = "<span>Om meg</span>";
          return h1;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "about-container";
          const abouts = [
            {
              title: "Fakta",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            },
            {
              title: "Erfaring og kompetanse",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis at nulla voluptate nesciunt exercitationem pariatur sunt.",
            },
          ];
          abouts.forEach((about) => {
            const box = document.createElement("div");
            box.className = "box";
            const h1 = document.createElement("h1");
            h1.innerHTML = `<span>${about.title}</span>`;
            const p = document.createElement("p");
            p.textContent = about.desc;
            box.appendChild(h1);
            box.appendChild(p);
            div.appendChild(box);
          });
          return div;
        })(),
      ]);

      createSection("contact", [
        (() => {
          const h1 = document.createElement("h1");
          h1.id = "contact-header";
          h1.className = "header";
          h1.innerHTML = "<span>Kontakt Meg</span>";
          return h1;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "contact-info";
          const ul = document.createElement("ul");
          const contacts = [
            { icon: "github", text: "GitHub" },
            { icon: "linkedin", text: "Linkedin" },
          ];
          contacts.forEach((contact) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = `<i class='bx bxl-${contact.icon}'></i> ${contact.text}`;
            li.appendChild(span);
            ul.appendChild(li);
          });
          div.appendChild(ul);
          return div;
        })(),
        (() => {
          const div = document.createElement("div");
          div.className = "contact-box";
          const contactInfo = document.createElement("div");
          contactInfo.className = "contact-info";
          const ul = document.createElement("ul");
          const infos = [
            { icon: "map", text: "Norge" },
            { icon: "phone", text: "+47 123 45 678" },
            { icon: "envelope", text: "example@example.com" },
          ];
          infos.forEach((info) => {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.innerHTML = `<i class='bx bx-${info.icon}'></i> ${info.text}`;
            li.appendChild(span);
            ul.appendChild(li);
          });
          contactInfo.appendChild(ul);
          const downloadBtn = document.createElement("a");
          downloadBtn.href = "./resume.pdf";
          downloadBtn.className = "download-btn";
          downloadBtn.download = true;
          downloadBtn.innerHTML = "📄<span>Download Resume</span>";
          div.appendChild(contactInfo);
          div.appendChild(downloadBtn);
          return div;
        })(),
      ]);

      const footer = document.createElement("footer");
      footer.innerHTML = `
        <div class='col-left'>
          <div class='col-box'>
            <span><i class='bx bx-map'></i></span>
            <span>Oljegata 69, 6969, Volda</span>
          </div>
          <div class='col-box'>
            <span><i class='bx bx-phone'></i></span>
            <span>+47 123 45 678</span>
          </div>
          <div class='col-box'>
            <span><i class='bx bx-envelope'></i></span>
            <span>example@69mail.com</span>
          </div>
        </div>
        <div class='col-right'>
          <span>Om min reise</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae. Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem dolorum voluptates, doloremque quae.</p>
          <div class='social-icons'>
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
  } catch (error) {
    console.error("Error initializing DOMContentLoaded event:", error);
  }
});
