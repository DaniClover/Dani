const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function init() {
  if (!canvas) return;
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  particles = [];

  for(let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    });
  }
}

function draw() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.beginPath();

  particles.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
  });

  ctx.fill();
  update();
}

function update() {
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if(p.x < 0 || p.x > width) p.dx = -p.dx;
    if(p.y < 0 || p.y > height) p.dy = -p.dy;
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  init();
});

init();
animate();
