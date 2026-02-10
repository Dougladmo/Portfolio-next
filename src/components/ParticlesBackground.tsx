"use client"

import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { type Container, type ISourceOptions } from "@tsparticles/engine"
import { loadSlim } from "@tsparticles/slim"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // Particles loaded successfully
  }

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.9,
        },
        size: {
          value: { min: 0.5, max: 0.9 },
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  // Always return the same structure for SSR/CSR consistency
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="fixed inset-0 -z-50"
        />
      )}
    </>
  )
}

export default ParticlesBackground
