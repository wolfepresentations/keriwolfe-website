const hb = document.getElementById('hamburger');
const nl = document.getElementById('nav-links');
hb.addEventListener('click', () => nl.classList.toggle('open'));
document.querySelectorAll('.dropdown > a').forEach(a => {
  a.addEventListener('click', e => {
    if (window.innerWidth <= 768) { e.preventDefault(); a.parentElement.classList.toggle('open'); }
  });
});
// Mark active page
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});
