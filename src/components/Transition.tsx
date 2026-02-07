"use client";
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const Transition = () => {
  const controls1 = useAnimationControls()
  const controls2 = useAnimationControls()
  const controls3 = useAnimationControls()

  useEffect(() => {
    const runAnimation = async () => {
      // Phase 1: Cover (left → right)
      controls1.start({ x: '100%' }, { delay: 0.2, duration: 0.6, ease: 'easeInOut' })
      controls2.start({ x: '100%' }, { delay: 0.4, duration: 0.6, ease: 'easeInOut' })
      await controls3.start({ x: '100%' }, { delay: 0.6, duration: 0.6, ease: 'easeInOut' })

      // Wait for page to be fully loaded before revealing
      if (document.readyState !== 'complete') {
        await new Promise<void>((resolve) => {
          window.addEventListener('load', () => resolve(), { once: true })
        })
      }

      // Phase 2: Reveal (right → left)
      controls1.start({ x: '0%' }, { delay: 0.2, duration: 0.6, ease: 'easeInOut' })
      controls2.start({ x: '0%' }, { delay: 0.4, duration: 0.6, ease: 'easeInOut' })
      await controls3.start({ x: '0%' }, { delay: 0.6, duration: 0.6, ease: 'easeInOut' })
    }

    runAnimation()
  }, [controls1, controls2, controls3])

  return (
    <>
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-950'
        initial={{ x: '0%', width: '100%' }}
        animate={controls1}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-purple-800'
        initial={{ x: '0%', width: '100%' }}
        animate={controls2}
      />
      <motion.div
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-purple-600'
        initial={{ x: '0%', width: '100%' }}
        animate={controls3}
      />
    </>
  )
}

export default Transition
