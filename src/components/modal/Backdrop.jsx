import { motion } from 'framer-motion'
import { useRef } from 'react'

const Backdrop = ({ children, onClick }) => {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='fixed inset-0 z-[90] bg-black/70'
      onClick={e => {
        if (e.target === ref.current) {
          onClick()
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop