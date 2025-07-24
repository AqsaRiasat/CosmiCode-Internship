const modal = document.getElementById("funModal");
const btn = document.getElementById("openFunModal");
const closeBtn = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
