let celsius = document.getElementById('celsius');
let ferenheit = document.getElementById('ferenheit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9)/5 +32;
    ferenheit.value =parseFloat(output.toFixed(2));
    
};

ferenheit.oninput = () => {
    let output = (parseFloat(ferenheit.value) - 32)*5 /9;
    celsius.value =parseFloat(output.toFixed(2));
};