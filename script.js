document.addEventListener('DOMContentLoaded', (event) => {

    var backgroundAudio = document.getElementById("backgroundAudio");

    if (localStorage.getItem('audioPlaying') !== 'true') {
        backgroundAudio.play();
        localStorage.setItem('audioPlaying', 'true');
    }
    
    var modal = document.getElementById("myModal");

   
    var btn = document.getElementById("openModal");

   
    var span = document.getElementsByClassName("close")[0];

   
    btn.onclick = function() {
        modal.style.display = "flex";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.getElementById('heartsContainer').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

function nextPage() {
    localStorage.setItem('audioPlaying', 'false');
    window.location.href = "yes.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - button.offsetWidth - 20);
    var y = Math.random() * (window.innerHeight - button.offsetHeight - 20);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.scrolling-image-container');
    const imageSrc = 'arthur.png'; 
    const numImages = 5; 

    for (let i = 0; i < numImages; i++) {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.className = 'scrolling-image';
        img.style.top = `${Math.random() * 100}%`; 
        img.style.left = `${Math.random() * 100}%`;
        container.appendChild(img);
    }

    // Modal functionality
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("openModal");
    const span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

