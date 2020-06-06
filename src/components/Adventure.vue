<template>
  <transition name='fade'>
    <div class="sectionTitle">
    <div class="regularCursor"></div>
      <h1>Les douze travaux</h1>
      <p>Découvre l'aventure d'Héraclès à travers 12 œuvres d'art uniques.</p>
      <svg style='margin-top:40px' xmlns="http://www.w3.org/2000/svg" width="63" height="88" viewBox="0 0 63 88">
        <g id="Groupe_6" data-name="Groupe 6" transform="translate(-927 -726.5)">
          <g id="Groupe_4" data-name="Groupe 4" transform="translate(7)">
            <line id="Ligne_2" data-name="Ligne 2" y2="66" transform="translate(939.5 744.5)" fill="none" stroke="#fff" stroke-width="1"/>
            <line id="Ligne_3" data-name="Ligne 3" y2="73" transform="translate(951.5 726.5)" fill="none" stroke="#fff" stroke-width="1"/>
            <line id="Ligne_4" data-name="Ligne 4" y2="78" transform="translate(963.5 736.5)" fill="none" stroke="#fff" stroke-width="1"/>
          </g>
          <g id="Groupe_1" data-name="Groupe 1" transform="translate(393.885 -73.115)">
            <rect id="Rectangle_1" data-name="Rectangle 1" width="63" height="23" transform="translate(533.115 837.115)" fill="#160a03"/>
            <text id="SCROLL" transform="translate(566 854)" fill="#fff" font-size="12" font-family="SFProDisplay-Light, SF Pro Display" font-weight="300" letter-spacing="0.2em"><tspan x="-27.428" y="0">SCROLL</tspan></text>
          </g>
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
