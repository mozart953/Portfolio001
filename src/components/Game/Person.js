import Character from "../images/character.png"; // Ruta de la imagen

class Person {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.characterPosition = "right";
      this.characterPositions = {
        left: { x: canvas.width / 2 - 160, y: canvas.height - 460 }, // Ajuste para estar por encima de 'land'
        right: { x: canvas.width / 2 + 80, y: canvas.height - 460 }, // Ajuste para estar por encima de 'land'
      };
      this.characterWidth = 75;
      this.characterHeight = 150;
      this.characterImage = new Image();
      this.characterImage.src = Character;
      this.characterImage.onload = () => {
        this.loaded = true;
      };
    }
  
    draw() {
      if (!this.loaded) return; // Solo dibujar cuando la imagen esté cargada
  
      const characterPosition = this.characterPositions[this.characterPosition];
      if (this.characterPosition === "right") {
        this.ctx.save();
        this.ctx.translate(characterPosition.x + this.characterWidth / 2, characterPosition.y + this.characterWidth / 2);
        this.ctx.scale(-1, 1);
        this.ctx.translate(-(characterPosition.x + this.characterWidth / 2), -(characterPosition.y + this.characterWidth / 2));
      }
  
      this.ctx.drawImage(this.characterImage, 0, 0, this.characterImage.width / 6, this.characterImage.height, characterPosition.x, characterPosition.y, this.characterWidth, this.characterHeight);
  
      if (this.characterPosition === "right") this.ctx.restore();
    }
  
    moveLeft() {
      this.characterPosition = "left";
    }
  
    moveRight() {
      this.characterPosition = "right";
    }
  }
  
  export default Person;