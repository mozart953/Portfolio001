import React from 'react';

const EmbeddedPage = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <iframe
        src="https://tbot.xyz/lumber/" // URL de la página que deseas embeber
        title='FALOPA'
        style={{
          border: 'none',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default EmbeddedPage;
