// Custom animated thin circle cursor
const cursor = document.getElementById('custom-cursor');
let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
let cursorX = mouseX, cursorY = mouseY;

// Animate the cursor smoothly
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)` + (cursor.classList.contains('cursor-hover') ? ' scale(1.5)' : '');
  requestAnimationFrame(animateCursor);
}

// Update mouse position
window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Grossir le curseur sur hover des liens
const addCursorHover = (e) => cursor.classList.add('cursor-hover');
const removeCursorHover = (e) => cursor.classList.remove('cursor-hover');

document.querySelectorAll('a, button, .hero-image').forEach(el => {
  el.addEventListener('mouseenter', addCursorHover);
  el.addEventListener('mouseleave', removeCursorHover);
});

// Cacher le curseur si la souris sort de la fenêtre
window.addEventListener('mouseout', () => { cursor.style.opacity = 0; });
window.addEventListener('mouseover', () => { cursor.style.opacity = 1; });

animateCursor();
