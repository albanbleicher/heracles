<template>
  <div class="loader">
    <span>{{pourcentage}}%</span>
    <p>{{captions[progression]}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded:false,
      progression:0,
      pourcentage:0,
      captions: [
        "Le lion de Némée finit son repas...",
        "l'Hydre de Lerne se dispute avec lui même...",
        "La biche de Cérynie pleure devant Bambi...",
        "Le Sanglier d'Érymanthe dîne avec Pumba...",
        "Les écuries d'Augias sentent toujours aussi bon...",
        "Les oiseaux du lac Stymphales migrent, par ici ! " ,
        "Le taureau crétois fait ravage en Grèce antique...",
        "Les juments de Diomède ont faim. Bizarrement aucun humain ne veut les nourrir...",
        "Hippolyte boucle sa ceinture, et en voiture!",
         "Le troupeau de Géryon fait craquer toute les Marguerite du coin",
         "Les Héspérides regardent religieusement Silence ça pousse...",
         "Cérbere hésite entre Frolic, Royal Canin ou Friskies pour le déjeuner...",

      ]
    }
  },
  methods:{
    progress() {
      var self = this;
      console.log('ok');
      require('@/assets/images/heracles_statue.png')
      
      var interval = setInterval(function() {
        if(self.progression<11) {
          self.pourcentage = self.pourcentage+9.09;
          self.progression++;
          console.log(self.progression);
        }
        else {
          self.pourcentage = 100;
        setTimeout(function() {
          clearInterval(interval)
            self.$router.push('start')
        }, 1000)

        }

        self.pourcentage=Math.round(self.pourcentage);
        document.title='Héraclès - Chargement ('+self.pourcentage+'%)';

      }, 1500)

    },

  },
  mounted() {
    document.title='Héraclès - Chargement ...';
    this.progress();


  }
}
</script>
