import { Scene } from "phaser";

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

    this.cursors = this.input.keyboard.createCursorKeys();

    this.lights.enable().setAmbientColor(0xffffff);

    this.player = this.physics.add
      .sprite(this.scale.width / 2, this.scale.height / 2, "player", 78)
      .setLighting(true);

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

    this.batteries = this.physics.add.group();
    this.physics.add.overlap(this.player, this.batteries, (player, battery) => {
      if (battery.visible) {
        this.coin1.play();
        battery.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.5);
        if (this.lifeBar.width < 100) this.lifeBar.width += 50;
        else this.lifeBar.width = 150;
      }
    });

    this.pills = this.physics.add.group();
    this.physics.add.overlap(this.player, this.pills, (player, pill) => {
      if (pill.visible) {
        this.coin2.play();
        pill.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.5);
        if (this.mathBar.width < 100) this.mathBar.width += 50;
        else this.mathBar.width = 150;
      }
    });

    this.chips = this.physics.add.group();
    this.physics.add.overlap(this.player, this.chips, (player, chip) => {
      if (chip.visible) {
        this.coin3.play();
        chip.setVisible(false);
        this.playerBacklight.setIntensity(this.playerBacklight.intensity + 0.5);
        if (this.scienceBar.width < 100) this.scienceBar.width += 50;
        else this.scienceBar.width = 150;
      }
    });

    this.batteries.add(
      this.physics.add.sprite(
        this.scale.width / 2 - 100,
        this.scale.height / 2,
        "battery",
      ),
    );

    this.pills.add(
      this.physics.add.sprite(
        this.scale.width / 2 - 200,
        this.scale.height / 2,
        "pill",
      ),
    );

    this.chips.add(
      this.physics.add.sprite(
        this.scale.width / 2 - 300,
        this.scale.height / 2,
        "chip",
      ),
    );

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
        this.lifeBar.width -= 5;
        if (this.lifeBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver");
        }

        this.mathBar.width -= 5;
        if (this.mathBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver");
        }

        this.scienceBar.width -= 5;
        if (this.scienceBar.width <= 0) {
          this.music.stop();
          this.scene.start("GameOver");
        }
      },
      loop: true,
    });
  }

  update() {
    let animation = "idle";

    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-200);
      animation = "walking-up";
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(200);
      animation = "walking-down";
    } else {
      this.player.setVelocityY(0);
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      animation = "walking-left";
    } else if (this.cursors.right.isDown) {
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

    if (this.player.y < -200) {
      this.music.setVolume(1);
      this.music.setDetune(-1200);
      this.music.setRate(0.5);
      this.lights.setAmbientColor(0x111111);
    } else if (this.player.y < -100) {
      this.music.setVolume(0.75);
      this.lights.setAmbientColor(0x666666);
    } else if (this.player.y < 0) {
      this.music.setVolume(0.5);
      this.lights.setAmbientColor(0xaaaaaa);
    } else {
      this.music.setVolume(0.25);
      this.lights.setAmbientColor(0xffffff);
    }
  }
}
