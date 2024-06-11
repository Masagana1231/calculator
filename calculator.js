let calculation = JSON.parse(localStorage.getItem("calculation")) || 0;
renderElements();
function updateCalculation(value) {
  if (value === "=") {
    console.log(eval(calculation));
    calculation = eval(calculation);
    localStorage.removeItem("calculation");
    return;
  } else {
    calculation += value;
  }
  //localStorage.setItem("calculation", JSON.stringify(calculation));
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
  } else {
    randomLeft = Math.random() * -600;
  }

  const randomTop = Math.random() * -350;

  this.style.left = randomLeft + "px";
  this.style.top = randomTop + "px";
});

const clearButton = document
  .querySelector(".clear")
  .addEventListener("click", () => {
    const movingButton = document.querySelector(".equal-btn");
    let randomLeft = 0;
    const randomTop = 0;

    movingButton.style.left = randomLeft + "px";
    movingButton.style.top = randomTop + "px";
  });
