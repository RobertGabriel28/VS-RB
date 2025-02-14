const symbols = ['💗', '🌸', '💖', '🌺', '💝', '🎀', '💕', '🌷'];

function createFallingSymbol() {
    const symbol = document.createElement('div');
    symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.className = 'falling-symbol';

    symbol.style.left = Math.random() * 100 + 'vw';
    symbol.style.animationDuration = (Math.random() * 3 + 2) + 's';
    symbol.style.fontSize = (Math.random() * 20 + 15) + 'px';
    symbol.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 5000);
}

setInterval(createFallingSymbol, 100);

function showMore() {
    document.getElementById('special-message').classList.add('show');
}

function hideMessage() {
    document.getElementById('special-message').classList.remove('show');
}

function startMusic() {
    const audio = document.getElementById('bgMusic');
    audio.play();
}

// Configurare particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js',
        {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle"
                },
                "opacity": {
                    "value": 0.5,
                    "random": false
                },
                "size": {
                    "value": 5,
                    "random": true
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                }
            }
        }
    );
});