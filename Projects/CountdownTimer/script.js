let button = document.querySelector('button');
let timeInput = document.querySelector('.input'); 
let timer = document.querySelector('.Timer');
let clr;

button.addEventListener('click', () => {
    const sec = parseInt(timeInput.value); 
    if (sec <= 0 || isNaN(sec)) { 
        alert('Enter a valid number of seconds');
        return; 
    }

    clearInterval(clr);
    let timeLeft = sec; 
    
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(clr); 
            timer.textContent = "00:00"; 
            alert("Time's up!"); 
            timeInput.value=" ";   
        } else {
            timeLeft--; 
            let minutes = Math.floor(timeLeft / 60) ; 
            let seconds = timeLeft % 60 ; 
           timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; 
        }
    }, 1000);   
});