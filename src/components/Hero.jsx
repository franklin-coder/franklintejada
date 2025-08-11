import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { perfil } from "../assets";
import * as THREE from "three";

const Hero = () => {
  const [lightIntensity, setLightIntensity] = useState(9.15);
  const [zoomEnabled, setZoomEnabled] = useState(true);
  const [isSmallDevice, setIsSmallDevice] = useState(false);
  const smallDeviceSceneRef = useRef(null); // Referencia para la escena en dispositivos pequeños

  const handleIntensityChange = (e) => {
    const intensityValue = parseFloat(e.target.value);
    setLightIntensity(intensityValue);
  };

  const handleZoomToggle = () => {
    setZoomEnabled(!zoomEnabled);
  };

  useEffect(() => {
    // Detectar dispositivos pequeños
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsSmallDevice(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsSmallDevice(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (isSmallDevice && smallDeviceSceneRef.current) {
      // Configurar la escena de Three.js para dispositivos pequeños
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.setZ(30);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      smallDeviceSceneRef.current.appendChild(renderer.domElement);

      // Crear geometría (ejemplo: torus)
      const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
      const material = new THREE.MeshNormalMaterial();
      const torus = new THREE.Mesh(geometry, material);
      scene.add(torus);

      // Iluminación
      const pointLight = new THREE.PointLight(0xffffff);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      // Animación
      const animate = () => {
        requestAnimationFrame(animate);
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      // Limpiar el renderizador y la escena al desmontar
      return () => {
        renderer.dispose();
        scene.clear();
        while (smallDeviceSceneRef.current.firstChild) {
          smallDeviceSceneRef.current.removeChild(
            smallDeviceSceneRef.current.firstChild
          );
        }
      };
    }
  }, [isSmallDevice]);

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Contenido para dispositivos no pequeños */}
      {!isSmallDevice && (
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
        >
          {/* Contenido del héroe */}
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm{" "}
              <span className="text-[#915eff]">Franklin Tejada</span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Web &#123;
              <span className="font-bold text-[#915eff]">MERN</span>
              &#125; & Game Developer{" "}
              <span className="font-bold bg-gradient-to-r from-purple-500 to-purple-800 text-transparent bg-clip-text">
                <span className={`${styles.heroSubText} mt-2 text-white-100`}>
                  &#40;
                </span>{" "}
                🎮 <span className="font-bold text-[#915eff]">Unity</span>
              </span>{" "}
              &#41;
              <br className="sm:block hidden" />
            </p>
          </div>
        </div>
      )}

      {/* Escena de Three.js para dispositivos pequeños */}
      {isSmallDevice && (
        <div
          ref={smallDeviceSceneRef}
          className="w-full h-full absolute top-0 left-0"
        ></div>
      )}

      {/* ComputersCanvas o imagen para dispositivos no pequeños */}
      {!isSmallDevice && (
        <ComputersCanvas
          lightIntensity={lightIntensity}
          zoomEnabled={zoomEnabled}
        />
      )}

      {/* Toggle para habilitar/deshabilitar el zoom */}
      {!isSmallDevice && (
        <div
          className="toggle-container"
          style={{
            position: "absolute",
            top: "370px",
            left: "100px",
            zIndex: "9999",
            color: "white",
          }}
        >
          <label
            htmlFor="zoomToggle"
            className="font-bold text-[#ffffff]"
          >
            Enable Zoom:
          </label>
          <input
            className={`${styles.heroSubText} mt-3 m-2 text-white-100`}
            type="checkbox"
            id="zoomToggle"
            checked={zoomEnabled}
            onChange={handleZoomToggle}
            style={{ color: "white", backgroundColor: "white" }}
          />
        </div>
      )}

      {/* Slider para ajustar la intensidad de la luz */}
      {!isSmallDevice && (
        <div
          className="slider-container"
          style={{
            position: "absolute",
            top: "300px",
            left: "100px",
            zIndex: "9999",
            color: "white",
          }}
        >
          <label
            htmlFor="lightIntensitySlider"
            className="font-bold text-[#ffffff]"
          >
            Light Intensity:
          </label>
          <input
            style={{
              background: "#ffffff",
              color: "#ffffff",
              "::webkit-slider-thumb": {
                background: "#ffffff",
                color: "#ffffff",
              },
            }}
            className="mt-3 m-2 text-white-100"
            type="range"
            id="lightIntensitySlider"
            min="0"
            max="20"
            step="0.1"
            value={lightIntensity}
            onChange={handleIntensityChange}
          />
        </div>
      )}

      <div className="absolute xs:bottom-10 botton-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
