<template>
  <transition name='fade'>
    <div class="about">
    <div class="regularCursor"></div>

      <a target='_blank' href="http://twitter.com/share?text=D%C3%A9couvrez%20%22H%C3%A9racl%C3%A8s%20-%20Histoire%20d%27un%20demi-dieu%22%2C%20un%20webdocumentaire%20retra%C3%A7ant%20la%20vie%20du%20h%C3%A9ro.%0A%0A&url=https://heracles.netlify.app&hashtags=mmi,webdocumentaire,histoire,iutlaval" class="share">Partager sur Twitter</a>
      <p>Conçu et développé par Alban Bleicher</p>
      <p>Ambiance musicale : Fluidscape - Kevin McLeod</p>

      <ul>
        <li><a href="https://youtu.be/lWt4F9pZQQY" target='_blank'><img :src="require('@/assets/images/logos/arte.svg')" alt="Arte"> </a> </li>
        <li><a href="https://www.metmuseum.org/art/collection" target='_blank'><img :src="require('@/assets/images/logos/met.svg')" alt="Met Museum"></a> </li>
        <li><a href="https://commons.wikimedia.org/wiki/Main_Page" target='_blank'><img :src="require('@/assets/images/logos/wikimedia.svg')" alt="Wikimedia Commons"></a> </li>
        <li><a href="https://www.britishmuseum.org/collection/" target='_blank'><img :src="require('@/assets/images/logos/britishmuseum.svg')" alt="The British Museum"></a> </li>
      </ul>

      <a href="http://iut-laval.univ-lemans.fr/fr/index.html" target="_blank" class='logoIUT'><img :src="require('@/assets/images/logos/iut.svg')" alt="IUT de Laval"></a>
  </div>
  </transition>
</template>
<script type="text/javascript">
  export default {
    mounted() {
      document.title='Héraclès - Crédits'
      var mouse = document.querySelector('.regularCursor');
      document.addEventListener('mousemove', function(e) {
        console.log(e);
      mouse.style.left = (e.clientX - 4)+'px' ;
      mouse.style.top = (e.clientY - 4)+'px';

        document.querySelectorAll('a').forEach(element => {
          element.addEventListener('mouseenter', function() {
              mouse.style.width = '40px';
              mouse.style.height = '40px';
              mouse.style.borderColor='#EA7933'
              mouse.style.backgroundColor='#EA7933'


              mouse.innerText='clic';

          })
          element.addEventListener('mouseleave',initMouse);
        })


        function initMouse() {
          mouse.style.width = '8px';
          mouse.style.height = '8px';
          mouse.style.backgroundColor='#fff'
          mouse.style.borderColor='#967a68'

          mouse.innerText='';
        }

      })
    }
  }
</script>
