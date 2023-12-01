const dropdownBtns = document.querySelectorAll(".menu-btn");
let lastOpened = null;

dropdownBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    const menuContent = this.nextElementSibling;
    const iconPlus = this.querySelector(".iconPlus");

    menuContent.classList.toggle("show");

    if (menuContent.classList.contains("show")) {
      this.style.fontWeight = "bold";
      this.style.color = "#1E1F36";

      // Change the image when opening the dropdown
      iconPlus.src = "./assets/images/icon-minus.svg";
    } else {
      iconPlus.src = "./assets/images/icon-plus.svg";
    }

    lastOpened = menuContent.classList.contains("show") ? menuContent : null;
  })
);
