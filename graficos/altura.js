// Comunica la altura del gráfico a la página que lo incrusta (iframe), para que no aparezcan barras de desplazamiento.
(function () {
  function enviar() {
    if (window.parent !== window) {
      window.parent.postMessage({ graficoAltura: Math.ceil(document.querySelector("main").getBoundingClientRect().height) + 2, id: location.pathname }, "*");
    }
  }
  window.addEventListener('load', enviar);
  window.addEventListener('resize', enviar);
  new ResizeObserver(enviar).observe(document.body);
})();
