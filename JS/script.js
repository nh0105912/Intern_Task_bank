    document.addEventListener("scroll", function () {
            const navbar = document.querySelector(".navbar");
            navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
        });


      document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modalImage = document.getElementById("modalImage");

  // Filter Functionality
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-category");

      galleryItems.forEach(item => {
        if (category === "all" || item.getAttribute("data-category").includes(category)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Modal Image View
  document.querySelectorAll(".gallery-image-wrapper").forEach(wrapper => {
    wrapper.addEventListener("click", function () {
      const imgSrc = this.getAttribute("data-img");
      modalImage.src = imgSrc;
    });
  });
});




