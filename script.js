const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
    console.log(link);
  }
});

const directorContainer = document.querySelectorAll(".director-row");
// const directorButton = directorContainer.querySelectorAll(".hover-button");

directorContainer.forEach((direct) => {
  direct.querySelectorAll(".hover-button").forEach((btn) => {
    btn.addEventListener("click", function () {
      let directorRow = this.closest(".director-box");
      let overlayContent = directorRow.querySelector(".overlay-content");
      overlayContent.classList.toggle("hidden");
    });
  });
});
