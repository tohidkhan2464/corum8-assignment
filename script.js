const reviews = [
  {
    id: 1,
    name: "Harshita",
    job: "Software Engineer",
    image:
      "https://res.cloudinary.com/dnkp2gm1d/image/upload/v1738602393/447086722_478161787890113_1295078761828646621_n_1_ict6fz.jpg",
    text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
  },
  {
    id: 2,
    name: "Tohid",
    job: "Software Engineer",
    image:
      "https://res.cloudinary.com/dnkp2gm1d/image/upload/v1717937177/Campus-Connect/u6glkenwkyilwvgvkcrl.jpg",
    text: "Working with this team was a pleasure. Their technical expertise and ability to deliver quality solutions on time and within budget were impressive. I highly recommend them as a true partner and asset to any project.",
  },
  {
    id: 3,
    name: "Chirag",
    job: "Graphic Designer",
    image:
      "https://res.cloudinary.com/dnkp2gm1d/image/upload/v1717849537/Campus_Connect/n1aeswysyoxo2dmff8zi.jpg",
    text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
  },
  {
    id: 4,
    name: "Jinesh",
    job: "Marketing Manager",
    image:
      "https://res.cloudinary.com/dnkp2gm1d/image/upload/v1730535889/Campus%20Connect/ku4hyawswwfa5befda7f.jpg",
    text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
  },
  {
    id: 5,
    name: "Yatin",
    job: "Content Strategist",
    image:
      "https://res.cloudinary.com/dnkp2gm1d/image/upload/v1713604085/studyNotion/nnrxd2mwt9uopw9pnlnl.png",
    text: "I have worked with many content creators over the years, but none have impressed me as much as this team. They have a knack for crafting compelling and engaging content that resonates with our audience and drives real results. I highly recommend them!",
  },
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  const reviewTextElement = document.getElementById("review-text");
  const reviewNameElement = document.getElementById("review-name");
  const reviewJobElement = document.getElementById("review-job");
  const reviewImageElement = document.getElementById("review-image");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const signupModal = document.getElementById("signupModal");
  const signupBtn = document.getElementById("signupBtn");
  const closeBtn = document.getElementById("closeModal");

  function updateReview() {
    const review = reviews[currentIndex];
    if (reviewTextElement) reviewTextElement.textContent = review.text;
    if (reviewNameElement) reviewNameElement.textContent = review.name;
    if (reviewJobElement) reviewJobElement.textContent = review.job;
    if (reviewImageElement) reviewImageElement.src = review.image;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
  });

  // Initialize the first review
  updateReview();

  function openModal() {
    signupModal.style.display = "flex";
  }

  function closeModal() {
    signupModal.style.display = "none";
  }

  signupBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === signupModal) {
      signupModal.style.display = "none";
    }
  });
  /*===== MENU SHOW =====*/

  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
        nav.classList.toggle("nav__menu");
      });
    }
  };

  showMenu("nav-toggle", "nav-menu");

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }

  navLink.forEach((n) => n.addEventListener("click", linkAction));
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img, .features__subtitle, .features__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .features__img", {
  delay: 200,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(
  ".features__data, .review__container, .showcase__img, .contact__input",
  { interval: 200 }
);
