// Animation au scroll
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  function revealOnScroll() {
    for (const el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 60) {
        el.classList.add('visible');
      }
    }
  }
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Animation curseur personnalisé
const cursor = document.getElementById('cursor-effect');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => {
  cursor.style.background = 'rgba(0,0,0,0.13)';
  cursor.style.border = '2.5px solid #000';
});
document.addEventListener('mouseup', () => {
  cursor.style.background = 'rgba(0,0,0,0.04)';
  cursor.style.border = '2px solid #111';
});
