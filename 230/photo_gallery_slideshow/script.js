document.addEventListener("DOMContentLoaded", () => {
  function switchCurrent(imgs, img) {
    [...imgs].forEach(img => img.classList.remove("current"));
    img.classList.add("current");
  }

  let imageList = document.querySelector("ul");

  imageList.addEventListener("click", event => {
    let clicked = event.target;
    let images;
    let featuredImage = document.querySelector("figure img");
    if (clicked.nodeName !== "IMG") return;

    images = document.querySelectorAll("li img");
    clicked.classList.add("current");
    switchCurrent(images, clicked);
    featuredImage.src = clicked.src;
  });
});
