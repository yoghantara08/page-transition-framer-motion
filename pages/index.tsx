import { motion } from "framer-motion";
import { container, item } from "../animation";

export default function Home() {
  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full 
    bg-orange-100 lg:px-32 px-10"
    >
      <div className="my-80 lg:my-52 p-1 overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Happy Pickle
        </motion.h1>
      </div>
      <div className="flex justify-between">
        <div className="text-xl">
          <h2>Design</h2>
          <h2>Company</h2>
          <h2>2023</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-xl space-y-2"
        >
          <div className="overflow-hidden">
            <motion.h3 variants={item}>
              This pickle gonna make you smile.
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3 variants={item}>
              Scottish designs to make you happy.
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3 variants={item}>
              Click contact for cool transtition
            </motion.h3>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
