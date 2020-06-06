<template>

<div class="heracles-app">
  <iframe :src="require('@/assets/Fluidscape.mp3')" class="music" autoplay style='display:none'></iframe>
  <transition mode="out-in"
          name="fade">
  <router-view :key="$route.path"></router-view>
</transition>

</div>

</template>
<script>
function disableselect() {return false}
document.onselectstart =  function () {
  return false
}
document.onmousedown = disableselect
  require('@/assets/App.scss')
</script>
