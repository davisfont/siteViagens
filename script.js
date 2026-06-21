// Navbar muda de fundo ao rolar a página
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu mobile (hamburger)
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu mobile ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', false);
  });
});

// Carrossel de avaliações
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.t-dot');
let current = 0;

function showTestimonial(index) {
  testimonials[current].classList.remove('active');
  dots[current].classList.remove('active');
  current = (index + testimonials.length) % testimonials.length;
  testimonials[current].classList.add('active');
  dots[current].classList.add('active');
}

document.getElementById('tPrev').addEventListener('click', () => showTestimonial(current - 1));
document.getElementById('tNext').addEventListener('click', () => showTestimonial(current + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showTestimonial(i)));

// Avança automaticamente a cada 7 segundos
setInterval(() => showTestimonial(current + 1), 7000);
