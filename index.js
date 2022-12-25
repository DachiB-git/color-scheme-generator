let colorsArray = []
let form = document.getElementById('color-scheme-form')
form.addEventListener('submit', (e)=>{
    const chosenColor = document.querySelector('.scheme-color').value.slice(1)
    const chosenMode = document.querySelector('.mode').value;
    console.log(typeof chosenColor)
    console.log(`https://www.thecolorapi.com/scheme?hex="${chosenColor}"&count=5`)
    e.preventDefault();
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}&count=5`)
.then( res => res.json())
.then( data => {
    colorsArray = data.colors;
    render();
})
})

const render = () => {
    let html = '';
    colorsArray.forEach(color => {
        html += `<div class="color-column" style="background:${color.hex.value}"></div>`
    })
    document.querySelector('.color-scheme-container').innerHTML = html
}



