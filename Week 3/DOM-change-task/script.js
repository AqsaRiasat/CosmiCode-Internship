// Select the elements
const box = document.getElementById("myBox");
const button = document.getElementById("changeBtn");

// Add event listener
button.addEventListener("click", function () {
  // Change the content
  box.innerText = "🎉 Hello Aqsa! You just updated this using JavaScript DOM manipulation.";

  // Change the style
  box.style.backgroundColor = "#d4f1f4";
  box.style.color = "#05445e";
  box.style.fontSize = "22px";
  box.style.fontWeight = "bold";
  box.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.15)";
});
