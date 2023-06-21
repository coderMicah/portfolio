import { useState } from "react";
import { motion } from "framer-motion";
import classes from "./MenuBtn.module.css";
import Menu from "../layout/menu/Menu";

const transition = { duration: 0.3 };

function MenuBtn(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <button
        className={classes.hamburgerBtn}
        onClick={() => setIsOpen(!isOpen)}
        arial-label-role="menu-button"
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            fill="transparent"
            strokeLinecap="round"
            strokeWidth="5"
            animate={isOpen ? "open" : "closed"}
            initial={false}
            variants={{
              closed: {
                d: "M 2 2.5 L 20 2.5",
                stroke: "#ffffff",
              },
              open: {
                d: "M 3 16.5 L 17 2.5",
                stroke: "#ffffff",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="transparent"
            strokeLinecap="round"
            strokeWidth="5"
            d="M 8 9.423 L 23 9.423"
            stroke={"#ffffff"}
            animate={isOpen ? "open" : "closed"}
            initial={false}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={transition}
          />
          <motion.path
            fill="transparent"
            strokeLinecap="round"
            strokeWidth="5"
            animate={isOpen ? "open" : "closed"}
            initial={false}
            variants={{
              closed: {
                d: "M 2 16.346 L 20 16.346",
                stroke: "#ffffff",
              },
              open: {
                d: "M 3 2.5 L 17 16.346",
                stroke: "#ffffff",
              },
            }}
            transition={transition}
          />
        </svg>
      </button>
     
    </>
  );
}

export default MenuBtn;
