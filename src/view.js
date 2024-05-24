const logoTickers = document.querySelectorAll('.formo-logo-ticker');
logoTickers.forEach(logoTicker => {
  init(logoTicker);
});

let resizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    logoTickers.forEach(logoTicker => {
      init(logoTicker);
    });
  }, 250)
});

function init(logoTicker){
  const logos = logoTicker.querySelector('.formo-logo-ticker__logos');
  const logosWidth = logos.offsetWidth;
  const speed = logoTicker.getAttribute('data-scroll-speed');

  if (logosWidth < (window.innerWidth * 2)) {
    const factor = (window.innerWidth * 2) / logosWidth;
    for (let i = 0; i < factor; i++) {
      const clone = logos.cloneNode(true);
      logoTicker.appendChild(clone);
    }
  }
  const allLogos = logoTicker.querySelectorAll('.formo-logo-ticker__logos');
  allLogos.forEach((logos) => {
    logos.animate([
      { transform: `translateX(0px)` },
      { transform: `translateX(-${logosWidth}px)` }
    ], {
      duration: speed * 1000,
      iterations: Infinity
    });
  })
}