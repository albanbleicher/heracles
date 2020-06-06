<template>
  <transition name="fade">
    <div class="triomphe">

      <transition name="fade">
        <div v-show='!animationEnded' class="sectionTitle">
          <h1>triomphe</h1>
          <p>Succès du héro, cruauté d'Héra</p>
        </div>
      </transition>
      <transition name="fade">
        <div class="video">
          <iframe frameborder="0" width="100%" height="100%" src="https://www.dailymotion.com/embed/video/k2MGsdr5Nf8d3lw5L3B" allowfullscreen="" allow="autoplay"></iframe>
        <transition name="fade">
          <div v-show='end' class="next">
            <span>À propos</span>
            <span class="sub">de ce webdocumentaire</span>
          </div>
        </transition>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  export default{
    data(){
      return {
        animationEnded:false,
        end:false
      }
    },
    mounted(){
      var self=this;
      document.title ="Héraclès - Triomphe";
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
    setTimeout(function(){
      self.animationEnded=true;
      document.querySelectorAll('.music').forEach(element =>{
        element.remove()
      });
      setTimeout(function(){
        self.end=true;
        document.querySelector('.next').addEventListener('click', function(){
          self.$router.push('about')

        })
      },10000)
    },2500)
    }
  }
</script>
