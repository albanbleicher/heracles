<template>
  <transition name="fade">
    <div class="storyWrapper">
      <div class="regularCursor">
      </div>
      <transition name="fade">
        <div v-show='title' class="sectionTitle">

            <span>Chapitre {{this.histoire[this.$route.params.chapter].indice}} </span>
            <h1>{{this.histoire[this.$route.params.chapter].titre}}</h1>
            <p>{{this.histoire[this.$route.params.chapter].desc}}</p>

        </div>
      </transition>
      <div v-show='!title'  class="story">
        <transition name="fade">

          <div v-show='modalShown' class="modalTableau">
            <span class='close'>FERMER (ESC)</span>
            <div class="modalContent">
              <div class="tableauInfos">
                <ul>
                  <li><span>Nom de l'œuvre : </span> {{this.histoire[this.$route.params.chapter].tableau.nom}}</li>
                  <li><span>Artiste : </span> {{this.histoire[this.$route.params.chapter].tableau.artiste ? this.histoire[this.$route.params.chapter].tableau.artiste : "inconnu"}} </li>
                  <li><span>Date : </span> {{this.histoire[this.$route.params.chapter].tableau.artiste ? this.histoire[this.$route.params.chapter].tableau.date : "inconnue"}} </li>
                  <li><span>Lieu de conservation : </span> {{this.histoire[this.$route.params.chapter].tableau.artiste ? this.histoire[this.$route.params.chapter].tableau.conservation : "inconnu"}} </li>
                  <a class='seeMoreTableau' v-show='this.histoire[this.$route.params.chapter].tableau.seeMore' :href="this.histoire[this.$route.params.chapter].tableau.seeMore">En savoir sur cette œuvre...</a>
                </ul>
              </div>
              <div class="tableau">
                <img :src="this.histoire[this.$route.params.chapter].tableau.src" :alt="this.histoire[this.$route.params.chapter].tableau.nom">
              </div>
            </div>
          </div>

        </transition>
          <div class="storyContent">
            <span>Chapitre {{this.histoire[this.$route.params.chapter].indice}}  - {{this.histoire[this.$route.params.chapter].titre}}</span>

  <transition-group tag="ul" name="fade">
    <li v-for="phrase in this.currentStory" :key='phrase'>{{phrase}}</li>
  </transition-group>
                  </div>

        <div class="tableau">
          <img class="tableau-img" :src='this.histoire[this.$route.params.chapter].tableau.src' :alt="this.histoire[this.$route.params.chapter].tableau.nom">
        </div>
        <transition name='fade'>
          <div v-show='storyEnded' class="next">
            <span>suivant</span>
            <span v-if='parseInt(this.$route.params.chapter)!= 4' class="chapterName">Chapitre {{this.histoire[parseInt(this.$route.params.chapter)+1].indice}} </span>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        histoire: {
          1:{
            indice:'I',
            titre:'Adultère',
            desc:'Le stratagème de Zeus, la revanche d\'Héra',
            story:[
              "Héra, déesse protectrice des femmes, et son mari Zeus, forment tous deux le couple phare de l’Olympe.",
              "Célèbres pour leurs épisodes de querelles et de jeux, C’est avec eux que commence l’histoire d’Héraclès.",
              "Zeus, tombé amoureux d’une mortelle nommée Alcmène, descendit sur Terre sous l’apparence d’Amphytrion, l’époux d’Alcmène.",
              "Le roi des dieux fit appel à Hélios, dieu du Soleil, de cesser sa lumière. Il sollicita Hermès pour ralentir le cours de la Lune. Enfin, il demanda à Hypnos, dieu du Sommeil, d’endormir la Terre entière.",
              "Cette nuit là, la jeune Alcmène, inconsciente qu’il ne s’agit pas de son époux, s’offre à Zeus.",
              "Zeus remonta sur l’Olympe, et patienta neuf mois, en ayant déjà trouvé un nom pour l’enfant: Héraclès (Gloire à Héra)."
          ]  ,
            tableau: {
              src:require("@/assets/images/adultere.png"),
              nom:'Jupiter et Junon',
            artiste:'Annibale Carracci',
            date:'1597',
            conservation:'Palais Farnase, Rome, Italie',
            seeMore:'https://fr.wikipedia.org/wiki/Fresques_de_la_galerie_Farn%C3%A8se#Jupiter_et_Junon'
            }
          },
          2:{
            indice:'II',
            titre:'Premier exploit',
            desc:'La véritable puissance d\'un demi-dieu',
            story: [
              "Héra, de nature jalouse et revancharde, devient furieuse lorsqu’elle apprend ce qu’a fait son mari.",
              "Avec la volonté de se venger, elle envoie deux serpents tuer le fruit de cet adultère, qui vient de naître.",
              "Alerté par le sifflement des vipères, le nouveau-né s’empare à mains nu des deux réptiles, et les étrangle.",
              "Son sang froid lors de cet épisode qui aurait pu être tragique, témoigne de son origine divine."
            ],
            tableau: {
              src:require('@/assets/images/premierExploit.png'),
              nom:"Hercule nouveau-né étranglant des serpents dans son berceau",
              artiste:'Pompeo Batoni',
              date:'1743',
              conservation:'Palais Pitti, Florence, Italie',
              seeMore:false

            }
          },
          3:{
            indice:'III',
            titre:'Colère et folie',
            desc:'Un caractère turbulant : la vengeance d\'Héra',
            story:[
              "Héraclès a grandi et est devenu un jeune homme plein de force, mais aussi de caractère.",
              "Indiscipliné et insolent, il s’emporte lorsque son maître Linos lui fait une remarque, et le tue.",
              "Après cet incident, Héraclès fit envoyé à la campagne par Amphytrion.",
              "Là bas, il apprendra le maniement des armes.",
              "Plus tard il reçu comme épouse la fille du roi de Thèbes, Mégara, avec laquelle il aura huit enfants.",
              "Héra, toujours furieuse de l’infidélité de son mari, poussa Héraclès à la folie, en lui jetant un sortilège qui lui fit tuer ses enfants."
            ],
            tableau: {
              src:require('@/assets/images/colereFolie.png'),
              nom:"Héraclès frappant Linos",
              artiste:false,
              date:false,
              conservation:false,
              seeMore:false
            }
          },
          4:{
            indice:'IV',
            titre:'Le pardon',
            desc:'La parole de l\'oracle face au crime du demi-dieu',
            story:[
              "Réalisant son crime, Héraclès se presse d’aller consulter l’Oracle de Delphes pour savoir comment pouvoir expier son horrible crime.",
              "L’oracle indique alors à Héraclès de se mettre au service de son cousin, Eurysthée, roi de toute la Grèce.",
              "L’oracle précise, que ce n’est seulement en accomplissant toutes les demandes d’Eurysthée, qu’Heraclès pourra trouver le pardon.",
              "Eurysthée, méprisant, et fier, jubile. Il va rendre le pardon d’Héraclès innateignable.",
              "Il commandera à Héraclès de réaliser douze travaux réputés impossibles. Là seulement Héraclès trouvera son pardon."
            ],
            tableau:{
              src:require('@/assets/images/pardon.png'),
              nom:'Héraclès apporte à Eurysthée le sanglier d\'Érymanthe',
              artiste:false,
              date:'510 av. J-C',
              conservation:'Musée du Louvre, Paris, France',
              seeMore:false
            }
          }
        },
        title:true,
        currentChapter:parseInt(this.$route.params.chapter),
        currentStory:[],
        storyProgression:0,
        modalShown:false,
        storyEnded:false
      }

    },
    mounted() {
      var self = this;
      var mouse=document.querySelector('.regularCursor');
      self.currentChapter = parseInt(self.$route.params.chapter);
      if(!self.histoire[parseInt(self.$route.params.chapter)]) {
        var chapter=1;
        self.$router.push({ name: 'story', params: { chapter } })
      }
      document.addEventListener('keydown', function(e) {
        console.log(e.keyCode);
        if(e.keyCode == 27 && self.modalShown) {
          self.modalShown=false;
        }
      })
      document.querySelector('.close').addEventListener('click', function() {
        self.modalShown=false;

      })
      var tableau = document.querySelector('.tableau-img');
      document.addEventListener('mousemove', function(e) {
        mouse.style.left = (e.clientX - 4)+'px' ;
        mouse.style.top = (e.clientY - 4)+'px';
        tableau.addEventListener('click', function() {
          self.modalShown=true;
          initMouse();
        })

        tableau.addEventListener('mouseenter', function() {
          mouse.style.width = '100px';
          mouse.style.height = '100px';
          mouse.style.borderColor='#fff'
          mouse.style.backgroundColor='#fff'


          mouse.innerText='voir';

        })
        tableau.addEventListener('mouseleave',initMouse)

        document.querySelectorAll('a, .next, .close').forEach(element => {
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
      document.title = "Héraclès - Chapitre "+self.histoire[self.$route.params.chapter].indice + " : " + self.histoire[self.$route.params.chapter].titre;
      setTimeout(function(){
        self.title = false;


        var storyLength = Object.keys(self.histoire[self.$route.params.chapter].story).length;
      var story =  setInterval(function() {
          if(self.storyProgression<storyLength) {
            self.currentStory.push(self.histoire[self.$route.params.chapter].story[self.storyProgression])
            self.storyProgression++;
          }
          else {
            clearInterval(story)
            self.storyEnded=true;
            setTimeout(function(){

              document.querySelector('.next').addEventListener('click',nextChapter);
              function nextChapter(){
                document.querySelector('.next').removeEventListener('click',nextChapter);

                if (parseInt(self.$route.params.chapter) !=4) {
                  var chapter=parseInt(self.$route.params.chapter)+1;
                  self.$router.push({ name: 'story', params: { chapter } })
                }
                else {
                  self.$router.push({path:'/discover'})

                }
              }
            }, 1000)
          }
        },3000)
      },4500)

    }
  }
</script>
