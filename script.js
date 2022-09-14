let offset = 0; // Смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 165;

  if (offset > 405) {
    offset = 0;
  }
  sliderLine.style.left = offset + "px";
});

document.querySelector(".slider-next-1").addEventListener("click", function () {
  offset = offset - 165;
  if (offset < -570) {
    offset = 0;
  }
  sliderLine.style.left = offset + "px";
});
