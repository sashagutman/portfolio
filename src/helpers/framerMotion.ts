import type { MotionProps, Variants } from "framer-motion";

// Простое появление (fade) — базовый вариант
export const fadeIn: MotionProps = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Fade + выезд снизу вверх
export const fadeInUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Fade + выезд сверху вниз
export const fadeInDown: MotionProps = {
  initial: { opacity: 0, y: -24 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Fade + выезд слева направо
export const fadeInLeft: MotionProps = {
  initial: { opacity: 0, x: -24 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    x: -24,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Fade + выезд справа налево
export const fadeInRight: MotionProps = {
  initial: { opacity: 0, x: 24 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    x: 24,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

// Лёгкое "вырастание" (scale)
export const scaleIn: MotionProps = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.35, ease: "easeIn" },
  },
};

// Пружинящий попап 
export const springUp: MotionProps = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  viewport: { once: true, amount: 0.3 },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// Контейнер для списка/грида (stagger children)
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Элемент списка для stagger-анимации
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};
