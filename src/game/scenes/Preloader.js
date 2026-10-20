import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.add.image(this.scale.width / 2, this.scale.height / 2, "background");

    this.add
      .rectangle(this.scale.width / 2, this.scale.height / 2 + 100, 500, 32)
      .setStrokeStyle(2, 0xffffff);
    const bar = this.add.rectangle(
      this.scale.width / 2 - 246,
      this.scale.height / 2 + 100,
      4,
      28,
      0xffffff,
    );

    this.load.on("progress", (progress) => {
      bar.width = 4 + 492 * progress;
    });
  }

  preload() {
    this.load.setPath("assets");
    this.load.font("exo-2", "exo-2.ttf");
    this.load.spritesheet("player", "player.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.scene.start("MainMenu");
  }
}
