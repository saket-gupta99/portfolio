import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use loadSlim instead of loadFull
import type { Engine } from "tsparticles-engine";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Use loadSlim instead of loadFull - it's more stable and lightweight
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
      options={{
        fullScreen: {
          enable: false, // Disable fullscreen mode
          zIndex: -1
        },
        // background: {
        //   color: { value: "transparent" },
        // },
        particles: {
          color: {
            value: "#ffffff"
          },
          lineLinked: {
            blink: false,
            color: "#000",
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            limit: 20,
            value: 15,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200
              }
            },
            bounce: false,
            direction: "none",
            enable: true,
            outModes: { 
              default: "out" 
            },
            random: false,
            speed: 2,
            straight: false
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400"
            },
            type: "image",
            image: [
              { src: "/html-icon.svg", width: 20, height: 20 },
              { src: "/css-icon.svg", width: 20, height: 20 },
              { src: "/js-icon.svg", width: 20, height: 20 },
              { src: "/react-icon.svg", width: 20, height: 20 },
              { src: "/node-icon.svg", width: 20, height: 20 },
              { src: "/bootstrap-icon.svg", width: 20, height: 20 },
              { src: "/java.svg", width: 20, height: 20 },
              { src: "/python.svg", width: 20, height: 20 },
              { src: "/mysql-icon.svg", width: 20, height: 20 },
              { src: "/github.svg", width: 20, height: 20 },
              { src: "/typescript-icon.svg", width: 20, height: 20 },
              { src: "/vscode-icon.svg", width: 20, height: 20 },
            ],
            polygon: {
              sides: 5
            },
            stroke: {
              color: "#000000",
              width: 0
            }
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false
            },
            random: false,
            value: 16
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false
            },
            random: true,
            value: 1
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false
            },
            direction: "random",
            random: true,
            value: 0
          }
        },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse"
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5
              },
              radius: 60
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            push: {
              quantity: 2
            },
            remove: {
              quantity: 2
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5
          },
          move: {
            radius: 10
          },
          scale: 1,
          url: ""
        },
        background: {
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover"
        }
      }}
    />
  );
}

export default ParticlesBackground;