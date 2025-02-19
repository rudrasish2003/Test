// NAVIGATION BAR //
// const menubar = document.querySelector('#menubar');
// const sidebar = document.querySelector('.sidebar');
// const closeIcon = sidebar.querySelector('#closeBtn');

// menubar.addEventListener('click', () => {
//     sidebar.style.display = 'flex';
// });

// closeIcon.addEventListener('click', () => {
//     sidebar.style.display = 'none';
// });

// const navLinks = document.querySelectorAll('nav li a');

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(nav => nav.classList.remove('active')); 
//         this.classList.add('active'); 
//     });
// });


// const menubar = document.querySelector("#menubar");
// const sidebar = document.querySelector(".sidebar");
// const closeIcon = sidebar.querySelector("#closeBtn");

// menubar.addEventListener("click", (event) => {
//   // sidebar.style.display = 'flex';
//   event.stopPropagation();
//   sidebar.classList.add("active");
// });

// closeIcon.addEventListener("click", (event) => {
//   // sidebar.style.display = 'none';
//   event.stopPropagation();
//   sidebar.classList.remove("active");
// });

// document.addEventListener("click", (event) => {
//   if (!sidebar.contains(event.target) && !menubar.contains(event.target)) {
//     sidebar.classList.remove("active");
//   }
// });

// const navLinks = document.querySelectorAll("nav li a");

// navLinks.forEach((link) => {
//   link.addEventListener("click", function () {
//     navLinks.forEach((nav) => nav.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

// SLIDER //
const sliders = document.querySelectorAll(".slider-container");

sliders.forEach((slider) => {
    const carousel = slider.querySelector(".cards-wrapper");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = slider.querySelectorAll(".arrow");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, startX, startScrollLeft;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
});
// ----------------------Toggle Button-----------------------
let lightMode = localStorage.getItem('lightMode');
const modeSwitch = document.querySelector('.mode-icon');

const enableLightmode = () => {
    document.body.classList.add('lightMode');
    localStorage.setItem('lightMode','active');
};

const disableLightmode = () => {
    document.body.classList.remove('lightMode');
    localStorage.removeItem('lightMode');
};

if(lightMode === "active") enableLightmode();

// modeSwitch.addEventListener("click", () => {
//     lightMode = localStorage.getItem('lightMode');
//     lightMode !== "active" ? enableLightmode() : disableLightmode();
// });
// const modeSwitch = document.querySelector('.mode-icon');
if (modeSwitch) {
    modeSwitch.addEventListener("click", () => {
        lightMode = localStorage.getItem('lightMode');
        lightMode !== "active" ? enableLightmode() : disableLightmode();
    });
}
console.log("Current Mode:", localStorage.getItem('lightMode'));


// ----------------------Toggle Button-----------------------

// let lightMode = localStorage.getItem('lightMode');
// const modeSwitch = document.querySelector('.mode-icon');

// const enableLightmode = () => {
//     document.body.classList.add('lightMode');
//     localStorage.setItem('lightMode', 'active');
//     console.log("Light mode enabled");  // Debugging log
// };

// const disableLightmode = () => {
//     document.body.classList.remove('lightMode');
//     localStorage.removeItem('lightMode');
//     console.log("Light mode disabled");  // Debugging log
// };

// // Ensure the correct mode is applied on page load
// if (lightMode === "active") {
//     enableLightmode();
// }

// // Check if mode switch exists before adding event listener
// if (modeSwitch) {
//     modeSwitch.addEventListener("click", () => {
//         lightMode = localStorage.getItem('lightMode');
//         lightMode !== "active" ? enableLightmode() : disableLightmode();
//     });
// } else {
//     console.log("Mode switch button not found!");
// }

