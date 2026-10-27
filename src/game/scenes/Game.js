import { Scene, Utils } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");

    this.steps = {
      0: {
        y: 3000,
        detune: 0,
        volume: 0.25,
        rate: 1.0,
        ambientColor: 0xffffff,
        sentences: ["Estou aqui para ajudar.", "Conta comigo."],
      },
      1: {
        y: 1500,
        detune: 0,
        volume: 0.5,
        rate: 1.0,
        ambientColor: 0xaaaaaa,
        sentences: ["Não seria melhor tentar outro dia?", "Está bem hoje?"],
      },
      2: {
        y: 0,
        detune: 0,
        volume: 0.75,
        rate: 1.0,
        ambientColor: 0x888888,
        sentences: [
          "Vocês não tem a competência necessária. Pare!",
          "Vá ler um livro!",
        ],
      },
      3: {
        y: -350,
        detune: -1200,
        volume: 1.0,
        rate: 0.5,
        ambientColor: 0x111111,
        sentences: ["Quem você pensa que é?", "Chama o teu superior. Já!"],
      },
    };
  }

  create() {
    /*
    this.currentStep = 0;
    this.speed = 200;
    this.playerCards = [];
    this.playerCardsCount = 0;
    */
    
    /*
    this.music = this.sound.add("music");
    this.music.play({ loop: true, volume: 0.25 });
    */
    
    /*
    this.coin1 = this.sound.add("coin-1");
    this.coin2 = this.sound.add("coin-2");
    this.coin3 = this.sound.add("coin-3");
    */
    
    /*
    this.keys = this.input.keyboard.addKeys({
      up: "W",
      down: "S",
      left: "A",
      right: "D",
    });
    */

    /*
    this.lights.enable().setAmbientColor(0xffffff);
    */
    
    /*
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
    */

    /*
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
    */

    /*
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
    */
    
    /*
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
    */
    
    /*
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
    */
    
    /*
    this.cameras.main.startFollow(this.player);
    */
    
    /*
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
    */
    
    /*
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
    */
    
    /*
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
    */
    
    /*
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
    */

    /*
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
    */

    /*
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
    */

    /*
    this.doors = this.physics.add.staticGroup();
    const doorPositions = [
      { x: 960, y: 1640 },
      { x: 608, y: 584 },
      { x: 1088, y: 166 },
      { x: 512, y: -632 },
      { x: -192, y: 1448 },
      { x: -252, y: 936 },
      { x: -450, y: 232 },
      { x: -286, y: -376 },
    ];
    doorPositions.forEach((pos) => {
      let sprite = this.physics.add.sprite(pos.x, pos.y, "door", 0);
      this.doors.add(sprite);

      const collider = this.physics.add.collider(
        this.player,
        sprite,
        (player, sprite) => {
          if (this.playerCardsCount >= 1) {
            sprite.setFrame(1);
            this.playerCardsCount--;
            this.physics.world.removeCollider(collider);
          }
        },
      );
    });
    */

    /*
    this.batteries = this.physics.add.group();
    const batteryPositions = [
      { x: 318, y: 192, name: "Lélia Gonzalez" },
      { x: 28, y: 822, name: "Niède Guidon" },
      { x: 80, y: 2582, name: "Sueli Carneiro" },
    ];
    batteryPositions.forEach((pos) => {
      let sprite = this.physics.add.sprite(pos.x, pos.y, "battery");
      sprite.name = pos.name;
      this.batteries.add(sprite);
    });
    this.physics.add.overlap(this.player, this.batteries, (player, battery) => {
      if (battery.visible) {
        this.coin1.play();
        battery.setVisible(false);
        this.playerCards.push(battery.name);
        this.playerCardsCount++;
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.hummanitiesBar.width < 100) this.hummanitiesBar.width += 50;
        else this.hummanitiesBar.width = 150;
      }
    });
    */

    /*
    this.pills = this.physics.add.group();
    const pillPositions = [
      { x: 834, y: -336, name: "Mayana Zatz" },
      { x: -639, y: 1163, name: "Celina Turchi" },
      { x: 1012, y: 1344, name: "Jaqueline Goes de Jesus" },
    ];
    pillPositions.forEach((pos) => {
      let sprite = this.physics.add.sprite(pos.x, pos.y, "pill");
      sprite.name = pos.name;
      this.pills.add(sprite);
    });
    this.physics.add.overlap(this.player, this.pills, (player, pill) => {
      if (pill.visible) {
        this.coin2.play();
        pill.setVisible(false);
        this.playerCards.push(pill.name);
        this.playerCardsCount++;
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.healthBar.width < 100) this.healthBar.width += 50;
        else this.healthBar.width = 150;
      }
    });
    */

    /*
    this.chips = this.physics.add.group();
    const chipPositions = [
      { x: 334, y: 1775, name: "Sonia Guimarães" },
      { x: 786, y: -559, name: "Marcia Barbosa" },
      { x: 915, y: 528, name: "Thaisa Storchi Bergmann" },
    ];
    chipPositions.forEach((pos) => {
      let sprite = this.physics.add.sprite(pos.x, pos.y, "chip");
      sprite.name = pos.name;
      this.chips.add(sprite);
    });
    this.physics.add.overlap(this.player, this.chips, (player, chip) => {
      if (chip.visible) {
        this.coin3.play();
        chip.setVisible(false);
        this.playerCards.push(chip.name);
        this.playerCardsCount++;
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.1);
        if (this.exactBar.width < 100) this.exactBar.width += 50;
        else this.exactBar.width = 150;
      }
    });
    */

    /*
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
    */

    /*
    this.hummanities = this.add
      .rectangle(25, 25, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.hummanitiesBar = this.add
      .rectangle(25, 25, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.hummanitiesText = this.add
      .text(180, 25, "Humanas", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.health = this.add
      .rectangle(25, 60, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.healthBar = this.add
      .rectangle(25, 60, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.healthText = this.add
      .text(180, 60, "Saúde", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.exact = this.add
      .rectangle(25, 95, 150, 24)
      .setOrigin(0, 0)
      .setStrokeStyle(2, 0xffffff)
      .setScrollFactor(0);

    this.exactBar = this.add
      .rectangle(25, 95, 150, 24, 0xffffff)
      .setOrigin(0, 0)
      .setScrollFactor(0);

    this.exactText = this.add
      .text(180, 95, "Exatas", {
        fontFamily: "exo-2",
        fontSize: "24px",
        color: "#ffffff",
      })
      .setOrigin(0, 0)
      .setScrollFactor(0);
    */
    
    /*
    this.time.addEvent({
      delay: 1000,
      callback: () => {
        this.hummanitiesBar.width -= 1;
        if (this.hummanitiesBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Fim das Ciências Humanas!",
          });
        }

        this.healthBar.width -= 1;
        if (this.healthBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Fim das Ciências da Saúde!",
          });
        }

        this.exactBar.width -= 1;
        if (this.exactBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver", {
            message: "Fim das Ciências Exatas!",
          });
        }
      },
      loop: true,
    });
    */
    
    /*
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
        const list = this.steps[this.currentStep].sentences;
        this.sentenceText.setText(Utils.Array.GetRandom(list));
        this.time.delayedCall(2000, () => this.sentenceText.setText(""));
        scheduleSentence();
      });
    };
    scheduleSentence();
    */

    /*
    this.layerGroundWall.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, this.layerGroundWall);

    this.layerWalls.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, this.layerWalls);

    this.layerProps2.setCollisionByProperty({ collides: true });
    this.physics.add.collider(this.player, this.layerProps2);
    */
  }

  update() {
    /*
    let animation = "idle";

    if (this.keys.up.isDown) {
      this.player.setVelocityY(-this.speed);
      animation = "walking-up";
    } else if (this.keys.down.isDown) {
      this.player.setVelocityY(this.speed);
      animation = "walking-down";
    } else {
      this.player.setVelocityY(0);
    }

    if (this.keys.left.isDown) {
      this.player.setVelocityX(-this.speed);
      animation = "walking-left";
    } else if (this.keys.right.isDown) {
      this.player.setVelocityX(this.speed);
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
    */

    /*
    this.ending = this.physics.add.sprite(80, -800, "void").setOrigin(0.5, 0.5);
    this.physics.add.collider(this.player, this.ending, (player, ending) => {
      console.log(this.playerCards);
      this.music.stop();
      this.scene.start("GameOver", {
        message: "Parabéns!\nVocê completou o jogo!",
        cards: this.playerCards,
      });
    });

    if (this.player.y < this.steps[3].y) {
      this.currentStep = 3;
    } else if (this.player.y < this.steps[2].y) {
      this.currentStep = 2;
    } else if (this.player.y < this.steps[1].y) {
      this.currentStep = 1;
    } else {
      this.currentStep = 0;
    }

    this.music.setVolume(this.steps[this.currentStep].volume);
    this.music.setDetune(this.steps[this.currentStep].detune);
    this.music.setRate(this.steps[this.currentStep].rate);
    this.lights.setAmbientColor(this.steps[this.currentStep].ambientColor);
    */
  }
}
