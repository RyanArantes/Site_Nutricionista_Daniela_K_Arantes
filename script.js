const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });
  

const elementosParaAnimar = document.querySelectorAll('.blocoDescritivo, .sessaoDetalhada');

elementosParaAnimar.forEach((elemento) => observer.observe(elemento));



