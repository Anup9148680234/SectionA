// Form Toggle
let form = document.getElementById('pForm');

function pricingForm(){
    window.scrollBy(0, -1000);
    form.style.display = "block";
    document.body.style.overflowY = "hidden";
}

function exitPricingForm() {
    form.style.display = "none";
    document.body.style.overflowY = "auto";
}

// Slider highlight
let slider = document.getElementById('userSlider');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');

slider.addEventListener('input', cardHighlight);

function cardHighlight() {
    if (slider.value >= 0 && slider.value < 10) {
    
      card1.classList.add("highlighted");
      card2.classList.remove("highlighted");
      card3.classList.remove("highlighted");
    } else if (slider.value >= 10 && slider.value < 20) {
    
      card1.classList.remove("highlighted");
      card2.classList.add("highlighted");
      card3.classList.remove("highlighted");
    } else if (slider.value >= 20) {
   
      card1.classList.remove("highlighted");
      card2.classList.remove("highlighted");
      card3.classList.add("highlighted");
    }
}
