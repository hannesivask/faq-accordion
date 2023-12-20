const contents = document.querySelectorAll(".acc--content");

contents.forEach(function (content) {
  const title = content.parentElement.children[0];
  title.addEventListener("click", function () {
    this.focus;
    content.classList.toggle("hidden");
    content.classList.contains("hidden")
      ? (this.children[1].src = `assets/images/icon-plus.svg`)
      : (this.children[1].src = `assets/images/icon-minus.svg`);
  });
});
