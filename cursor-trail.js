// Animated cursor with trailing effect
const dot = document.createElement('div');
dot.className = 'cursor-dot';
document.body.appendChild(dot);

const trailCount = 8;
const trails = [];
for (let i = 0; i < trailCount; i++) {
  const t = document.createElement('div');
  t.className = 'cursor-trail';
  document.body.appendChild(t);
  trails.push(t);
}

let mouse = { x: window.innerWidth/2, y: window.innerHeight/2 };
let dotPos = { x: mouse.x, y: mouse.y };
const trailPositions = Array(trailCount).fill().map(() => ({ x: mouse.x, y: mouse.y }));

document.addEventListener('mousemove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

function animateCursor() {
  // Animate dot
  dotPos.x += (mouse.x - dotPos.x) * 0.28;
  dotPos.y += (mouse.y - dotPos.y) * 0.28;
  dot.style.left = dotPos.x + 'px';
  dot.style.top = dotPos.y + 'px';

  // Animate trails
  for (let i = 0; i < trailCount; i++) {
    if (i === 0) {
      trailPositions[i].x += (dotPos.x - trailPositions[i].x) * 0.18;
      trailPositions[i].y += (dotPos.y - trailPositions[i].y) * 0.18;
    } else {
      trailPositions[i].x += (trailPositions[i-1].x - trailPositions[i].x) * 0.18;
      trailPositions[i].y += (trailPositions[i-1].y - trailPositions[i].y) * 0.18;
    }
    trails[i].style.left = trailPositions[i].x + 'px';
    trails[i].style.top = trailPositions[i].y + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();
