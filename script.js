document.addEventListener("DOMContentLoaded", function () {
  const kablooieContainer = document.querySelector(".kablooie-container");
  const kablooieButton = document.querySelector(".kablooie-btn");
  const kablooieSound = new Audio("sound/kablooie.mp3");
  const colorPickerButtons = document.querySelectorAll(".color-picker button");
  const demomanImage = document.querySelector("img");

  colorPickerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("color-picker__btn-blu")) {
        demomanImage.src = "img/demoman_blu.webp";
      } else if (button.classList.contains("color-picker__btn-red")) {
        demomanImage.src = "img/demoman_red.webp";
      }
    });
  });

  kablooieButton.addEventListener("click", () => {
    kablooieContainer.style.animation = "shake 2s";
    kablooieSound.play();

    setTimeout(() => {
      kablooieContainer.style.animation = "";
    }, 2000);
  });
});
