import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Llama a handleResize inmediatamente para establecer el tamaño inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar y desmontar

  return windowSize;
}

export default useWindowSize;
