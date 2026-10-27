import { Scene, Scale } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    /*
    this.load.image("boot", "assets/boot.png");
    */
  }

  create() {
    /*
    this.add
      .image(
        this.game.config.width / 2,
        this.game.config.height / 2,
        "boot",
      )
      .setInteractive()
      .once("pointerup", () => {
        if (this.scale.fullscreen && this.scale.fullscreen.available) {
          this.scale.startFullscreen();
        }
        this.scene.start("Preloader");
      });
    */
  }
}
