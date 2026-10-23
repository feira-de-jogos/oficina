import { Boot } from "./scenes/Boot";
import { Game as MainGame } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { MainMenu } from "./scenes/MainMenu";
import { Preloader } from "./scenes/Preloader";
import { AUTO, Game, Scale } from "phaser";

const config = {
  type: AUTO,
  width: 1600,
  height: 900,
  parent: "game-container",
  backgroundColor: "#000000",
  canvasStyle: "display: block; touch-action: none;",
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
    },
  },
  scale: {
    mode: Scale.EXPAND,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [
    // Boot,
    // Preloader,
    // MainMenu,
    // MainGame,
    // GameOver
  ],
};

const StartGame = (parent) => {
  return new Game({ ...config, parent });
};

export default StartGame;
