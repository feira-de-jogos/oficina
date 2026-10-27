import { Scene } from "phaser";

export class GameOver extends Scene {
  constructor() {
    super("GameOver");
  }

  create(data) {
    /*
    this.add
      .image(this.scale.width / 2, this.scale.height / 2, "gameover")
      .setAlpha(0.5);

    const text = data.message || "Game Over";
    const cards = data.cards || [];

    this.add
      .text(this.scale.width / 2, this.scale.height / 2, text, {
        fontFamily: "exo-2",
        fontSize: "36px",
        color: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    if (cards.length) {
      const centerX = this.scale.width / 2;
      const centerY = this.scale.height / 2 + 120;
      const cardWidth = 150;
      const cardHeight = 190;
      const spacing = 110;
      let current = 0;

      const cardViews = cards.map((card) => {
        const view = this.add.container(centerX, centerY);
        view.add(
          this.add
            .rectangle(0, 0, cardWidth, cardHeight, 0x243047)
            .setStrokeStyle(2, 0xffffff),
        );

        const imageKey =
          card && typeof card === "object" && (card.image || card.texture);
        const title =
          typeof card === "string"
            ? card
            : (card && (card.name || card.title || card.label)) ||
              "Collected Card";

        if (imageKey && this.textures.exists(imageKey)) {
          const image = this.add.image(0, -25, imageKey);
          image.setDisplaySize(110, 110);
          view.add(image);
        }

        view.add(
          this.add
            .text(0, 65, String(title), {
              fontFamily: "exo-2",
              fontSize: "16px",
              color: "#ffffff",
              align: "center",
              wordWrap: { width: cardWidth - 20 },
            })
            .setOrigin(0.5),
        );
        return view;
      });

      const arrangeCards = (animate = false) => {
        cardViews.forEach((view, index) => {
          const offset =
            ((((index - current + cards.length / 2) % cards.length) +
              cards.length) %
              cards.length) -
            cards.length / 2;
          const isVisible = Math.abs(offset) <= 2;
          const position = {
            x: centerX + offset * spacing,
            y: centerY + Math.abs(offset) * 12,
            scale: offset === 0 ? 1 : 0.78,
            alpha: isVisible ? 1 : 0,
          };

          if (animate) {
            this.tweens.add({
              targets: view,
              ...position,
              duration: 450,
              ease: "Cubic.easeInOut",
            });
          } else {
            view.setPosition(position.x, position.y);
            view.setScale(position.scale);
            view.setAlpha(position.alpha);
          }
        });
      };

      arrangeCards();
      if (cards.length > 1) {
        this.time.addEvent({
          delay: 2200,
          loop: true,
          callback: () => {
            current = (current + 1) % cards.length;
            arrangeCards(true);
          },
        });
      }
    }

    this.input.on("pointerdown", () => {
      this.scene.start("MainMenu");
    });
    */
  }
}
