import React from "react";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { motion, useViewportScroll, useSpring } from "framer-motion";
import { useRouter } from "next/router";

export default function BackToTopButton() {
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("#");
  };

  return (
    <motion.div
      className="topicon"
      style={{
        position: "-webkit-sticky",
        position: "fixed",
        opacity: pathLength,
      }}
      // onClick={handleClick}
    >
      <Button
        className="small-round-button-container topicon"
        onClick={handleClick}
      >
        <div className="small-round-button-icon-container shadow">
          <Icon icon="bi:chevron-up" width="20" />
        </div>
      </Button>
    </motion.div>
  );
}
