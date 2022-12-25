let colorsArray = [];
let form = document.getElementById("color-scheme-form");
form.addEventListener("submit", (e) => {
  const chosenColor = document.querySelector(".scheme-color").value.slice(1);
  const chosenMode = document.querySelector(".mode").value;
  e.preventDefault();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      console.log(colorsArray);
      render();
    });
});

const render = () => {
  let html = "";
  colorsArray.forEach((color) => {
    html += `<div>
              <div class="color-column" style="background:${color.hex.value}"></div>
              <div class="hex-value">
              <p>${color.hex.value}</p>
              </div>
            </div>`;
  });
  document.querySelector(".color-scheme-container").innerHTML = html;
};
