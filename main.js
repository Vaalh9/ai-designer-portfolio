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

// Custom trailing blobs cursor
const NUM_BLOBS = 3;
const blobs = [];
for (let i = 0; i < NUM_BLOBS; i++) {
  const blob = document.createElement('div');
  blob.className = 'cursor-blob' + (i > 0 ? ` blob${i+1}` : '');
  document.body.appendChild(blob);
  blobs.push({el: blob, x: window.innerWidth/2, y: window.innerHeight/2});
}
let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2;
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animateBlobs() {
  let prevX = mouseX, prevY = mouseY;
  blobs.forEach((blob, i) => {
    // Plus le blob est "loin" dans la liste, plus il suit lentement
    blob.x += (prevX - blob.x) * (0.18 - i*0.045);
    blob.y += (prevY - blob.y) * (0.18 - i*0.045);
    blob.el.style.left = blob.x + 'px';
    blob.el.style.top = blob.y + 'px';
    prevX = blob.x;
    prevY = blob.y;
  });
  requestAnimationFrame(animateBlobs);
}
animateBlobs();

