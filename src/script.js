const icons = document.querySelectorAll(".acc--icon");
const contents = document.querySelectorAll(".acc--content");

icons.forEach((icon) =>
  icon.addEventListener("click", function () {
    contents.forEach(function (content) {
      if (icon.dataset.icon === content.dataset.content) {
        content.classList.toggle("hidden");

        if (content.classList.contains("hidden")) {
          icon.src = `assets/images/icon-plus.svg`;
        } else {
          icon.src = `assets/images/icon-minus.svg`;
        }
      }
    });
  })
);
