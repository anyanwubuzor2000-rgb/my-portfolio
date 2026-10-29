// // Smooth scroll for nav links
// document.querySelectorAll('a[href^="#"]').forEach(a=>{
//   a.addEventListener('click', e=>{
//     e.preventDefault();
//     const target = document.querySelector(a.getAttribute('href'));
//     if(target) target.scrollIntoView({behavior:'smooth'});
//   });
// });

// // Parallax effect on hero image
// window.addEventListener('scroll', ()=>{
//   const y = window.scrollY;
//   const heroImg = document.querySelector('.hero-img');
//   if(heroImg) heroImg.style.transform = `translateY(${y * 0.05}px)`;
// });

// // Fade-in animation for cards on scroll
// const observer = new IntersectionObserver((entries)=>{
//   entries.forEach(entry=>{
//     if(entry.isIntersecting){
//       entry.target.style.opacity = 1;
//       entry.target.style.transform = 'translateY(0)';
//     }
//   });
// }, {threshold: 0.15});

// document.querySelectorAll('.card').forEach(c=>{
//   c.style.opacity = 0;
//   c.style.transform = 'translateY(20px)';
//   c.style.transition = 'all .6s ease';
//   observer.observe(c);
// });