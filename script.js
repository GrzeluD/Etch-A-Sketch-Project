
function sketchSize() {
    
    clearPad();
    
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
            draw();
        }
    }
}

function clearPad() {
    let squares = Array.from(document.querySelectorAll(".sketch-pad > *"));
    squares.forEach(square => sketch.removeChild(square));
}

function draw(){
    let allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function(event) {
        let color = document.getElementById('color').value;
        event.target.style.background = color;
        });
    });
} 
sketchSize(16);
