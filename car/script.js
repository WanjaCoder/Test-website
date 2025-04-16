document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.highlightable');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        sections.forEach(section => section.classList.remove('active'));
  
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.classList.add('active');
          setTimeout(() => {
            targetSection.classList.remove('active');
          }, 1000); // Изменено с 1500 на 1000 (1 секунда)
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
  // Coded by Iwan Kochura