"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

/** Introdução ao abrir o link: logo com pulso luminoso (0.6s) e saída suave */
export function PageTransition() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, filter: "drop-shadow(0 0 0px rgba(255,85,0,0))" }}
            animate={{
              scale: [0.7, 1.08, 1],
              opacity: [0, 1, 1],
              filter: [
                "drop-shadow(0 0 0px rgba(255,85,0,0))",
                "drop-shadow(0 0 38px rgba(255,85,0,0.95))",
                "drop-shadow(0 0 12px rgba(255,85,0,0.45))",
              ],
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LogoMark size={64} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-sm font-extrabold uppercase text-ice"
          >
            Mente <span className="text-brand">Sintética</span>
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Atraso usado pela Hero para começar o stagger após a introdução */
export const INTRO_DELAY = 0.85;
