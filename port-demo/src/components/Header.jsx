import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const baseVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, scale: 1.3, y: -50, transition: { duration: 1.5 } },
  pVisible: {
    opacity: 1,
    scale: 1.3,
    y: -40,
    transition: { duration: 1.5, stiffNess: 120 },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 2, ease: "easeInOut" },
  },
};
const btnVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2 },
  },
  hover: {
    scale: 1.1,
  },
};

function Header() {
  return (
    <motion.div
      variants={baseVariants}
      exit="exit"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        className="name"
        variants={baseVariants}
        initial="hidden"
        animate="visible"
      >
        Anil Kumar Kasa
      </motion.h1>
      <motion.p
        className="sub-ttl"
        variants={baseVariants}
        initial="hidden"
        animate="pVisible"
      >
        I'm, a Full stack web Devloper{" "}
        <motion.i
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
          className="bi bi-gear-fill"
        ></motion.i>
      </motion.p>
      <div style={{gap:"1vmin"}}>
        <Link to="/me">
          <motion.button
            className="About-btn"
            variants={btnVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{}}
          >
            About me
          </motion.button>
        </Link>
        <a href="Anil's resume.pdf" download="Anil's resume">
          <motion.button
            className="rsume-btn"
            variants={btnVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            style={{marginLeft:"2vmin"}}
          >
            My Resume
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
}

export default Header;
