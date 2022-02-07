const BackgroundVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
    }
  },
  exit: { opacity: 0 },
};

const ContainerVariants = {
  initial: { x: '100vw' },
  animate: {
    x: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.2,
      delay: 0.1
    }
  },
  exit: { x: '100vw' },
};

export {
  BackgroundVariants,
  ContainerVariants,
}