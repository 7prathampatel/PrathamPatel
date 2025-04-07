import { motion } from 'framer-motion';

const Background = () => {
  // Generate random positions for floating elements
  const floatingElements = Array.from({ length: 12 }).map((_, index) => ({
    id: index,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 20 + Math.random() * 60,
    duration: 20 + Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-400/5 via-transparent to-transparent" />
      
      {/* Floating glass elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full backdrop-blur-lg bg-gradient-to-br from-white/10 to-purple-500/10"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: ["-20%", "20%"],
            x: ["-10%", "10%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Background;