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

    this.load.audio("coin-1", "coin-1.mp3");
    this.load.audio("coin-2", "coin-2.mp3");
    this.load.audio("coin-3", "coin-3.mp3");
    this.load.audio("music", "music.mp3");

    this.load.tilemapTiledJSON("map", "map/map.json");
    this.load.image("plant", "map/plant.png");
    this.load.image("props", "map/props.png");
    this.load.image("shadow-plant", "map/shadow-plant.png");
    this.load.image("shadow", "map/shadow.png");
    this.load.image("struct", "map/struct.png");
    this.load.image("grass", "map/grass.png");
    this.load.image("stone-ground", "map/stone-ground.png");
    this.load.image("wall", "map/wall.png");
    this.load.image("assets-all", "map/assets-all.png");
    this.load.image("stones", "map/stones.png");
    this.load.image("graveyard", "map/graveyard.png");

    this.load.image("battery", "battery.png");
    this.load.image("pill", "pill.png");
    this.load.image("chip", "chip.png");
    this.load.image("void", "void.png");

    this.load.spritesheet("player", "player.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.scene.start("MainMenu");
  }
}
