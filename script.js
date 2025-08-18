
const dressingRoom = document.getElementById("dressing-room");
const startButton = document.querySelector('.start-button');
const homeContainer = document.querySelector('.home-container');
const introScene = document.querySelector('.intro-scene');
const dialogueText = document.getElementById("dialogue-text");
const nextButton = document.getElementById("next-button");
const minaImg = document.querySelector(".mina-img");


// Gestion de la musique 
const musicDressing = document.getElementById('music-dressing');
const toggleBtn = document.getElementById('toggle-music');

let musicEnabled = true;

toggleBtn.addEventListener('click', () => {
  musicEnabled = !musicEnabled;

  if (musicEnabled) {
    musicDressing.play();
    toggleBtn.textContent = '🎵';
  } else {
    musicDressing.pause();
    toggleBtn.textContent = '🔇';
  }
});

// Lance la musique au démarrage (après interaction utilisateur)
document.addEventListener('click', () => {
  musicDressing.volume = 0.5;
  musicDressing.play();
}, { once: true });

// Gestion des SFX 
const clickSFX = new Audio("https://github.com/GityLou/ASSETS-Divers---projets-code-/raw/refs/heads/main/DressingRoomPrincess/SFX%20clic%20button.aac");
clickSFX.preload = "auto";
clickSFX.volume = 0.5;

function playClickSound() {
  clickSFX.currentTime = 0;
  clickSFX.play();
}


document.querySelectorAll('button, .preview-item, .next-bg, .restart-game').forEach(el => {
  el.addEventListener('click', playClickSound);
});



const dialogues = [
  {
    text: "Bonjour, merci de venir m'aider à m'habiller !",
    img: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/Mina_bubleConv_hello.webp"
  },
  {
    text: "Je n'ai aucune idée de quoi mettre, tu regardes avec moi dans ma garde-robe.. ?",
    img: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/Mina_bubleConv_help.webp"
  }
];

let currentStep = 0;

startButton.addEventListener("click", () => {
  homeContainer.classList.add("hidden");
  introScene.classList.remove("hidden");
 transitionScenes(homeContainer, introScene, () => {
  // Affiche le premier dialogue
  dialogueText.textContent = dialogues[0].text;
  minaImg.src = dialogues[0].img;
      document.body.style.backgroundImage = "url('https://i.pinimg.com/1200x/0d/71/57/0d7157523159f67b87a42383388e88ca.jpg')";
  });
});


nextButton.addEventListener("click", () => {
  currentStep++;
  if (currentStep < dialogues.length) {
    dialogueText.textContent = dialogues[currentStep].text;
    minaImg.src = dialogues[currentStep].img;

    if (currentStep === dialogues.length - 1) {
      nextButton.textContent = "OK";
    }
  } else {
    transitionScenes(introScene, dressingRoom, () => {
    // Cache la scène d'intro et affiche le dressing
    introScene.classList.add("hidden");
    dressingRoom.classList.remove("hidden");
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/e4/c6/68/e4c6684222b4f0e5d0b4f2b4dad30707.jpg')";
     });
  }
});



// Sélection des éléments
const categories = document.querySelectorAll('.wardrobe-category');
const detailView = document.querySelector('.wardrobe-detail');
const wardrobeMenu = document.querySelector('.wardrobe-menu');
const backButton = document.querySelector('.back-button');
const itemGrid = document.querySelector('.item-grid');
const modelContainer = document.querySelector('.model-container');


//ouvrir la garde robe 
document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open-wardrobe');
  const wardrobeMenu = document.querySelector('.wardrobe-menu');
  const wardrobeDetail = document.querySelector('.wardrobe-detail');

  openButton.addEventListener('click', function() {
    openButton.classList.add('hidden');
    wardrobeMenu.classList.remove('hidden');
    wardrobeDetail.classList.remove('hidden');
    
    // Ouvre automatiquement la catégorie "cheveux" via les boutons du haut
    const hairButton = document.querySelector('.wardrobe-category:first-child');
    if (hairButton) hairButton.click();
  });
});

// Liste des couches à créer
const layers = ['shoes', 'dress', 'hair', 'accessory'];

layers.forEach(layerName => {
  const img = document.createElement('img');
  img.classList.add('layer', layerName);
  img.alt = layerName;
  modelContainer.appendChild(img);
});

// Variable pour suivre la catégorie active
let activeCategory = null;

