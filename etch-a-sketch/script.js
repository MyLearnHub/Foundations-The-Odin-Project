const container = document.querySelector(".container");
const chooseBtn = document.querySelector(".choose");
const resetBtn = document.querySelector(".reset");

function createDivs(amount) {
  container.innerHTML = "";
  const containerWidth = container.clientWidth;
  const containerHeight = 680;
  const totalDivs = amount * amount;
  const childSize = Math.floor(
    Math.min(containerWidth / amount, containerHeight / amount)
  );

  for (let i = 0; i < amount; i++) {
    const innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    container.appendChild(innerDiv);
    for (let j = 0; j < amount; j++) {
      const childDiv = document.createElement("div");
      childDiv.className = "childDiv";
      childDiv.style.width = `${childSize}px`;
      childDiv.style.height = `${childSize}px`;
      innerDiv.appendChild(childDiv);
    }
  }
}

chooseBtn.addEventListener("click", () => {
  const unserInput = prompt(
    "Enter the number of rows and coloumns you want : "
  );
  if (unserInput > 100) {
    alert("You cant create rows and coloumns more than 100 !!");
  } else if (unserInput <= 0) {
    alert("Enter a valid number !!");
  } else {
    createDivs(unserInput);
    const childDivs = document.querySelectorAll(".childDiv");
    childDivs.forEach((divs) => {
      divs.addEventListener("mouseenter", (e) => {
        divs.style.backgroundColor = getRandomColor();
      });
    });
  }
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetAll() {
  const childDivs = document.querySelectorAll(".childDiv");
  childDivs.forEach((div) => {
    div.style.backgroundColor = "#ffffff";
  });
}
resetBtn.addEventListener("click", resetAll);
