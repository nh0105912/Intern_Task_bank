 // Enable submenu toggle on mobile
    document.querySelectorAll('.dropdown-submenu > a').forEach(function (element) {
      element.addEventListener('click', function (e) {
        if (window.innerWidth < 992) {
          e.preventDefault();
          let submenu = this.nextElementSibling;
          if (submenu) submenu.classList.toggle('show');
        }
      });
    });

    // Auto close navbar on link click (mobile)
    document.querySelectorAll('.navbar-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        let navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
          new bootstrap.Collapse(navbar).toggle();
        }
      });
    });
document.querySelectorAll(".dropdown-submenu > a").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); 
    let parent = this.parentElement;
    parent.classList.toggle("show");
  });
});

// Optional: close submenu when clicking outside
document.addEventListener("click", function () {
  document.querySelectorAll(".dropdown-submenu").forEach(function (submenu) {
    submenu.classList.remove("show");
  });
});

function goHome() {
  window.location.href = "index.html";
}

const imageWrappers = document.querySelectorAll(".image-wrapper");
const modalImage = document.getElementById("modalImage");

imageWrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-img");
    modalImage.src = imgSrc;
  });
});

// Filter logic
const buttons = document.querySelectorAll("#filterButtons .btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("btn-active"));
    btn.classList.add("btn-active");
    const category = btn.getAttribute("data-category");

    items.forEach((item) => {
      const itemCategories = item.getAttribute("data-category");
      item.style.display =
        category === "all" || itemCategories.includes(category)
          ? "block"
          : "none";
    });
  });
});

const slides = [
  {
    img: "./images/slide_1.jpg",
    heading: "  01. Online  Applications",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    img: "./images/slide_2.jpg",
    heading: "02. Get an approval",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
  {
    img: "./images/slide_3.jpg",
    heading: "03. Card Delivery",
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
  },
];

let currentSlide = 0;

const image = document.getElementById("sectionImage");
const heading = document.getElementById("sectionHeading");
const text = document.getElementById("sectionText");
const button = document.getElementById("arrowButton");

button.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Rotate 0 → 1 → 2 → 0
  image.src = slides[currentSlide].img;
  heading.textContent = slides[currentSlide].heading;
  text.textContent = slides[currentSlide].text;
});
