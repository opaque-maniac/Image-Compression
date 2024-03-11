/**
 * This is a file to do a bit of dynamic styling
 * Listening to the input event and toggling the style of image preview
 * By -> Opaque Maniac
 */

const imageHolder = document.querySelector(".imageholder");
const inputField = document.querySelector("#imgId");

// Did not use toggle incase the event is fired twice in a row
function showImg() {
  imageHolder.classList.remove("hide");
  imageHolder.classList.add("show");
}

function hideImg() {
  imageHolder.classList.remove("show");
  imageHolder.classList.add("hide");
}

inputField.addEventListener("input", () => {
  if (inputField.value) {
    showImg();
  } else {
    hideImg();
  }
});
