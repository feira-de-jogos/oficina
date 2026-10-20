import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      "player",
      78,
    );

    this.cameras.main.startFollow(this.player);

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
          this.scene.start("GameOver");
        }

        this.mathBar.width -= 5;
        if (this.mathBar.width <= 0) {
          this.scene.start("GameOver");
        }

        this.scienceBar.width -= 5;
        if (this.scienceBar.width <= 0) {
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
  }
}
