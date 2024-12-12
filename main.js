let interval = 2500;
let valueDisplays = document.querySelectorAll(".num");

function onScrollEvent(){
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(() => {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration);
    window.removeEventListener('scroll', onScrollEvent);
});
}

window.addEventListener('scroll', onScrollEvent);