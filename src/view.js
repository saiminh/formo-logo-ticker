const logoTickers = document.querySelectorAll('.formo-logo-ticker');
logoTickers.forEach(logoTicker => {
  init(logoTicker);
});

let resizeTimer;

let prevWidth = window.innerWidth;

window.addEventListener('resize', () => {
  const widthChanged = window.innerWidth !== prevWidth;

  if (!widthChanged) {
    return;
  }
  
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    logoTickers.forEach(logoTicker => {
      init(logoTicker);
    });
  }, 250)
  prevWidth = window.innerWidth;
});

function init(logoTicker){
  const logos = logoTicker.querySelector('.formo-logo-ticker__logos');
  const logosWidth = logos.offsetWidth;
  const speed = logoTicker.getAttribute('data-scroll-speed');

  const factor = Math.ceil( (window.innerWidth * 2) / logosWidth );
  for (let i = 0; i < factor; i++) {
    const clone = logos.cloneNode(true);
    logoTicker.appendChild(clone);
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