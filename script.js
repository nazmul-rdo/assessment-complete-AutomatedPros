gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 'top -100',
  end: 99999,
  toggleClass: { className: 'header--scrolled', targets: '.header' }
});

const cards = document.querySelectorAll('.cards');


cards.forEach(card=> {
  gsap.to(card, {
    opacity: 0,
    scrollTrigger: {
      trigger: card,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => card.style.opacity = 1,
      onLeave: () => card.style.opacity = 0
    }
  });
});