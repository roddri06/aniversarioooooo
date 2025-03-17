// Fecha del primer aniversario
const anniversaryDate = new Date("March 20, 2025 00:00:00").getTime();

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    // Si llega a cero, mostrar mensaje especial
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "¡Feliz primer aniversario, Sergio y María!";
        document.getElementById("message-text").innerHTML = "¡Que este sea solo el primero de muchos años más llenos de amor!";
        document.body.style.background = "#ffe6f1"; // Cambiar fondo para celebrar
        explodeHearts();
    }
}

// Función para mostrar corazones al llegar la fecha
function explodeHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.animation = 'explode 2s ease-out forwards';
    }, 100);
}

// Ejecutar el contador cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);


const audio = document.getElementById("background-music");
const record = document.getElementById("record");

// Detecta si la música se está reproduciendo o pausando
audio.addEventListener("play", () => {
    record.style.animationPlayState = "running";
});

audio.addEventListener("pause", () => {
    record.style.animationPlayState = "paused";
});

// Pausar animación al inicio hasta que inicie la música
record.style.animationPlayState = "paused";

