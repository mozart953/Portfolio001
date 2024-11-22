import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm Mariano Villa",
          "Full-Stack Senior engineer",
          "Content Creator",
          "Serial joker teller of crappy jokes...",
          "FALOPA"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