// Dictionnaire des vêtements par catégorie
const wardrobeItems = {
  cheveux: [
     {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(1)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(1).webp"
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(2)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(2).webp"
    }, {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(3)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(3).webp"
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(4)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_hair%20(4).webp"
    }
  ],
  robe: [
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(1)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(1).webp",
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(2)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(2).webp",
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(3)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(3).webp",
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(4)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_dress%20(4).webp",
    }
    
  ],
    chaussures: [
     {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(1)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(1).webp"
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(2)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(2).webp"
    }, {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(3)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(3).webp"
    },
    {
      preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(4)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_shoes%20(4).webp"
    }
  ],
    accessoire: [
     {
      preview: "https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/princess_accesoire%20(1)preview.png?raw=true",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_accesoire%20(1).webp"
    },
    {
     preview: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_accesoire%20(2)preview.webp",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_accesoire%20(2).webp",
    },
       {
      preview: "https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/princess_accesoire%20(3)preview.png?raw=true",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_accesoire%20(3).webp"
    },
    {
      preview: "https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/princess_accesoire%20(4)preview.png?raw=true",
      layer: "https://raw.githubusercontent.com/GityLou/ASSETS-Divers---projets-code-/refs/heads/main/DressingRoomPrincess/princess_accesoire%20(4).webp"
    }
  ],
};


// Map des noms de catégories vers les classes de layer
const categoryMap = {
  cheveux: 'hair',
  robe: 'dress',
  chaussures: 'shoes',
  accessoire: 'accessory'
};

// Ouvrir une catégorie
categories.forEach(cat => {
  cat.addEventListener('click', () => {
     // Retire la classe active de tous les boutons
    categories.forEach(btn => btn.classList.remove('active'));
        // Ajoute la classe active au bouton cliqué
    cat.classList.add('active');

    activeCategory = cat.textContent.trim().toLowerCase();
    detailView.classList.remove('hidden');

    // Nettoyer et remplir l'itemGrid
    updateItemGrid(activeCategory);
  });
});

// Fonction pour mettre à jour les items
function updateItemGrid(category) {
  const itemGrid = document.querySelector('.item-grid');
  itemGrid.innerHTML = "";

  wardrobeItems[category].forEach(item => {
    const img = document.createElement("img");
    img.src = item.preview;
    img.alt = "Item " + category;
    img.classList.add("preview-item");

    img.addEventListener("click", () => {
      const layer = document.querySelector(`.${categoryMap[category]}`);
      
      if (layer.src === item.layer) {
        layer.src = "";
        img.classList.remove("selected");
      } else {
        layer.src = item.layer;
        // Gestion spéciale pour les accessoires
        if (category === 'accessoire') {
          layer.className = 'layer accessory'; // Reset
          if (item.special) {
            layer.classList.add('special');
          }
        }
        document.querySelectorAll(".preview-item").forEach(el => el.classList.remove("selected"));
        img.classList.add("selected");
      }
    });

    itemGrid.appendChild(img);
  });
}

// Dans l'ouverture initiale, déclenche le vrai click
document.addEventListener('DOMContentLoaded', function() {
  const openButton = document.getElementById('open-wardrobe');
  const wardrobeMenu = document.querySelector('.wardrobe-menu');
  const wardrobeDetail = document.querySelector('.wardrobe-detail');

  openButton.addEventListener('click', function() {
    openButton.classList.add('hidden');
    wardrobeMenu.classList.remove('hidden');
    wardrobeDetail.classList.remove('hidden');
    
    // Simule un vrai click sur le bouton cheveux
    const hairButton = document.querySelector('.wardrobe-category:first-child');
    if (hairButton) {
      hairButton.click();
    }
  });
})
  


// naviguer entre les menus, une fois a l'intérieur d'un catégorie
const navButtons = document.querySelectorAll('.category-nav button');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    activeCategory = btn.dataset.category;
    itemGrid.innerHTML = "";

    wardrobeItems[activeCategory].forEach(item => {
      const img = document.createElement("img");
      img.src = item.preview;
      img.classList.add("preview-item");

      img.addEventListener("click", () => {
       const layer = document.querySelector('.layer.accessory');
       layer.src = item.layer;
        
        // Reset puis ajoute la classe si c'est l'item spécial
  layer.className = 'layer accessory'; // Réinitialise
  if (item.isSpecial) { // Ou item.id === 'special' selon ta structure
    layer.classList.add('special');
  }

        if (layer.src === item.layer) {
          layer.src = "";
          img.classList.remove("selected");
        } else {
          layer.src = item.layer;
          document.querySelectorAll(".preview-item").forEach(el => el.classList.remove("selected"));
          img.classList.add("selected");
        }
      });

      itemGrid.appendChild(img);
    });
  });
});


