(()=>{const o=document.querySelectorAll(".formo-logo-ticker");let e;o.forEach((o=>{r(o)}));let t=window.innerWidth;function r(o){const e=o.querySelector(".formo-logo-ticker__logos"),t=e.offsetWidth,r=o.getAttribute("data-scroll-speed"),n=Math.ceil(2*window.innerWidth/t);for(let t=0;t<n;t++){const t=e.cloneNode(!0);o.appendChild(t)}o.querySelectorAll(".formo-logo-ticker__logos").forEach((o=>{o.animate([{transform:"translateX(0px)"},{transform:`translateX(-${t}px)`}],{duration:1e3*r,iterations:1/0})}))}window.addEventListener("resize",(()=>{window.innerWidth!==t&&(clearTimeout(e),e=setTimeout((function(){o.forEach((o=>{r(o)}))}),250),t=window.innerWidth)}))})();