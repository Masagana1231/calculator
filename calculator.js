let calculation = JSON.parse(localStorage.getItem("calculation")) || 0;
renderElements();
function updateCalculation(value) {
  renderElements();
  if (value === "=") {
    console.log(eval(calculation));
    calculation = eval(calculation);
    localStorage.removeItem("calculation");
    return;
  } else {
    calculation += value;
  }

  localStorage.setItem("calculation", JSON.stringify(calculation));
  renderElements();
  return console.log(calculation);
}

function renderElements() {
  document.querySelector(".mathoutput").value = `${calculation}`;
}

const movingButton = document.querySelector(".equal-btn");

movingButton.addEventListener("mouseover", function () {
  let randomLeft = 0;

  if (Math.random() > 0.5) {
    randomLeft = Math.random() * 600;
    console.log("greater than 0.5");
  } else {
    randomLeft = Math.random() * -600;
    console.log("less than 0.5");
  }

  const randomTop = Math.random() * -350;

  this.style.left = randomLeft + "px";
  this.style.top = randomTop + "px";
});