// reset button 

const resetButton = document.querySelector('.action-buttons button:nth-child(1)');

resetButton.addEventListener('click', () => {
  document.querySelectorAll('.model-container .layer:not(.base)').forEach(layer => {
    layer.src = "";
  });
});


//video cinematique 
function playTransitionToBall() {
  const video = document.getElementById('transition-video');

  // Cache toutes les scènes
  document.querySelectorAll('.scene').forEach(scene => scene.classList.add('hidden'));

  // Affiche la vidéo
  video.classList.remove('hidden');
  video.currentTime = 0;
  video.play();

  // Après 5 secondes, cache la vidéo et montre la scène du bal
  setTimeout(() => {
    video.classList.add('hidden');
    document.getElementById('ball-scene').classList.remove('hidden');
  }, 5000);
}



// 🎭👑 aller au bal 
const goBallButton = document.getElementById("go-ball-button");
const appContainer = document.querySelector(".app-container");
const preBallScene = document.querySelector(".pre-ball-scene");
const wardrobeScene = document.querySelector(".wardrobe-zone");

goBallButton.addEventListener("click", () => {
   transitionScenes(appContainer, preBallScene, () => {
  appContainer.classList.add("hidden");       // cache le dressing
  preBallScene.classList.remove("hidden");    // affiche la scène pré-bal
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/86/64/57/8664572b5919ad76889ff563e9a667b1.jpg')"; // change le fond
      });
    });

const backToWardrobe = document.getElementById("back-to-wardrobe");

backToWardrobe.addEventListener("click", () => {
  transitionScenes(preBallScene, appContainer, () => {
  preBallScene.classList.add("hidden");         // cache la scène pré-bal
  appContainer.classList.remove("hidden");      // réaffiche le dressing
  document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/e4/c6/68/e4c6684222b4f0e5d0b4f2b4dad30707.jpg')"; // remet le bon fond
      });
    });

const goFinalBall = document.getElementById("go-final-ball");
const finalBallScene = document.querySelector(".final-ball-scene");


