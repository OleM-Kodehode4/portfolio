document.addEventListener("DOMContentLoaded", () => {
  /*
    1) Slå av nettleserens "scrollRestoration",
       slik at vi ikke gjenoppretter scroll-posisjon ved reload.
  */
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  /*
    2) Fjern hash fra URL hvis siden lastes med "#..."
       (hindrer at nettleseren automatisk scroller dit).
  */
  if (window.location.hash) {
    history.replaceState(null, null, " ");
  }

  const body = document.body;

  /**
   * Hjelpefunksjon: Oppretter en <section> med gitt id og innhold.
   */
  function createSection(id, contentElements = []) {
    const section = document.createElement("section");
    section.id = id;
    section.setAttribute("role", "region");
    section.setAttribute("aria-labelledby", `${id}-header`);

    contentElements.forEach((element) => {
      section.appendChild(element);
    });

    body.appendChild(section);
  }

  /**
   * Hjelpefunksjon: Henter en vits fra JokeAPI og setter tekst i <p>.
   */
  function fetchJoke(paragraph) {
<<<<<<< Updated upstream
    fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit"
    )
=======
    fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit")
>>>>>>> Stashed changes
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "single") {
          paragraph.textContent = data.joke;
        } else {
          paragraph.textContent = `${data.setup} - ${data.delivery}`;
        }
      })
      .catch((error) => {
        paragraph.textContent = "Kunne ikke laste inn en vits.";
        console.error("Error fetching joke:", error);
      });
  }

  /**
   * Oppretter navigasjonen (header).
   */
  function createNav() {
    const navElement = document.createElement("nav");
    navElement.setAttribute("role", "navigation");

    // Logo
    const logo = document.createElement("a");
    logo.href = "#home";
    logo.className = "logo";
    logo.setAttribute("aria-label", "Homepage");
    const logoSpan = document.createElement("span");
    logoSpan.textContent = "Portfolio";
    logo.appendChild(logoSpan);

    // Lenker
    const ul = document.createElement("ul");
    ul.className = "links";

    const links = ["Hjem", "Ferdigheter", "Prosjekter", "Om meg"];
    const ids = ["home", "skill", "project", "about"];

    links.forEach((linkText, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${ids[index]}`;
      a.textContent = linkText;
      a.setAttribute("role", "menuitem");
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Meny-ikon (mobil)
    const menuIcon = document.createElement("i");
    menuIcon.className = "bx bx-menu-alt-right";
    menuIcon.id = "menu";
    menuIcon.setAttribute("aria-label", "Menu");

    // Kontakt-knapp
    const contactBtn = document.createElement("a");
    contactBtn.href = "#contact";
    contactBtn.className = "btn";
    contactBtn.setAttribute("role", "button");
    contactBtn.textContent = "Kontakt Meg";

    // Sett sammen i nav
    navElement.appendChild(logo);
    navElement.appendChild(ul);
    navElement.appendChild(menuIcon);
    navElement.appendChild(contactBtn);
    body.appendChild(navElement);

    // Toggle for mobilmeny
    const navLinks = document.querySelector(".links");
    menuIcon.addEventListener("click", () => {
      menuIcon.classList.toggle("bx-x");
      navLinks.classList.toggle("active");
    });

    // Endring av nav-stil ved scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navElement.classList.add("scrolled");
      } else {
        navElement.classList.remove("scrolled");
      }
    });
  }

  /**
   * Oppretter seksjonen #home.
   */
  function createHomeSection() {
    const img = document.createElement("img");
    img.src = "./pics/pic-ole-1.jpg";
    img.alt = "Ole Mathias";
    img.dataset.src = "./pics/pic-ole-1.jpg";
    img.classList.add("lazy");

    const infoBox = document.createElement("div");
    infoBox.className = "info-box";

    const h1 = document.createElement("h1");
    h1.id = "home-header";
    const h1Span = document.createElement("span");
<<<<<<< Updated upstream
    h1Span.textContent = "Ole Brænde";
=======
    h1Span.textContent = "Ole Mathias Brænde";
>>>>>>> Stashed changes
    h1.appendChild(h1Span);

    const h3 = document.createElement("h3");
    const h3Span = document.createElement("span");
    h3Span.textContent = "Jr. Frontend | IT-Dev";
    h3.appendChild(h3Span);

    const p = document.createElement("p");
    p.textContent = "Laster inn en vits...";
    fetchJoke(p);

    infoBox.appendChild(h1);
    infoBox.appendChild(h3);
    infoBox.appendChild(p);

    // Knapper
    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";

    const btnGithub = document.createElement("div");
    btnGithub.className = "btn";
    btnGithub.textContent = "Github";
    btnGithub.addEventListener("click", () => {
      window.open("https://github.com/OleM-Kodehode4", "_blank");
    });

    const btnContact = document.createElement("div");
    btnContact.className = "btn";
    btnContact.textContent = "Kontakt meg";
    btnContact.addEventListener("click", () => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    btnBox.appendChild(btnGithub);
    btnBox.appendChild(btnContact);

    createSection("home", [img, infoBox, btnBox]);
  }

  /**
   * Oppretter seksjonen #skill.
   */
  function createSkillSection() {
    const skillBox = document.createElement("div");
    skillBox.className = "skill-box";

    const h2 = document.createElement("h2");
    const h2Span = document.createElement("span");
    const h2Icon = document.createElement("i");
    h2Icon.className = "bx bx-code-alt";
    h2Icon.style.color = "var(--linear-gradient)";
    h2Span.appendChild(h2Icon);
    h2Span.appendChild(document.createTextNode("Ferdigheter"));
    h2.appendChild(h2Span);

    const skillsDiv = document.createElement("div");
    skillsDiv.className = "skills";

    const ul1 = document.createElement("ul");
    ["HTML", "CSS", "JavaScript"].forEach((skill) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const icon = document.createElement("i");

      if (skill.toLowerCase() === "html") {
        icon.className = "bx bxl-html5";
      } else if (skill.toLowerCase() === "css") {
        icon.className = "bx bxl-css3";
      } else {
        icon.className = `bx bxl-${skill.toLowerCase()}`;
      }

      span.appendChild(icon);
      span.appendChild(document.createTextNode(` ${skill}`));
      li.appendChild(span);
      ul1.appendChild(li);
    });

    const ul2 = document.createElement("ul");
    ["React", "Git", "Figma"].forEach((skill) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      const icon = document.createElement("i");
      icon.className = `bx bxl-${skill.toLowerCase()}`;

      span.appendChild(icon);
      span.appendChild(document.createTextNode(` ${skill}`));
      li.appendChild(span);
      ul2.appendChild(li);
    });

    skillsDiv.appendChild(ul1);
    skillsDiv.appendChild(ul2);

    skillBox.appendChild(h2);
    skillBox.appendChild(skillsDiv);

    const skillImg = document.createElement("img");
    skillImg.src = "./pics/pic-ole-2.jpg";
    skillImg.alt = "Ole Mathias";
    skillImg.dataset.src = "./pics/pic-ole-2.jpg";
    skillImg.classList.add("lazy");

    createSection("skill", [skillBox, skillImg]);
  }

  /**
   * Oppretter seksjonen #project.
   */
  function createProjectSection() {
    const header = document.createElement("h1");
    header.id = "project-header";
    header.className = "header";

    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Prosjekter";
    header.appendChild(headerSpan);

    const container = document.createElement("div");
    container.className = "project-container";

    const projects = [
      {
        title: "Prosjekt-1",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
          "Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati " +
          "asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis " +
          "at nulla voluptate nesciunt exercitationem pariatur sunt.",
        img: "./pics/web-design.jpg",
        link: "https://olem-kodehode4.github.io/React-menu-app/",
      },
      {
        title: "Prosjekt-2",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
          "Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati " +
          "asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis " +
          "at nulla voluptate nesciunt exercitationem pariatur sunt.",
        img: "./pics/web-dev.jpg",
        link: "https://olem-kodehode4.github.io/juleoppgave/",
      },
      {
        title: "Prosjekt-3",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
          "Esse cum fugiat quaerat. Aliquid accusamus, provident autem, aperiam magnam recusandae vero obcaecati " +
          "asperiores ratione veniam, placeat perferendis nemo! In asperiores laudantium unde perferendis, blanditiis " +
          "at nulla voluptate nesciunt exercitationem pariatur sunt.",
        img: "./pics/web-dev.jpg",
      },
    ];

    projects.forEach((project) => {
      const box = document.createElement("div");
      box.className = "box";

      const projectTitle = document.createElement("h1");
      const projectTitleSpan = document.createElement("span");
      projectTitleSpan.textContent = project.title;
      projectTitle.appendChild(projectTitleSpan);

      const desc = document.createElement("p");
      desc.textContent = project.desc;

      const img = document.createElement("img");
      img.src = project.img;
      img.alt = project.title;
      img.dataset.src = project.img;
      img.classList.add("lazy");

      const btn2 = document.createElement("button");
      btn2.className = "btn2";
      btn2.textContent = "Vis prosjekt";
      btn2.addEventListener("click", () => {
        const modal = document.getElementById("projectModal");
        const iframe = document.getElementById("projectFrame");
        iframe.src = project.link || "";
        modal.style.display = "block";
<<<<<<< Updated upstream

        modal.scrollIntoView({ behavior: "smooth" });
=======
>>>>>>> Stashed changes
      });

      box.appendChild(projectTitle);
      box.appendChild(desc);
      box.appendChild(img);
      box.appendChild(btn2);
      container.appendChild(box);
    });

    createSection("project", [header, container]);
  }

  /**
   * Oppretter seksjonen #about.
   */
  function createAboutSection() {
    const header = document.createElement("h1");
    header.id = "about-header";
    header.className = "header";

    const headerSpan = document.createElement("span");
    headerSpan.textContent = "Om meg";
    header.appendChild(headerSpan);

    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-container";

    const abouts = [
      {
        title: "",
        desc: [
          "Hei, jeg heter Ole Brænde, en engasjert og nysgjerrig utvikler som brenner for å skape løsninger som gir verdi. " +
            "Med interesse for hele spekteret av utvikling er jeg alltid motivert til å lære mer og ta i bruk nye verktøy og teknologier.",
          "Det som driver meg, er muligheten til å løse problemer gjennom effektiv kode og innovative løsninger. " +
            "Jeg er detaljorientert, samtidig som jeg har et sterkt fokus på brukervennlighet og ytelse. " +
            "Ved å holde meg oppdatert på moderne teknologi, sørger jeg for å levere løsninger som er både robuste og fremtidsrettede.",
          "Jeg trives i team der jeg kan samarbeide tett med andre utviklere, dele kunnskap og kontinuerlig forbedre både meg selv og prosjektene jeg jobber med. " +
            "Enten det handler om frontend, backend eller noe midt imellom, er jeg klar til å ta utfordringen og bidra.",
        ],
      },
    ];

    abouts.forEach((about) => {
      const box = document.createElement("div");
      box.className = "box";

      // Tittel
      const aboutTitle = document.createElement("h1");
      const aboutTitleSpan = document.createElement("span");
      aboutTitleSpan.textContent = about.title;
      aboutTitle.appendChild(aboutTitleSpan);
      box.appendChild(aboutTitle);

      // Avsnitt
      about.desc.forEach((paragraph) => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        box.appendChild(p);
      });

      aboutContainer.appendChild(box);
    });

    createSection("about", [header, aboutContainer]);
  }

  /**
   * Oppretter en "footer"-aktig seksjon med kontaktinfo.
   */
  function createFooter() {
    const footer = document.createElement("contact");
    footer.id = "contact";

    // Venstre kolonne
    const colLeft = document.createElement("div");
    colLeft.className = "col-left";

    const colBox1 = document.createElement("div");
    colBox1.className = "col-box";
    const mapIcon = document.createElement("i");
    mapIcon.className = "bx bx-map";
    const mapSpan = document.createElement("span");
    mapSpan.textContent = "Oljegata 69, 6969, Volda";
    colBox1.appendChild(mapIcon);
    colBox1.appendChild(mapSpan);

    const colBox2 = document.createElement("div");
    colBox2.className = "col-box";
    const phoneIcon = document.createElement("i");
    phoneIcon.className = "bx bx-phone";
    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = "+47 123 45 678";
    colBox2.appendChild(phoneIcon);
    colBox2.appendChild(phoneSpan);

    const colBox3 = document.createElement("div");
    colBox3.className = "col-box";
    const envelopeIcon = document.createElement("i");
    envelopeIcon.className = "bx bx-envelope";
    const envelopeSpan = document.createElement("span");
    envelopeSpan.textContent = "example@69mail.com";
    colBox3.appendChild(envelopeIcon);
    colBox3.appendChild(envelopeSpan);

    colLeft.appendChild(colBox1);
    colLeft.appendChild(colBox2);
    colLeft.appendChild(colBox3);

    // Høyre kolonne
    const colRight = document.createElement("div");
    colRight.className = "col-right";

    const colRightSpan = document.createElement("span");
    colRightSpan.textContent = "Om min reise";

    const colRightP = document.createElement("p");
    colRightP.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
      "Quisquam voluptatem, quod, quae, quos quas quia quibusdam quidem " +
      "dolorum voluptates, doloremque quae. Quisquam voluptatem, quod, hvilke, " +
      "quos quas quia quibusdam quidem dolorum voluptates, doloremque quae.";

    const socialIcons = document.createElement("div");
    socialIcons.className = "social-icons";

    const socialLinks = [
      { icon: "github", url: "https://github.com/OleM-Kodehode4" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/olebrande/" },
      { icon: "bx bx-envelope", url: "" },
    ];

    socialLinks.forEach((social) => {
      const iconSpan = document.createElement("span");
      const a = document.createElement("a");
      a.href = social.url;
      a.target = "click";

      // Github og LinkedIn bruker "bxl-" + navnet, mens "bx bx-envelope" er litt annerledes
      if (social.icon.includes(" ")) {
        // F.eks. "bx bx-envelope"
        a.innerHTML = `<i class="${social.icon}"></i>`;
      } else {
        // "github" eller "linkedin"
        a.innerHTML = `<i class="bx bxl-${social.icon}"></i>`;
      }

      iconSpan.appendChild(a);
      socialIcons.appendChild(iconSpan);
    });

    colRight.appendChild(colRightSpan);
    colRight.appendChild(colRightP);
    colRight.appendChild(socialIcons);

    footer.appendChild(colLeft);
    footer.appendChild(colRight);
    body.appendChild(footer);
  }

  // Kall funksjonene for å bygge hele siden
  createNav();
  createHomeSection();
  createSkillSection();
  createProjectSection();
  createAboutSection();
  createFooter();

  /**
   * Lazy-loading av bilder (IntersectionObserver).
   */
  const lazyImages = document.querySelectorAll("img.lazy");
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach((img) => {
    imageObserver.observe(img);
  });

  /**
   * Fokus-styling (WCAG).
   */
  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("focus", () => {
      element.style.outline = "2px solid var(--linear-gradient)";
      element.style.outlineOffset = "2px";
    });
    element.addEventListener("blur", () => {
      element.style.outline = "none";
      element.style.outlineOffset = "0";
    });
  });

  /**
   * Modal for prosjekter.
   */
  const modal = document.getElementById("projectModal");
  const closeModalBtn = document.getElementsByClassName("close")[0];

  closeModalBtn.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  /**
   * Tilbake til toppen-knapp.
   */
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  /**
   * Myk scrolling for interne lenker (#anker).
   */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSelector = this.getAttribute("href");
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /**
   * Enkel hover-effekt på .box-elementer.
   */
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.transform = "scale(1.05)";
    });
    box.addEventListener("mouseout", () => {
      box.style.transform = "scale(1)";
    });
  });
});
