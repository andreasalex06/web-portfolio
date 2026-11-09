import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

export default function PuzzleReveal({ children, direction = 1, delay = 0 }) {
  const anchor = useRef(null)
  const inView = useInView(anchor, { amount: .1, margin: '0px 0px -5% 0px' })
  const reduced = useReducedMotion()

  return <div ref={anchor} className="puzzle-anchor">
    <motion.div
      className="puzzle-content"
      initial={false}
      animate={reduced || inView ? { opacity: 1, x: 0 } : { opacity: .65, x: direction * 20 }}
      transition={reduced ? { duration: 0 } : inView
        ? { type: 'spring', stiffness: 150, damping: 25, delay, opacity: { duration: .22, delay } }
        : { duration: 0 }}
    >{children}</motion.div>
  </div>
}
