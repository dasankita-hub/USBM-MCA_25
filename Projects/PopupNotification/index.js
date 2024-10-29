document.querySelector('.container button').addEventListener('click', function() {
    let popup = document.getElementById('popupMessage');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 5000); 
});
