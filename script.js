
function sketchSize() {
    
    let squares = Array.from(document.querySelectorAll(".sketch-pad > *"));
    squares.forEach(cell => sketch.removeChild(cell));
    
    let inputNumber = document.getElementById("padSize").value;
    
    sketch.style.grid = `repeat(${inputNumber}, 1fr) / repeat(${inputNumber}, 1fr)`;

    if (inputNumber < 16 || inputNumber > 64) {
        
        alert("Number must be between 16 - 64!");
        return false;
    } 
    else if (isNaN(inputNumber)) {
        
        alert("You need to place numbers!");
        return false;
        
    } else {
        
        for (let i = 0; i < inputNumber * inputNumber; i++) {
            let newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            sketch.appendChild(newPixel);
             
            let allPixels = document.querySelectorAll('.pixel');
            allPixels.forEach(pixel => {
                pixel.addEventListener('mouseover', function(event) {
                    event.target.style.background = "#000000";
                })
            })
        } 
    }
}

sketchSize(16);
