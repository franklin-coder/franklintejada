import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, color }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const groupRef = useRef(); // Referencia al grupo que contiene el modelo

  useEffect(() => {
    // Cambiar el color de los materiales del modelo al color seleccionado
    if (computer.scene) {
      computer.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(color); // Cambia el color de todos los materiales del modelo
        }
      });
    }
  }, [color, computer.scene]);

  // Rotación constante del modelo
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Velocidad de rotación
    }
  });

  return (
    <mesh ref={groupRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <directionalLight intensity={10} />
      <spotLight
        position={[-30, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} color={0x0000ff} />
      <pointLight intensity={2} color={0xf1f1f1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ lightIntensity, zoomEnabled }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [color, setColor] = useState(""); // Valor inicial del color

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Cambiar el color al seleccionar uno nuevo
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      {/* Contenedor para los controles */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 10,
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Label y Toggle para Zoom */}
        <div>
          <label htmlFor="zoomToggle" style={{ fontWeight: "bold" }}>
            Enable Zoom:
          </label>
          <input
            className="mt-2"
            type="checkbox"
            id="zoomToggle"
            checked={zoomEnabled}
            onChange={() => {}}
            style={{
              border: "none",
              cursor: "pointer",
              width: "20px",
              height: "20px",
              marginLeft: "10px",
            }}
          />
        </div>

        {/* Color Picker */}
        <div
          style={{
            marginTop: "5px",
            position: "absolute",
            top: "420px",
            left: "70px",
            zIndex: 10,
          }}
        >
          <label
            htmlFor="colorPicker"
            style={{
              border: "none",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              marginLeft: "10px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            Pick a color:
          </label>
          <input
            id="colorPicker"
            type="color"
            value={color}
            onChange={handleColorChange}
            style={{
              border: "none",
              cursor: "pointer",
              width: "40px",
              height: "40px",
              marginLeft: "100px",
              backgroundColor: "#915effe",
              color: "#ffffff",
            }}
          />
        </div>
      </div>

      <Canvas
        frameloop="always" // Asegura que el canvas siempre esté en modo animación
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={zoomEnabled}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} color={color} />
          <hemisphereLight intensity={lightIntensity} groundColor="black" />
        </Suspense>
        <Preload all />
      </Canvas>
    </>
  );
};

export default ComputersCanvas;
