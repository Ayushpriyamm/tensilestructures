// components/AnimatedCounter.tsx
'use client'
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function AnimatedCounter({ end, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}

      className="text-4xl font-bold text-[#ededed]"
    >
      {inView && <CountUp end={end} duration={duration} suffix={suffix} />}
    </motion.div>
  );
}
