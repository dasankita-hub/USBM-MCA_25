let text = document.querySelector("#text");

function toggle() {
    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
}

setInterval(toggle, 1000);  
