<template>
  <transition name="fade">

    <div class="begin">

      <div class="aside-title">
        <h1>Héraclès</h1>
        <p>L'histoire d'un demi-dieu</p>
      </div>
      <svg class="beginCursor" xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157">
        <g id="Groupe_1" data-name="Groupe 1" transform="translate(-488.114 -772.114)">
          <g id="Ellipse_1" data-name="Ellipse 1" transform="translate(488.114 929.114) rotate(-90)" fill="none" stroke="#fff" stroke-width="9" stroke-dasharray="1 30">
            <circle cx="78.5" cy="78.5" r="78.5" stroke="none"/>
            <circle cx="78.5" cy="78.5" r="74" fill="none"/>
          </g>
          <text id="commencer" transform="translate(567 866)" fill="#fff" font-size="12" font-family="ArialMT, Arial" letter-spacing="0.2em"><tspan x="-49.599" y="0">COMMENCER</tspan></text>
          <text id="Cliquez_pour" data-name="Cliquez pour" transform="translate(567 843)" fill="#fff" font-size="10" font-family="ArialMT, Arial" letter-spacing="0.2em"><tspan x="-48.505" y="0">CLIQUEZ POUR</tspan></text>
        </g>
      </svg>

      <img src="@/assets/images/heracles_statue.png" alt="Statue d'Héraclès">
    </div>
  </transition>
</template>
<script type="text/javascript">


  export default {
    mounted() {
      var self=this;
      document.title='Héraclès - L\'histoire d\'un demi-dieu';
      document.addEventListener('mousemove',moveCursor)
      function moveCursor(e) {
        document.querySelector('.beginCursor').style.left = e.clientX - 78.5;
        document.querySelector('.beginCursor').style.top = e.clientY - 78.5;
      }
      document.addEventListener('click', onClick)
      function onClick() {
        document.removeEventListener('click', onClick);

        document.removeEventListener('mousemove', moveCursor)
        self.$router.push('introduction')
      }
    }
  }
</script>
