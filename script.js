// ===== Variables globales =====
let currentStory = 0;
const stories = document.querySelectorAll('.story');
const totalStories = stories.length;
let isPlaying = false;
let audio = null;

// ===== Inicialización =====
function init() {
    createProgressBars();
    setupImageBackgrounds();
    updateStory();
    setupEventListeners();
    createParticles();
}

// ===== Configurar fondos de imágenes =====
function setupImageBackgrounds() {
    document.querySelectorAll('.story-background img').forEach(img => {
        const container = img.closest('.story-background');
        if (container) {
            // Establecer la variable CSS para el fondo borroso
            container.style.setProperty('--bg-image', `url("${img.src}")`);
            container.classList.add('has-image');
        }
    });
}

// ===== Crear barras de progreso =====
function createProgressBars() {
    const progressBars = document.getElementById('progressBars');
    progressBars.innerHTML = '';

    for (let i = 0; i < totalStories; i++) {
        const bar = document.createElement('div');
        bar.className = 'progress-bar';
        bar.innerHTML = '<div class="progress-fill"></div>';
        progressBars.appendChild(bar);
    }
}

// ===== Actualizar historia actual =====
function updateStory() {
    // Actualizar clases de las historias
    stories.forEach((story, index) => {
        story.classList.remove('active', 'prev', 'next');

        if (index === currentStory) {
            story.classList.add('active');
        } else if (index < currentStory) {
            story.classList.add('prev');
        } else {
            story.classList.add('next');
        }
    });

    // Actualizar barras de progreso
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar, index) => {
        bar.classList.remove('active', 'completed');

        if (index < currentStory) {
            bar.classList.add('completed');
        } else if (index === currentStory) {
            bar.classList.add('active');
        }
    });

    // Actualizar indicador de página
    document.getElementById('currentPage').textContent = currentStory + 1;
    document.getElementById('totalPages').textContent = totalStories;

    // Actualizar botones
    document.getElementById('prevBtn').disabled = currentStory === 0;
    document.getElementById('nextBtn').disabled = currentStory === totalStories - 1;
}

// ===== Navegación =====
function nextStory() {
    if (currentStory < totalStories - 1) {
        currentStory++;
        updateStory();
    }
}

function prevStory() {
    if (currentStory > 0) {
        currentStory--;
        updateStory();
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Botones de navegación
    document.getElementById('nextBtn').addEventListener('click', nextStory);
    document.getElementById('prevBtn').addEventListener('click', prevStory);

    // Teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextStory();
        if (e.key === 'ArrowLeft') prevStory();
    });

    // Click en los lados de la pantalla
    const container = document.getElementById('storiesContainer');
    container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const containerWidth = rect.width;

        if (clickX > containerWidth * 0.6) {
            nextStory();
        } else if (clickX < containerWidth * 0.4) {
            prevStory();
        }
    });

    // Swipe en móviles
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);
        const threshold = 50;

        // Solo procesar swipes horizontales
        if (diffY < 100) {
            if (diffX > threshold) {
                nextStory();
            } else if (diffX < -threshold) {
                prevStory();
            }
        }
    }

    // Control de música
    const musicBtn = document.getElementById('musicBtn');
    musicBtn.addEventListener('click', () => {
        if (!audio) {
            audio = new Audio('audio/Bad Bunny ft.mp3');
            audio.loop = true;
            audio.volume = 0.2;
        }

        if (isPlaying) {
            audio.pause();
            musicBtn.classList.remove('active');
        } else {
            audio.play().catch(e => console.log('Error al reproducir:', e));
            musicBtn.classList.add('active');
        }

        isPlaying = !isPlaying;
    });

    // Pantalla completa
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log('Error al activar pantalla completa:', err);
            });
        } else {
            document.exitFullscreen();
        }
    });
}

// ===== Partículas decorativas =====
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.appendChild(container);
    }

    const container = document.querySelector('.particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 20 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// ===== Prevenir zoom en móviles =====
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// ===== Ajustar al cambiar orientación =====
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        updateStory();
    }, 100);
});

// ===== Iniciar =====
init();

console.log('✨ Galería de momentos cargada');
console.log('💡 Usa las flechas, click en los lados o swipe para navegar');
