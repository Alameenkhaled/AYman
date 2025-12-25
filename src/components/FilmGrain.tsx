import React from 'react';

const FilmGrain: React.FC = () => {
  const style: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: 9999,
    opacity: 0.03,
    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAwOjVqaE4uxdSRmOZP8J9GPdiHUhtF_EqmJsFUAlJmqN-3itrEtinaOHzem9dh_58nE0k2T1FQco0H3UDErO2u4kLHqfCLp3MLIkCboC9p_ihUHb3QB_wkv-DTpBV0dbyY0fKef66hCx7aN7mtCeynG6m48-p6ftj9xQmKH-06V3DFfzK1Y7ttdySK68gLSGVlGkAU6VDo2l3sUa9oe_wrlJ52w9VyIZ3nduyLoYMZhh_6rPk3a58TWYaq_p47L41oWttQ9Upt073g)',
  };

  return <div style={style} />;
};

export default FilmGrain;
