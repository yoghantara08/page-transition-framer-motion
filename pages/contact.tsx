import { motion } from "framer-motion";
import { container, item } from "../animation";

export default function Contact() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full 
    bg-red-400 lg:px-32 px-10"
    >
      <div className="my-80 lg:my-52 p-1 overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Lets Talk
        </motion.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-2xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="lg:text-4xl text-2xl underline">
          <motion.ul variants={container} initial="hidden" animate="show">
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                Twitter
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                Instagram
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                Linkedin
              </motion.li>
            </div>
            <div className="overflow-hidden">
              <motion.li variants={item} className="pb-2">
                Github
              </motion.li>
            </div>
          </motion.ul>
        </div>
      </div>
    </motion.main>
  );
}
