// Efeito de partículas
particlesJS('particles-js', {
    particles: {
        number: { value: 20, density: { enable: true, value_area: 300 } },
        color: { value: "#670FC5" },
        shape: { type: "circle" },
        opacity: { value: 0.9, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f3ff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 7,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 50, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// Carrossel de Realidade Aumentada
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function goToSlide(index) {
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
});

// Auto play
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
}, 7000);

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulação de envio com efeito
    const btn = contactForm.querySelector('.btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> TRANSMITINDO...';

    setTimeout(() => {
        btn.innerHTML = 'MENSAGEM TRANSMITIDA!';
        btn.style.background = 'linear-gradient(45deg, #00ff00, #00cc00)';
        contactForm.reset();

        setTimeout(() => {
            btn.innerHTML = 'TRANSMITIR MENSAGEM';
            btn.style.background = 'linear-gradient(45deg, var(--accent), var(--electric-blue), var(--hot-pink))';
        }, 3000);
    }, 2000);
});

// Efeito de digitação no hero
const heroText = document.querySelector('.hero-content p');
const originalText = heroText.textContent;
heroText.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < originalText.length) {
        heroText.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 30);
    }
}

setTimeout(typeText, 1000);

// Animação ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .service-card, .holo-card, .liquid-glass').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'opacity 1s ease, transform 1s ease';
    observer.observe(el);
});

// Animação suave ao clicar nos links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Efeito de hover nas redes sociais
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-8px) scale(1.1)';
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = '';
    });
});

// Efeito de validação no formulário
const newsletterForm = document.querySelector('.newsletter-form');
const emailInput = newsletterForm.querySelector('input');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!emailInput.value || !emailInput.value.includes('@')) {
        emailInput.style.borderColor = '#ff3860';
        setTimeout(() => {
            emailInput.style.borderColor = '';
        }, 2000);
        return;
    }

    // Simulação de envio
    emailInput.value = '';
    emailInput.placeholder = 'Inscrição realizada!';
    setTimeout(() => {
        emailInput.placeholder = 'Seu e-mail para novidades';
    }, 3000);
});