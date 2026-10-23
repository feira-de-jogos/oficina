import { Scene, Utils } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.music = this.sound.add("music");
    this.music.play({ loop: true, volume: 0.25 });

    this.coin1 = this.sound.add("coin-1");
    this.coin2 = this.sound.add("coin-2");
    this.coin3 = this.sound.add("coin-3");

    this.keys = this.input.keyboard.addKeys({
      up: "W",
      down: "S",
      left: "A",
      right: "D",
    });

    this.lights.enable().setAmbientColor(0xffffff);

    this.tilemap = this.make.tilemap({ key: "map" });

    this.tilesetPlant = this.tilemap.addTilesetImage("plant");
    this.tilesetProps = this.tilemap.addTilesetImage("props");
    this.tilesetShadowPlant = this.tilemap.addTilesetImage("shadow-plant");
    this.tilesetShadow = this.tilemap.addTilesetImage("shadow");
    this.tilesetStruct = this.tilemap.addTilesetImage("struct");
    this.tilesetGrass = this.tilemap.addTilesetImage("grass");
    this.tilesetStoneGround = this.tilemap.addTilesetImage("stone-ground");
    this.tilesetWall = this.tilemap.addTilesetImage("wall");
    this.tilesetAssetsAll = this.tilemap.addTilesetImage("assets-all");
    this.tilesetStones = this.tilemap.addTilesetImage("stones");
    this.tilesetGraveyard = this.tilemap.addTilesetImage("graveyard");

    this.layerGrassGround = this.tilemap
      .createLayer("grass-ground", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerGroundWall = this.tilemap
      .createLayer("ground-wall", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerRoofUnderPlayer = this.tilemap
      .createLayer("roof-under-player", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.player = this.physics.add
      .sprite(250, 3000, "player", 78)
      .setLighting(true);
    this.player.setSize(24, 48).setOffset(20, 16);

    this.playerBacklight = this.lights
      .addLight(this.player.x, this.player.y, 150)
      .setColor(0xffffff)
      .setIntensity(1);

    this.playerText = this.add.text(this.player.x, this.player.y - 48, "X, Y", {
      fontFamily: "exo-2",
      fontSize: "12px",
      color: "#ffffff",
    });
    this.playerText.setOrigin(0.5, 0);

    this.cameras.main.startFollow(this.player);

    this.layerRoofAbovePlayer = this.tilemap
      .createLayer("roof-above-player", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerWalls = this.tilemap
      .createLayer("walls", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerPlants2 = this.tilemap
      .createLayer("plants-2", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerProps1 = this.tilemap
      .createLayer("props-1", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerProps2 = this.tilemap
      .createLayer("props-2", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.layerPlants = this.tilemap
      .createLayer("plants", [
        this.tilesetPlant,
        this.tilesetProps,
        this.tilesetShadowPlant,
        this.tilesetShadow,
        this.tilesetStruct,
        this.tilesetGrass,
        this.tilesetStoneGround,
        this.tilesetWall,
        this.tilesetAssetsAll,
        this.tilesetStones,
        this.tilesetGraveyard,
      ])
      .setLighting(true);

    this.sentences = {
      0: ["Estou aqui para ajudar.", "Conta comigo."],
      1: ["Não seria melhor tentar outro dia?", "Está bem hoje?"],
      2: ["Vocês não tem a competência necessária. Pare!", "Vá ler um livro!"],
      3: ["Quem você pensa que é?", "Chama o teu superior. Já!"],
    };
    this.currentSentence = 0;

    this.batteries = this.physics.add.group();
    this.physics.add.overlap(this.player, this.batteries, (player, battery) => {
      if (battery.visible) {
        this.coin1.play();
        battery.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.lifeBar.width < 100) this.lifeBar.width += 50;
        else this.lifeBar.width = 150;
      }
    });

    this.pills = this.physics.add.group();
    this.physics.add.overlap(this.player, this.pills, (player, pill) => {
      if (pill.visible) {
        this.coin2.play();
        pill.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.mathBar.width < 100) this.mathBar.width += 50;
        else this.mathBar.width = 150;
      }
    });

    this.chips = this.physics.add.group();
    this.physics.add.overlap(this.player, this.chips, (player, chip) => {
      if (chip.visible) {
        this.coin3.play();
        chip.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.scienceBar.width < 100) this.scienceBar.width += 50;
        else this.scienceBar.width = 150;
      }
    });

    const batteryPositions = [
      { x: 100, y: 2900 },
      { x: 100, y: 1800 },
      { x: 100, y: 900 },
    ];
    batteryPositions.forEach((pos) => {
      this.batteries.add(this.physics.add.sprite(pos.x, pos.y, "battery"));
    });

    const pillPositions = [
      { x: 100, y: 2700 },
      { x: 100, y: 2000 },
      { x: 100, y: 1500 },
    ];
    pillPositions.forEach((pos) => {
      this.pills.add(this.physics.add.sprite(pos.x, pos.y, "pill"));
    });

    const chipPositions = [
      { x: 100, y: 2500 },
      { x: 100, y: 2200 },
      { x: 100, y: 2100 },
    ];
    chipPositions.forEach((pos) => {
      this.chips.add(this.physics.add.sprite(pos.x, pos.y, "chip"));
    });

    this.anims.create({
      key: "player-idle",
      frames: this.anims.generateFrameNumbers("player", {
        start: 78,
        end: 78,
      }),
      frameRate: 1,
    });

    this.anims.create({
      key: "player-walking-up",
      frames: this.anims.generateFrameNumbers("player", {
        start: 60,
        end: 68,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "player-walking-left",
      frames: this.anims.generateFrameNumbers("player", {
        start: 69,
        end: 77,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "player-walking-down",
      frames: this.anims.generateFrameNumbers("player", {
        start: 78,
        end: 86,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.anims.create({
      key: "player-walking-right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 87,
        end: 95,
      }),
      frameRate: 12,
      repeat: -1,
    });

    this.life = this.add
      .rectangle(25, 25, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.lifeBar = this.add
      .rectangle(25, 25, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.lifeText = this.add
      .text(180, 25, "Vida", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.math = this.add
      .rectangle(25, 60, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.mathBar = this.add
      .rectangle(25, 60, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.mathText = this.add
      .text(180, 60, "Matemática", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.science = this.add
      .rectangle(25, 95, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.scienceBar = this.add
      .rectangle(25, 95, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.scienceText = this.add
      .text(180, 95, "Ciência", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.lifeBar.width -= 1;
        if (this.lifeBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Você morreu! Sua vida acabou!",
          });
        }

        this.mathBar.width -= 1;
        if (this.mathBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Você morreu! Sua matemática acabou!",
          });
        }

        this.scienceBar.width -= 1;
        if (this.scienceBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Você morreu! Sua ciência acabou!",
          });
        }
      },
      loop: true,
    });

    this.sentenceText = this.add
      .text(this.scale.width / 2, this.scale.height - 60, "", {
        fontFamily: "exo-2",
        fontSize: "28px",
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 4,
        align: "center",
      })
      .setOrigin(0.5, 0.5)
      .setScrollFactor(0)
      .setDepth(100);

    const scheduleSentence = () => {
      this.time.delayedCall(Math.random() * 2000 + 3000, () => {
        const list = this.sentences[this.currentSentence];
        this.sentenceText.setText(Utils.Array.GetRandom(list));
        this.time.delayedCall(2000, () => this.sentenceText.setText(""));
        scheduleSentence();
      });
    };
    scheduleSentence();
  }

  update() {
    let animation = "idle";

    if (this.keys.up.isDown) {
      this.player.setVelocityY(-200);
      animation = "walking-up";
    } else if (this.keys.down.isDown) {
      this.player.setVelocityY(200);
      animation = "walking-down";
    } else {
      this.player.setVelocityY(0);
    }

    if (this.keys.left.isDown) {
      this.player.setVelocityX(-200);
      animation = "walking-left";
    } else if (this.keys.right.isDown) {
      this.player.setVelocityX(200);
      animation = "walking-right";
    } else {
      this.player.setVelocityX(0);
    }

    this.player.anims.play("player-" + animation, true);

    this.playerText.setText(
      `x: ${Math.round(this.player.x)}, y: ${Math.round(this.player.y)}`,
    );
    this.playerText.setPosition(this.player.x, this.player.y - 48);
    this.playerBacklight.setPosition(this.player.x, this.player.y);

    this.ending = this.physics.add.sprite(80, -800, "void").setOrigin(0.5, 0.5);
    this.physics.add.overlap(this.player, this.ending, (player, ending) => {
      this.music.stop();
      this.scene.start("GameOver", {
        message: "Parabéns!\nVocê completou o jogo!",
      });
    });

    if (this.player.y < -350) {
      this.currentSentence = 3;
      this.music.setVolume(1.0);
      this.music.setDetune(-1200);
      this.music.setRate(0.5);
      this.lights.setAmbientColor(0x111111);
    } else if (this.player.y < 0) {
      this.currentSentence = 2;
      this.music.setVolume(0.75);
      this.lights.setAmbientColor(0x666666);
    } else if (this.player.y < 1500) {
      this.currentSentence = 1;
      this.music.setVolume(0.5);
      this.lights.setAmbientColor(0xaaaaaa);
    } else {
      this.currentSentence = 0;
      this.music.setVolume(0.25);
      this.lights.setAmbientColor(0xffffff);
    }
  }
}
