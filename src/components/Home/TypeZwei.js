import React from "react";
import Typewriter from "typewriter-effect";

function TypeZwei() {
  return (
    <Typewriter
      options={{
        strings: [
          "FALOPA",
          "PORONGA"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeZwei;
