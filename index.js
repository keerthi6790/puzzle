$(document).ready(function () {
  const b = document.getElementsByClassName("numberBox");
  const color = ["red", "blue", "orange", "white"];
  const anotherColor = ["red", "blue", "orange"];
  
  const checkWhite = (j) => {
    const randomValue = Math.round(Math.random() * 15);
     console.log(b[randomValue].style.backgroundColor);  
    if (j != randomValue && b[randomValue].style.backgroundColor === "white") {
        console.log('hi')
        b[randomValue].style.backgroundColor =
        anotherColor[Math.round(Math.random() * 2)];
    }
    else{
      checkWhite(j)
    }
  };
  for (let i in b) {
    b[i].style.backgroundColor = color[Math.round(Math.random() * 3)];
    $(b[i]).click(function (i) {
      for (let j in b) {
        if (b[j].innerText === i.target.innerText) {
          b[j].style.backgroundColor = "white";
          checkWhite(j);
        }
      }
    });
  }
});
