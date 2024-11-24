import { motion } from "framer-motion"

function GameCanvas() {
  return (
    <>
      <canvas width={800} height={600} className="w-full h-auto" style={{ cursor: 'default' }}></canvas>
      <div className="overlay show absolute top-0 w-full h-full bg-white pointer-events-auto"></div>
    </>
  )
}

export default GameCanvas