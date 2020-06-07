<template>
  <transition name='fade'>
    <div class="sectionTitle">
    <div class="regularCursor"></div>
      <h1>Les douze travaux</h1>
      <p>Découvre l'aventure d'Héraclès à travers 12 œuvres d'art uniques.</p>
      <svg style="margin-top:40px" xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157">
        <g id="Groupe_1" data-name="Groupe 1" transform="translate(-488.114 -772.114)">
          <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(488.114 929.114) rotate(-90)" fill="none" stroke="#fff" stroke-width="9" stroke-dasharray="1 30">
            <circle cx="78.5" cy="78.5" r="78.5" stroke="none"/>
            <circle cx="78.5" cy="78.5" r="74" fill="none"/>
          </g>
          <text id="CONTINUER" transform="translate(567 866)" fill="#fff" font-size="12" font-family="ArialMT, Arial" letter-spacing="0.2em"><tspan x="-45.266" y="0">CONTINUER</tspan></text>
          <text id="Cliquez_pour" data-name="Cliquez pour" transform="translate(567 843)" fill="#fff" font-size="10" font-family="ArialMT, Arial" letter-spacing="0.2em"><tspan x="-48.505" y="0">CLIQUEZ POUR</tspan></text>
        </g>
      </svg>

  </div>
</transition>
</template>
<script>
  export default {
    mounted() {
      var self=this;
      document.title = 'Héraclès - Les 12 travaux';
      var mouse=document.querySelector('.regularCursor');
      document.addEventListener('mousemove', function(e) {
        mouse.style.left = (e.clientX - 4)+'px' ;
        mouse.style.top = (e.clientY - 4)+'px';
      });
      document.addEventListener("click", startLabors);

    function startLabors() {
      document.removeEventListener("click", startLabors);

      var step =1;
      self.$router.push({ name: 'labor', params: { step } })

    }
    }
  }
</script>
