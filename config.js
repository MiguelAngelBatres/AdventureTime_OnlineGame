import { Level1 } from './level1.js';
import { Level2 } from './level2.js';
import { PauseScene } from './pause.js';
import { WinScene } from './winmenu.js';
import { LoseScene } from './losemenu.js';

// ...existing code...
const config = {
  type: Phaser.AUTO,
  parent: 'game', // usa un contenedor único en tu HTML <div id="game"></div>
  width: 1600,
  height: 800,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [Level1, Level2, PauseScene, WinScene, LoseScene],
};

function startGame(hero) {
  // Evita múltiples instancias (recargas o doble click)
  if (window.phaserGame && window.phaserGame.isBooted) {
    window.phaserGame.destroy(true);
    window.phaserGame = null;
  }

  const body = document.body;
  body.style.backgroundImage = "url('/assets/bmo_bg.png')";
  body.style.backgroundSize = "contain";
  body.style.backgroundColor = "#1bbbb1";
  body.style.imageRendering = "pixelated";

  // Crea una sola instancia y guárdala globalmente
  window.phaserGame = new Phaser.Game(config);
  window.phaserGame.registry.set("selectedCharacter", hero);
  window.phaserGame.registry.set("level", 1);
  console.log("Game Started");
}
export { startGame }; // Exporta la función para poder ser importada en otro archivo