goFinalBall.addEventListener("click", () => {
  transitionScenes(preBallScene, finalBallScene, () => {
 
  document.body.style.backgroundImage = "url('https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/BG-finalscene%201.png?raw=true')";

  const finalLayers = {
    hair: document.querySelector(".final-ball-scene .layer.hair"),
    dress: document.querySelector(".final-ball-scene .layer.dress"),
    shoes: document.querySelector(".final-ball-scene .layer.shoes"),
    accessory: document.querySelector(".final-ball-scene .layer.accessory")
  };

  const currentLayers = {
    hair: document.querySelector(".app-container .layer.hair"),
    dress: document.querySelector(".app-container .layer.dress"),
    shoes: document.querySelector(".app-container .layer.shoes"),
    accessory: document.querySelector(".app-container .layer.accessory")
  };

  for (let key in finalLayers) {
    if (currentLayers[key] && currentLayers[key].src) {
      finalLayers[key].src = currentLayers[key].src; 
    } else {
      finalLayers[key].src = ""; 
    }
  }
        createGlitters();
});
  
  
const nextBg = document.querySelector(".next-bg");
const prevBg = document.querySelector(".prev-bg");


const backgrounds = [
  "url('https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/BG-finalscene%202.png?raw=true')",
  "url('https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/BG-finalscene%203.png?raw=true')",
  "url('https://github.com/GityLou/ASSETS-Divers---projets-code-/blob/main/DressingRoomPrincess/BG-finalscene%204.png?raw=true')",
];

  // Préchargement des images
backgrounds.forEach(bg => {
  const img = new Image();
  img.src = bg.match(/url\('(.*?)'\)/)[1]; 
});
  
let currentBg = 0;
let bgTransition = document.createElement('div');
bgTransition.className = 'bg-transition-layer';
document.querySelector('.final-ball-scene').appendChild(bgTransition);
function updateBackground() {
   const finalScene = document.querySelector('.final-ball-scene');
  const currentBgLayer = finalScene.style.backgroundImage;
  const nextBg = backgrounds[currentBg];
  
  // 1. Configure la nouvelle couche
  bgTransition.style.backgroundImage = nextBg;
  bgTransition.style.opacity = '0';
  
  // 2. Transition
  setTimeout(() => {
    bgTransition.style.opacity = '1';
    
    // 3. Quand la transition est finie
    setTimeout(() => {
      finalScene.style.backgroundImage = nextBg;
      bgTransition.style.opacity = '0';
    }, 500);
  }, 10);
}

nextBg.addEventListener("click", () => {
  currentBg = (currentBg + 1) % backgrounds.length;
  updateBackground();
});

prevBg.addEventListener("click", () => {
  currentBg = (currentBg - 1 + backgrounds.length) % backgrounds.length;
  updateBackground();
});

//animation de paillettes
function createGlitters() {
  const glittersContainer = document.querySelector('.glitters');
  if (!glittersContainer) return;
  
  glittersContainer.innerHTML = '';
  const count = window.innerWidth < 600 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const glitter = document.createElement('div');
    glitter.className = 'glitter';
    
    // Style de base
    glitter.style.cssText = `
      position: absolute;
      width: ${Math.random() * 8 + 4}px;
      height: ${Math.random() * 8 + 4}px;
      background: #fff;
      border-radius: 50%;
      opacity: ${Math.random() * 0.7 + 0.3};
      filter: drop-shadow(0 0 2px #ffcce6);
      left: ${Math.random() * 100}%;
      top: ${Math.random() * -20}vh;
      animation: glitter-fall ${Math.random() * 5 + 3}s linear infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    
    glittersContainer.appendChild(glitter);
  }
}


// Quand on arrive à la scène finale
goFinalBall.addEventListener("click", () => {
  preBallScene.classList.add("hidden");
  finalBallScene.classList.remove("hidden");
  createGlitters(); 
    });
  });

document.querySelector('.restart-game').addEventListener('click', () => {
  transitionScenes(finalBallScene, homeContainer, () => {
  // 1. Cache TOUTES les scènes d'abord
  document.querySelectorAll('.scene').forEach(scene => {
    scene.classList.add('hidden');
  });
  
  // 2. Réinitialise les éléments visuels de la scène finale
  const finalLayers = document.querySelectorAll('.final-ball-scene .layer:not(.base)');
  finalLayers.forEach(layer => {
    layer.src = '';
  });
  
  // 3. Réinitialise les variables
  currentStep = 0;
  currentBg = 0;
  
  // 4. Remet le texte initial
  if (dialogues.length > 0) {
    dialogueText.textContent = dialogues[0].text;
    minaImg.src = dialogues[0].img;
  }
  
  // 5. Réinitialise le bouton suivant
  nextButton.textContent = "➤";
  
  // 6. Affiche seulement l'écran d'accueil
  homeContainer.classList.remove('hidden');
  
  // 7. Réinitialise le fond d'écran
  document.body.style.backgroundImage = "url('https://github.com/GityLou/Overlays/blob/main/papier_a_carreaux_cute.jpg?raw=true')";
  
  // 8. Scroll vers le haut
  window.scrollTo(0, 0);
    
    // 9. Réinitialise les couches du modèle dans le dressing
document.querySelectorAll('.app-container .layer:not(.base)').forEach(layer => {
  layer.src = '';
});

// 10. Supprime les sélections visuelles dans la grille
document.querySelectorAll('.preview-item.selected').forEach(item => {
  item.classList.remove('selected');
});

// 11. Cache les menus de garde-robe si besoin
document.querySelector('.wardrobe-menu').classList.add('hidden');
document.querySelector('.wardrobe-detail').classList.add('hidden');
document.getElementById('open-wardrobe').classList.remove('hidden');

      });
    });


//fond au blanc entre les scenes 
function transitionScenes(currentScene, nextScene, callback) {
 const overlay = document.createElement('div');
  overlay.className = 'fade-overlay';
  document.body.appendChild(overlay);
  
  // Passage immédiat au blanc
  overlay.style.transition = 'none';
  overlay.style.opacity = '1';
  
  setTimeout(() => {
    // Échange des scènes
    currentScene.classList.add('hidden');
    nextScene.classList.remove('hidden');
    
    // Réapparition douce
    overlay.style.transition = 'opacity 1s ease-out';
    overlay.style.opacity = '0';
    
    setTimeout(() => overlay.remove(), 1000);
    if (callback) callback();
  }, 10);
}