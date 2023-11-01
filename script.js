const randomHexValues = function(){
    const hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hexValues[Math.floor(Math.random() * 16)]
    }
    return color;
}
console.log(randomHexValues());

const changeBgColor = function(){
    document.body.style.backgroundColor = randomHexValues();
}

    document.querySelector('#btn').addEventListener('click', changeBgColor);