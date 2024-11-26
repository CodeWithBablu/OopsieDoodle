import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const LogoBig = () => {
  return (
    <div className="logo-big my-10">
      <Link href="/">
        <Image src="/img/logo.gif" priority width="0" height="0" unoptimized className="h-20 w-auto" alt="Logo" />
      </Link>

      <div className="avatar-container h-[48px] mt-5 flex justify-center">
        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "0% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-900% -200%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-400% -100%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "block" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-100% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-100% -400%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "0% -300%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-200% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-500% 0%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-500% 0%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-300% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-600% -200%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-600% -300%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-400% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-400% -400%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-900% -100%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-500% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-400% -200%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "0% -300%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-600% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-400% -100%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-700% 0%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>

        <motion.div whileTap={{ scale: 1.2 }} className="avatar">
          <div className="color" style={{ backgroundPosition: "-700% 0%" }}></div>
          <div className="eyes" style={{ backgroundPosition: "-800% -100%" }}></div>
          <div className="mouth" style={{ backgroundPosition: "-600% -200%" }}></div>
          <div className="special" style={{ display: "none" }}></div>
          <div className="owner" style={{ display: "none" }}></div>
        </motion.div>
      </div>
    </div>

  )
}

export default LogoBig