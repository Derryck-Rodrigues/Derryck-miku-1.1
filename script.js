// Função de scroll para efeito fade-in nas seções
function fadeInOnScroll() {
    const sections = document.querySelectorAll('.fade-in');
    const triggerHeight = window.innerHeight * 0.85; // Altura para ativar o efeito
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);