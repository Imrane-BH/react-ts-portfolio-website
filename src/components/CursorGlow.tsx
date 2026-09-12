import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed w-64 h-64 rounded-full pointer-events-none z-0"
      style={{
        background:
          "radial-gradient(circle, rgba(36,81,245,0.08) 0%, transparent 70%)",
      }}
      animate={{ x: pos.x - 128, y: pos.y - 128 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    />
  );
}