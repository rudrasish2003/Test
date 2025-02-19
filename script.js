// NAVIGATION BAR //
const menubar = document.querySelector("#menubar");
const sidebar = document.querySelector(".sidebar");
const closeIcon = sidebar.querySelector("#closeBtn");

menubar.addEventListener("click", (event) => {
  // sidebar.style.display = 'flex';
  event.preventDefault();
  event.stopPropagation();
  sidebar.classList.add("active");
});

closeIcon.addEventListener("click", (event) => {
  // sidebar.style.display = 'none';
  event.preventDefault();
  event.stopPropagation();
  sidebar.classList.remove("active");
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menubar.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

const navLinks = document.querySelectorAll("nav li a");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// ----------------Blogs Section----------------
const swiper = document.querySelector(".swiper");
const swipes = document.querySelectorAll(".swipe");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const eachFaqs = document.querySelectorAll(".each-faq");

let currentswipe = 0;

function updateswiper() {
  swiper.style.transform = `translateX(-${currentswipe * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentswipe = (currentswipe + 1) % swipes.length;
  updateswiper();
});

prevBtn.addEventListener("click", () => {
  currentswipe = (currentswipe - 1 + swipes.length) % swipes.length;
  updateswiper();
});
// ----------------Blogs Section----------------

// ----------------------Toggle Button (Original)-----------------------


let lightMode = localStorage.getItem("lightMode");
const modeSwitch = document.querySelector(".mode-icon");

const enableLightmode = () => {
  document.body.classList.add("lightMode");
  localStorage.setItem("lightMode", "active");
  changeImg();
};

const disableLightmode = () => {
  document.body.classList.remove("lightMode");
  localStorage.setItem("lightMode", "inactive");
  changeImg();
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("lightMode") === "active") {
    enableLightmode();
  } else {
    disableLightmode();
  }
});

modeSwitch.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");
  lightMode !== "active" ? enableLightmode() : disableLightmode();
});

function changeImg() {
  const img1 = document.getElementById("logo1");
  const img2 = document.getElementById("logo2");
  const img3 = document.getElementById("logo3");
  const img4 = document.getElementById("logo4");
  const nav = document.getElementById("nav-Img");
  const foot = document.getElementById("foot");

  if (localStorage.getItem("lightMode") === "active") {
    if (img1) img1.src = "/image/Group 8.0.png";
    if (img2) img2.src = "/image/Group 12.0.png";
    if (img3) img3.src = "/image/Frame 88.0.png";
    if (img4) img4.src = "/image/Group 11.0.png";
    if (nav) nav.src = "images\nav-photo.png";
    if (foot) foot.src = "/image/footer.png";
  } else {
    if (img1) img1.src = "/image/Group 8.png";
    if (img2) img2.src = "/image/Group 12.png";
    if (img3) img3.src = "/image/Frame 88.png";
    if (img4) img4.src = "/image/Group 11.png";
    if (nav) nav.src = "/image/Group 3.png";
    if (foot) foot.src = "/image/footer.0.png";
  }
}
// -------------------------------------------------------------------------------

// function changeImg() {
//   var img = document.getElementById('nav-img').src;
//   if (img.indexOf('/images/Group 3.0.png')!=-1) {
//      document.getElementById('nav-img').src = '/image/Group 3.png';
//   } else {
//      document.getElementById('nav-img').src = '/images/Group 3.0.png';
//   }
// }
// ----------------------Toggle Button (Original)-----------------------
// ----------------------Toggle Button (Still under Consideration)-----------------------

// let lightMode = localStorage.getItem('lightMode');
// const modeSwitch = document.querySelector('.mode-icon');

// const enableLightmode = () => {
//     document.body.classList.add('lightMode');
//     localStorage.setItem('lightMode', 'active');
//     changeImg();
// };

// const disableLightmode = () => {
//     document.body.classList.remove('lightMode');
//     localStorage.removeItem('lightMode');
//     changeImg();
// };

// // if (lightMode === "active") enableLightmode();

// modeSwitch.addEventListener('click', () => {
//   console.log("Mode switch clicked");
//     lightMode = localStorage.getItem('lightMode');
//     lightMode !== "active" ? enableLightmode() : disableLightmode();
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const lightMode = localStorage.getItem('lightMode');
//   if (lightMode === 'active') {
//     enableLightmode();
//   }
// })

// var x = 0;
// var img1 = document.getElementById('logo1');
// var img2 = document.getElementById('logo2');
// var img3 = document.getElementById('logo3');
// var img4 = document.getElementById('logo4');
// var nav = document.getElementById('nav-Img');
// var foot = document.getElementById('foot');

// const images = {
//   logo0: {light: '/images/Group 3.0.png', dark: '/images/nav-photo.png'},
//   logo1: {light: './image/Group 8.0.png', dark: './image/Group 8.png' },
//   logo2: {light: './image/Group 12.0.png', dark: './image/Group 12.png' },
//   logo3: {light:'./image/Frame 88.0.png' , dark:'./image/Frame 88.png'},
//   logo4: {light:'./image/Group 11.0.png' , dark:'./image/Group 11.png'},
//   logo5: {light:'/image/Group 3.0.png' , dark:'/image/Group 3.png'},
//   logo6:{light:'./image/footer.png' ,   dark:'./image/footer.0.png'}
// };

// function changeImg() {
//   const isLightMode = localStorage.getItem('lightMode') === 'active';
//   Object.keys(images).forEach((id) => {
//     const img = document.getElementById(id);
//     img.src = images[id][isLightMode ? 'light' : 'dark'];
//   });
// }
// ----------------------Toggle Button (Still under Consideration)-----------------------
// ----------------Past Events Section----------------

const events = [
  {
    date: "Nov 12, 2024",
    title: "Workshop Cloud ft. Web",
    image: "image/events/cloudFtWeb.jpeg",
  },
  {
    date: "Sep 23, 2024",
    title: "Gen AI Study Jam",
    image: "image/events/genAiStudy.jpeg",
  },
  {
    date: "Dec 1, 2024",
    title: "Tech Winter Break",
    image: "image/events/techWinterBreak.jpeg",
  },
  {
    date: "Oct 04, 2024",
    title: "Guides To Hacktoberfest",
    image: "image/events/guidesToHacktoberfest.jpeg",
  },
  {
    date: "Nov 15, 2024",
    title: "Workshop Intro to Figma",
    image: "image/events/introToFigma.jpeg",
  },
];

const carouselInner = document.querySelector(".carousel-inner");
const pastEventsPrevBtn = document.querySelector(".past-events-prev-btn");
const pastEventsNextBtn = document.querySelector(".past-events-next-btn");

let offset = 0;

function getVisibleSlides() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 450) return 1;
  if (screenWidth <= 780) return 2;
  return 4;
}

function renderEvents() {
  carouselInner.innerHTML = "";
  events.forEach((event) => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `
      <img src="${event.image}" alt="${event.title}">
      <p>${event.date}</p>
      <h3>${event.title}</h3>
    `;
    eventDiv.addEventListener("click", () => {
      window.open(
        "https://gdg.community.dev/gdg-on-campus-meghnad-saha-institute-of-technology-kolkata-india/",
        "_blank"
      );
    });
    carouselInner.appendChild(eventDiv);
  });
}

function updateCarousel() {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;

  carouselInner.style.transform = `translateX(${offset}%)`;

  const allEvents = document.querySelectorAll(".event");
  allEvents.forEach((event) => {
    event.style.minWidth = `${slideWidth}%`;
  });
}

pastEventsPrevBtn.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;
  offset += slideWidth;
  if (offset > 0) {
    offset = -(events.length - visibleSlides) * slideWidth;
  }
  updateCarousel();
});

pastEventsNextBtn.addEventListener("click", () => {
  const visibleSlides = getVisibleSlides();
  const slideWidth = 100 / visibleSlides;
  offset -= slideWidth;
  if (offset < -(events.length - visibleSlides) * slideWidth) {
    offset = 0;
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  offset = 0;
  updateCarousel();
});

renderEvents();
updateCarousel();

// ----------------Past Events Section----------------

// ------------------------------FAQ Section---------------------
eachFaqs.forEach((eachFaq) => {
  eachFaq.addEventListener("click", () => {
    const answer = eachFaq.querySelector(".answer");
    const icon = eachFaq.querySelector(".question img");
    answer.classList.toggle("active");
    icon.src = answer.classList.contains("active")
      ? "https://img.icons8.com/android/24/228BE6/minus.png"
      : "https://img.icons8.com/fluency-systems-filled/50/228BE6/plus-math.png";
  });
});

// function loadLoadingScreen() {
//   fetch("loading.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("loading-placeholder").innerHTML = data;
//       // Add the loading screen styles
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "loading.css";
//       document.head.appendChild(link);
//     })
//     .catch((error) => console.error("Error loading loading screen:", error));
// }

// Show main content and hide the loading screen after loading
// window.onload = function () {
//   // Load the loading screen
//   loadLoadingScreen();

//   // Simulate loading delay (optional)
//   setTimeout(() => {
//     // Hide the loading screen
//     document.getElementById("loading-placeholder").style.display = "none";

//     // Show the main content
//     document.getElementById("main-content").style.display = "block";
//   }, 2000); // Adjust the delay as needed
// };


// ---------------------------------------scroll animation---------------------------------------------

function revealOnScroll() {
  let upImages = document.querySelectorAll('.Up-img img');
  let downImages = document.querySelectorAll('.Down img');

  upImages.forEach((img, index) => {
    let imgPosition = img.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (imgPosition < windowHeight - 100) {
      setTimeout(() => {
        img.classList.add("show");
        img.classList.remove("hide");
      }, index * 300); // Up images appear slower (300ms delay)
    } else if (imgPosition > windowHeight) {
      img.classList.remove("show");
      img.classList.add("hide");
    }
  });

  downImages.forEach((img, index) => {
    let imgPosition = img.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (imgPosition < windowHeight - 100) {
      setTimeout(() => {
        img.classList.add("show");
        img.classList.remove("hide");
      }, index * 150); // Down images appear faster (150ms delay)
    } else if (imgPosition > windowHeight) {
      img.classList.remove("show");
      img.classList.add("hide");
    }
  });
}

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on load in case images are already in view
document.addEventListener("DOMContentLoaded", revealOnScroll);



