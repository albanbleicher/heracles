<template>
  <transition name='fade'>
    <div class="labor">
      <div v-show="animationEnded" class="regularCursor"></div>
      <div class="introLabor">
        <img :src="this.labors[this.$route.params.step].tableau.src">
        <h1>{{this.labors[this.$route.params.step].nom}}</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="88" viewBox="0 0 62 88">
          <g id="Groupe_7" data-name="Groupe 7" transform="translate(-928.885 -726.5)">
            <g id="Groupe_4" data-name="Groupe 4" transform="translate(7)">
              <line id="Ligne_2" data-name="Ligne 2" y2="24" transform="translate(939.5 786.5)" fill="none" stroke="#fff" stroke-width="1"/>
              <line id="Ligne_3" data-name="Ligne 3" y1="9" transform="translate(951.5 786.5)" fill="none" stroke="#fff" stroke-width="1"/>
              <path id="Tracé_2" data-name="Tracé 2" d="M0,50.874v28" transform="translate(963.5 735.626)" fill="none" stroke="#fff" stroke-width="1"/>
            </g>
            <g id="Groupe_1" data-name="Groupe 1" transform="translate(393.885 -74.115)">
              <text id="SCROLL" transform="translate(566 854)" fill="#fff" font-size="12" font-family="ArialMT, Arial" letter-spacing="0.2em"><tspan x="-30.009" y="0">SCROLL</tspan></text>
            </g>
            <g id="Groupe_4-2" data-name="Groupe 4" transform="translate(7)">
              <line id="Ligne_2-2" data-name="Ligne 2" y2="21" transform="translate(939.5 744.5)" fill="none" stroke="#fff" stroke-width="1"/>
              <line id="Ligne_3-2" data-name="Ligne 3" y2="39" transform="translate(951.5 726.5)" fill="none" stroke="#fff" stroke-width="1"/>
              <line id="Ligne_4" data-name="Ligne 4" y2="29" transform="translate(963.5 736.5)" fill="none" stroke="#fff" stroke-width="1"/>
            </g>
          </g>
        </svg>

      </div>
      <div class="laborContent">
        <transition-group tag="ul" name="fade">
          <li v-for="phrase in this.currentStory" :key='phrase'>{{phrase}}</li>
        </transition-group>
        <transition name="fade">
          <div v-show="showArt" class="artInfos">
            <h2>{{this.labors[this.$route.params.step].nom}} dans l'art</h2>
            <div class="artInfosContent">
              <div class="artData">
                <ul>
                  <li><i>Nom de l'œuvre</i> : {{this.labors[this.$route.params.step].tableau.nom}}</li>
                  <li><i>Artiste</i> : {{this.labors[this.$route.params.step].tableau.artiste ? this.labors[this.$route.params.step].tableau.artiste : 'Inconnu'}}</li>
                  <li><i>Date</i> : {{this.labors[this.$route.params.step].tableau.date ? this.labors[this.$route.params.step].tableau.date : 'Inconnue'}}</li>
                  <li><i>Type</i> : {{this.labors[this.$route.params.step].tableau.typeArt ? this.labors[this.$route.params.step].tableau.typeArt : 'Indétereminé'}}</li>
                  <li><i>Lieu de conservation</i> : {{this.labors[this.$route.params.step].tableau.conservation ? this.labors[this.$route.params.step].tableau.conservation :'Inconnu' }} </li>
                </ul>
              </div>
                <div class="art">
                  <img :src="this.labors[this.$route.params.step].tableau.src" :alt="this.labors[this.$route.params.step].nom">
                </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-show='storyEnded' class="next">
            <span>suivant</span>
            <span v-if='parseInt(this.$route.params.step)<12' class="laborName">{{this.labors[parseInt(this.$route.params.step)+1].nom}}</span>
          </div>
        </transition>
        <transition name="fade">
          <div class="modalArt" v-show="showModalArt">
            <span class="close">✕</span>

            <div class="modalArtContent">
              <img :src="this.labors[this.$route.params.step].tableau.src" :alt="this.labors[this.$route.params.step].nom">
            </div>
          </div>
        </transition>
        </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        labors:{
          1:{
          nom:"Le lion de Némée",
        tableau:{
          nom:"Le Combat d'Hercule avec le lion de Némée",
          artiste:'Pierre Paul Rubens',
          typeArt:'Huile sur toile',
          date:"1639",
          conservation:"Musée national d'Art de Roumanie",
          src:require('@/assets/images/tasks/1.jpg')
        },
      story:[
        "Le premier des douze travaux imposés par Eurysthée, est de tuer le Lion de Némée à la peau réputée impénétrable, et d'en ramener sa dépouille.",
        "Arrivé dans la contrée de Cléones, Héraclès aperçoit le Lion de Némée sur une coline.",
        "Se munissant rapidement de son arc, il décoche plusieurs flèches en direction de la bête. Celle-ci ne bronche pas, les flèches rebondissent sur sa peau.",
        "Héraclès est supris, car ces flèches lui ont été offert par le dieu Apollon.",
        "Le demi-dieu décide donc de le combattre à mains nues. Il parvient à tuer la bête",
        "Avec la peau du lion, Héraclès se fabriquera un casque et une armure aussi solide que le fer."
      ],
    },
          2:{
          nom:"L'hydre de Lerne",
        tableau:{
          nom:"Hercule et l'Hydre de Lerne",
          artiste:'Gustave Moreau',
          typeArt:"Huile sur toile",
          date:"1876",
          conservation:"Institut d'Art de Chicago",
          src:require('@/assets/images/tasks/2.jpg')
        },
      story:[
        "L'hydre de Lerne est un gigantesque serpent à neuf têtes.",
        "Héraclès se munit de son épée pour aller combattre l'Hydre.",
        "Hélas, Héraclès s'aperçoit qu'a chaque tête tranchée, deux autres repoussent.",
        "Héraclès est confus, et se voit déjà perdre ce combat.",
        "C'est avec l'aide d'Athéna, qui lui suggère d'utiliser les flammes.",
        "Il brûle donc chaque tête de la bête, jusqu'a la dernière, qu'il décapitera.",
        "Ensuite, dans le sang vénéneux de l'hydre, Héraclès trempe ses flèches."
      ],
    },
          3:{
          nom:"Le sanglier d'Érymanthe",
        tableau:{
          artiste:"Francisco de Zurbarán",
          nom:"Héraclès et le sanglier d'Érymanthe",
          typeArt:'Huile sur toile',
          date:"1634",
          conservation:'Musée du Prado, Madrid',
          src:require('@/assets/images/tasks/3.jpg')
        },
      story:[
        "Arrivé en Acardie, Héraclès exécute sa troisième tâche : chasser le sanglier d'Érymanthe.",
        "Le demi-dieu parcours ainsi la montagne et les forêts, afin de mettre la main sur la bête.",
        "Des jours durant, Héraclès le pourchassera, lui jetant des pierres, afin de le fatiguer.",
        "Un jour, la bête tombe dans un trou, un piège créé par Héraclès.",
        "Le héro maîtrise alors à main nues la bête sauvage, avant de ramener sa dépouille à Eurysthée"
      ],
    },
          4:{
          nom:'La biche de Cérénie',
        tableau:{
          nom:"Héraclès capurant la biche de Cérynie",
          date:"530–520 av. J.-C",
          artiste:false,
          typeArt:"Amphore attique à figures noires",
          conservation:"Musée du Louvre, Paris",
          src:require('@/assets/images/tasks/4.jpg')

        },
      story:[
        "Pour sa quatrième tâche, Héraclès eu pour mission de capturer la biche de Cérynie. Créature mythique aux bois dorés et sabots d'airin, dotée d'une grande rapidité, Eurysthée la convoitait.",
        "Or, cette créature est spécialemement consacrée à la déesse Artémis.",
        "Héraclès pourchassa la biche jusqu'à ce que celle-ci s'épuise, pour ensuite l'amener à Eurysthée",
        "Sur son chemin du retour, Héraclès croisa Artémis, qui fut très contrariée du traitement donnée à sa biche, mais qui s'appaisa une fois qu'Héraclès l'informa de sa situation."
      ],
    },
          5:{
          nom:'Les oiseaux du lac stymphale',
        tableau:{
          nom:"Héraclès l'archer",
          artiste:"Antoine-Emile Bourdelle",
          date:"1909",
          typeArt:"Sculpture en bronze",
          conservation:"Metropolitan Museum, New York City",
          src:require('@/assets/images/tasks/5.jpg')
        },
      story:[
        "Héraclès, pour sa cinquième tâche, dû débarassé le Stymphale d'un nuée d'oiseaux agressifs, aux plumes de fers, qu'ils utilisaient comme des flèches.",
        "Grâce à ses flèches, le héro a pu venir a bout de plusieurs oiseaux, mais le reste s'est ensuite réfugié dans les arbres aux alentours.",
        "Ne sachant que faire, Héraclès implora Athéna de lui apporter son aide divine.",
        "C'est alors que deux cymbales en airain apparurent près du lac.",
        "En frappant les deux cymbales entre elles, il effraya les oiseaux qui s'envolèrent dans les airs.",
        "Il pu donc leur décocher à chacun une flèche magique empoisonée."
      ],
    },
          6:{
          nom:'Le taureau crétois',
        tableau:{
          nom:"Héraklès et le Taureau de Crète",
          date:"~ 470 av. J-C",
          typeArt:"Lécythe attique à figures noires",
          conservation:"Musée du Louvre, Paris",
          src:require('@/assets/images/tasks/6.jpg')
        },
      story:[
        "Le taureau crétois est un taureau qui faisait des ravages parmis les cités de Crète.",
        "Devenu incontrôlable après une malédiction de Poséidon, la bête démontrait depuis, une folie destructrice.",
        "Eurysthée, inquiet de la popularité grandissante d'Héraclès, défia le héro de capturer l'effroyable bête.",
        "Lorsque le taureau aperçu Héraclès, impassible devant sa fureur, il s'immobilisa.",
        "Malgré toutes les provocatioons d'Héraclès, le taureau ne bougeait pas.",
        "Héraclès agita donc sa cape en peau de Lion de Némée, et le taureau fonca sur lui.",
        "Héraclès attrapa le taureau par les cornes, et l'imobilisa, pour ensuite de ramener à Eurysthée."
      ],
    },
          7:{
          nom:'Les juments de Diomède',
        tableau:{
          artiste:"Charles Lebrun",
          nom:"Hercule terrassant Diomède",
          conservation:"Grand Palais, Paris",
          src:require('@/assets/images/tasks/7.jpeg')
        },
      story:[
        "Eurysthée, supris du précédent exploit, exigea d'Héraclès qu'il amadoue les Juments de Diomède, pour qu'elles soient innofensives. Ces juments mangeuses d'Hommes se trouvaient en Thrace.",
        "Arrivé dans la région, Héraclès repéra aisément les juments, mais fit emprisonné par Diomède alors qu'il entrait dans les écuries.",
        "Héraclès jetta alors Diomède dans la mangeoire des juments, qui en firent leur repas.",
        "Repus, elles étaient désormais dociles, et Héraclès les ramena sans encombre à Eurysthée."
      ],
    },
          8:{
          nom:"la ceinture d’Hippolyte",
        tableau:{
          src:require('@/assets/images/tasks/8.jpeg'),
          nom:"Héraclès obtenant la ceinture d'Hippolyte",
          conservation:"Musée l'Hermitage, Saint-Pétersbourg",
          typeArt:"Huile sur toile",
          artiste:"Nicolaus Knüpfer"
        },
      story:[
        "Admète, la fille d'Eurysthée, était capricieuse, et réclama à son père, la ceinture d'Hippolyte, reine des Amazones. Eurysthée exigea donc d'Héraclès qu'il s'empare de l'objet.",
        "Héraclès, accompagné de volontaires, se dirigea vers Thémiscyra, la capitale des Amazones.",
        "De réputation sanguinaire et sans pitié, les Amazones se montrèrent sous un jour totalement différent, lorsqu'elles accueillir Héraclès.",
        "Le héro présenta alors les cadeaux d'Eurysthéee à la reine des Amazones en échange de sa ceinture.",
        "Hippolyte, généreuse, céda sa ceinture à Héraclès. Hélas, Héra, sournoise, avait la rumeur d'un potentiel enlèvement de la reine.",
        "Des Amazones entrèrent alors dans la salle pour attaquer Héraclès. La reine s'interposa, et ordonna à Héraclès de s'en aller avec la ceinture.",
        "Héraclès parti aussitôt, la ceinture à la main."
      ],
    },
          9:{
          nom:"Les écuries d'Augias",
        tableau:{
          nom:"Hercule dévie le cours du fleuve Alphée",
          artiste:"Francisco de Zurbarán",
          typeArt:"Huile sur toile",
          date:"1634",
          conservation:"Musée du Prado, Madrid",
          src:require('@/assets/images/tasks/9.jpg')

        },
      story:[
        "La neuvièm tâche est le nettoyage des Écuries d'Augias. Riche roi, propriétaire d'un troupeau de taureaux blancs.",
        "Ces animaux sacrés vivent dans des écuries insalubres, salent depuis 30 ans. Eurysthée lui impose de nettoyer ces écuries en un jour seulement.",
        "Afin d'être rapide, Héraclès détourne un cours d'eau pour que celui-ci vienne nettoyer impecablement les écuries.",
        "Eurysthée ne compta pas cette tâche, car Héraclès avait demandé à Augias de le payer."
      ],
    },
          10:{
          nom:"Le troupeau de Géryon",
        tableau:{
          nom:"Héraklès affrontant le triple Géryon",
          conservation:"The British Museum, Londres",
          date:"550-530 av. JC",
          typeArt:"Amphore attique à figures noires",
          src:require('@/assets/images/tasks/10.jpg')

        },
      story:[
        "Eurysthée charge ensuite Héraclès de s'emparer du troupeau de Géryon. Géryon est un homme à 3 corps, considéré comme le plus fort du monde.",
        "Pour garder son troupeau, Géryon avait avec lui un chien à deux têtes, Orthos, ainsi qu'un dragon à sept têtes, Eurythion.",
        "En arrivant sur le domaine de Géryon, Héraclès terrassa Orthos d'un coup de massue. Le bruit de ce coup alerta Géryon, qui appela Eurythion.",
        "Héraclès, décocha une flèche empoisonné pour chacune des têtes du dragon, et assoma la dernière d'un coup de massue.",
        "Vint ensuite un terrible combat entre Géryon et Héraclès. Héraclès gagna, en plantant trois flèches empoisonnées, dans les trois fronts de Géryon."
      ],
    },
          11:{
          nom:"Le jardin des Hespérides",
        tableau:{
          nom:"Hercule ou Atlas soutenant le monde",
          typeArt:'Sculpture en terre cuite',
          artiste:"Claude Michel",
          date:"~ 1780",
          conservation:"Metropolitan Museum, New York City",


          src:require('@/assets/images/tasks/11.jpg')

        },
      story:[
        "Eurysthée, agacé, demanda à Héraclès pour son onzième travaux, de lui rapporter les pommes d'or du jardin des Hespérides, fruits sacrés offert par Gaïa à Héra. Ce jardin est connu pour être introuvable.",
        "Après avoir fait la rencontre de Nérée, celui-ci lui confia que le jardin des Hespérides se trouvait au pied du mont Atlas.",
        "Héraclès se rendit donc sur le mont Atlas, après maintes aventures, et y trouva le titan, Atlas, chargé de soutenir le ciel.",
        "Celui-ci promet à Heraclès d'aller chercher les pommes lui-même, si le héro est d'accord pour soutenir la voute céleste quelques instants.",
        "Héraclès accepte, et prend donc la place d'Atlas. Lorsque celui-ci revient, Atlas propose d'aller apporter lui même les pommes à Eurysthée.",
        "Conscient de la ruse, Héraclès accepte, à la seule condition qu'Atlas le remplace pour un cours instant, le temps de trouver un position plus confortable.",
        "Une fois libéré, Héraclès s'en va, en ramassant les pommes d'or qu'Atlas à récupéré."
      ],
    },
          12:{
          nom:"Le chien Cerbère",
        tableau:{
          nom:"Hercule et Cerbère",
          date:"1550",
          typeArt:"Gravure",
          artiste:"Heinrich Aldegrever",
          conservation:"Metropolitan Museum, New York City",
          src:require('@/assets/images/tasks/12.jpg')
        },
      story:[
        "Pour sa dernière tâche, Eurysthée demandee à Héraclès de se rendre en enfer, pour terasser et ramener Cerbère, gardien du monde souterrain.",
        "Conseillé par Athéna et Hermès, habitué a voyager en enfer, il se présente devant Hadès, le dieu des enfers.",
        "Héraclès demande qu'on lui livre l'animal, ce qu'Hadès accepte, à condition qu'Héraclès arrive à maîtriser la bête sans ses flèches et sa massue.",
        "Héraclès terrassa la bête à main nue, pour n'en faire qu'un petit chiot, qu'il ramena à Eurysthée.",
        "Eurysthée, terrifié, demande à Héraclès de le ramener en enfer."
      ],
    },

  },
  animationEnded:false,
  currentStory:[],
  storyProgression:0,
  storyEnded:false,
  showArt:false,
  showModalArt:false
      }
    },
    mounted() {
      var self = this;
      document.title = 'Héraclès - ' + self.labors[self.$route.params.step].nom;
      setTimeout(function(){
        self.animationEnded=true;
        setTimeout(function(){
          var tellStory = setInterval(function(){
            self.currentStory.push(self.labors[self.$route.params.step].story[self.storyProgression]);
            self.storyProgression++;
            if(self.storyProgression==self.labors[self.$route.params.step].story.length) {
              clearInterval(tellStory)
              setTimeout(function(){
                self.showArt=true;
                setTimeout(function(){
                  self.storyEnded=true;
                  document.querySelector('.next').addEventListener('click', nextLabour);
                },2500)
              },3500)
            }
          },2000)
        },2000)
      },1500)
      function nextLabour() {
        document.querySelector('.next').removeEventListener('click', nextLabour);

        if (parseInt(self.$route.params.step) !=12) {
          var step=parseInt(self.$route.params.step)+1;
          self.$router.push({ name: 'labor', params: { step } })
        }
        else {
          self.$router.push({path:'/triomphe'})


        }
      }
      var mouse = document.querySelector('.regularCursor');
      document.addEventListener('keydown', function(e) {
        if(e.keyCode == 27 && self.showModalArt) {
          self.showModalArt=false;
        }
      })
      document.addEventListener('mousemove', function(e) {
        console.log(e);
      mouse.style.left = (e.clientX - 4)+'px' ;
      mouse.style.top = (e.clientY - 4 - document.querySelector('body').scrollTop)+'px';

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
        var art = document.querySelector('div.art img');
        var close = document.querySelector('.close');
        close.addEventListener('click', function(){
          self.showModalArt=false;
        })
        art.addEventListener('click',function(){
          self.showModalArt=true;
        })
        art.addEventListener('mouseenter', function() {
              mouse.style.width = '100px';
              mouse.style.height = '100px';



              mouse.innerText='zoom';

          })
           art.addEventListener('mouseleave',initMouse);




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
