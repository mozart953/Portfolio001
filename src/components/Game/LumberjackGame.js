import React, { useRef, useEffect, useState } from "react";
import Tree from "./Tree";
import Person from "./Person";
import Land from "../images/land.png";
import { roundRect, randomNumber } from "./helper";

const LumberjackGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);
  const [person, setPerson] = useState(null);
  const [tree, setTree] = useState(null);
  const [characterPosition, setCharacterPosition] = useState("right");
  const [gameOver, setGameOver] = useState(false);
  const [gameInitialized, setGameInitialized] = useState(false);

  const maxWidth = 600;
  const maxHeight = window.innerHeight - 150;

  // Inicia el juego
  const startGame = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth > maxWidth ? maxWidth : window.innerWidth;
    canvas.height = maxHeight;

    const ctx = canvas.getContext("2d");

    const personInstance = new Person(canvas);
    const treeInstance = new Tree(canvas, canvas.width / 2, canvas.height - 350); // Ajuste del árbol

    setPerson(personInstance);
    setTree(treeInstance);

    treeInstance.init();
    setScore(0);
    setGameOver(false);

    const listener = (e) => {
      if (e.key === "a" || e.key === "ArrowLeft") move("left");
      else if (e.key === "d" || e.key === "ArrowRight") move("right");
    };

    window.addEventListener("keypress", listener);

    return () => {
      window.removeEventListener("keypress", listener);
    };
  };

  // Dibuja el fondo (land)
  const drawBackground = (ctx, canvas) => {
    ctx.fillStyle = "#d3f7ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const land = new Image();
    land.src = Land; // Ruta de la imagen de fondo

    land.onload = () => {
      // Dibujar el fondo (land) en la parte inferior
      ctx.drawImage(land, 0, canvas.height - 300, canvas.width, 350);
    };
  };

  // Dibuja el puntaje
  const drawScore = (ctx) => {
    ctx.fillStyle = "#333";
    ctx.font = "24px Arial";
    ctx.fillText("Score", 30, 30);

    ctx.font = "32px Arial";
    ctx.fillText(score, 30, 70);

    ctx.font = "24px Arial";
    ctx.fillText("Highscore", 30, 120);

    ctx.font = "32px Arial";
    ctx.fillText(highScore, 30, 170);
  };

  // Mueve al jugador
  const move = (direction) => {
    if (gameOver) return;

    setCharacterPosition(direction);
    tree.trees.shift();
    tree.createNewTrunk();

    const audio = new Audio("audio/cut.wav");
    audio.playbackRate = 2;
    audio.play();

    setScore(score + 1);

    if (
      (tree.trees[0].value === "left" && characterPosition === "left") ||
      (tree.trees[0].value === "right" && characterPosition === "right")
    ) {
      setGameOver(true);
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
      alert(`Game Over! Your Highscore: ${highScore}`);
      setTimeout(startGame, 1000); // Reinicia el juego después de un segundo
    }
  };

  // Dibuja el juego (persona y árbol)
  const drawGame = () => {
    if (person && tree) {
      tree.draw();
      person.draw();
    }
  };

  // Ciclo de actualización (para animación)
  useEffect(() => {
    if (!gameInitialized) {
      setGameInitialized(true);
      startGame(); // Inicia el juego cuando se monta el componente
    }
  }, [gameInitialized]);

  useEffect(() => {
    if (gameOver) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const interval = setInterval(() => {
      drawBackground(ctx, canvas); // Redibuja el fondo
      drawScore(ctx);
      drawGame(); // Dibuja el árbol y la persona
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(interval); // Limpiar el intervalo
  }, [gameOver, score, person, tree]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div className="control">
        <button className="btn-control" onClick={() => move("left")}>
          LEFT
        </button>
        <button className="btn-control" onClick={() => move("right")}>
          RIGHT
        </button>
      </div>
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default LumberjackGame;




