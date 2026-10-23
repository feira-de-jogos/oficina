import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create(data) {
    // this.add
    //   .image(this.scale.width / 2, this.scale.height / 2, "background")
    //   .setAlpha(0.5);
    //
    // const text = data.message || "Game Over";
    // this.add
    //   .text(this.scale.width / 2, this.scale.height / 2, text, {
    //     fontFamily: "exo-2",
    //     fontSize: "36px",
    //     color: "#ffffff",
    //     align: "center",
    //   })
    //   .setOrigin(0.5);
    //
    // this.input.on("pointerdown", () => {
    //   this.scene.start("MainMenu");
    // });
  }
}
