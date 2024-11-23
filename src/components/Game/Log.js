import React, { useEffect, useState } from 'react';

const Log = ({ log, cutLog, lumberjackPosition }) => {
  const [fallingSpeed, setFallingSpeed] = useState(log.fallingSpeed);

  useEffect(() => {
    const fallInterval = setInterval(() => {
      setFallingSpeed((prevSpeed) => prevSpeed + 0.1);
    }, 100);

    return () => clearInterval(fallInterval);
  }, []);

  const handleClick = () => {
    // Cortar el tronco solo si el leñador está en la posición correcta
    if (Math.abs(lumberjackPosition - log.position) < 10) {
      cutLog(log.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="log"
      style={{
        left: `${log.position}%`,
        bottom: `${fallingSpeed * 5}px`,
        transition: 'bottom 0.1s ease',
      }}
    >
      🪵
    </div>
  );
};

export default Log;
