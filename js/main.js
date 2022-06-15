var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elText = document.querySelector(".js-text");


function juftsonlar(sonlar) {
  return ((sonlar / 2)**2 + sonlar / 2) ;
}

function toqSonga(yign) {
  return (((yign - 1) / 2)**2 + (yign -1) / 2) ;
}



elForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var elInputVal = +elInput.value;
  if (elInputVal % 2 == 0) {
    elText.textContent = `Siz kiritgan songacha bulgan juft sonlar yig'indisi shu chiqdi ${juftsonlar(elInputVal)}`
    return;
  }
  if ((elInputVal + 1) % 2 == 0) {
    elText.textContent = `Siz kiritgan songacha bulgan toq sonlar yig'indisi shu chiqdi ${toqSonga(elInputVal)}`
    return;
  }
  if (elInputVal < 0 || isNaN(elInputVal)) {
    elText.textContent = `Siz kiritgan son 0 dan kichik. Iltimos 0 dan katta son kiriting`
    id__input.classList.add("is-invalid");
    id__input.classList.remove("is-valid");
    return;
  }else {
    elText.textContent = "xatlog bor"
    id__input.classList.remove("is-invalid");
    id__input.classList.add("is-valid");
  }
})





















