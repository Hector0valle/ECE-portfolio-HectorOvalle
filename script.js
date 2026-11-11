const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.lightbox-item img').forEach(img => {
  img.addEventListener('click', () => {
    if (!lightbox) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    const caption = img.closest('figure')?.querySelector('figcaption')?.textContent || '';
    lightboxCaption.textContent = caption;
    lightbox.showModal();
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => lightbox.close());
}
if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    const rect = lightbox.getBoundingClientRect();
    const inDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height
      && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
    if (!inDialog) lightbox.close();
  });
}
