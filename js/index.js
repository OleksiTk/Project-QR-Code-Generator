let inputText = document.querySelector(".qr--input");
let qrImg = document.querySelector(".qr__img");
let buttonCreatQR = document.querySelector(".qr--creatbutton");

buttonCreatQR.addEventListener("click", creatQR);

function creatQR() {
  let text = inputText.value;
  if (!(text == "")) {
    let img = document.querySelector(".qr--img--code");

    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + text;
  } else {
    inputText.classList.add("qr__keyframe");
    setTimeout(() => {
      inputText.classList.remove("qr__keyframe");
    }, 1000);
  }
}
