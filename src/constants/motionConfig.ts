const transformVariant = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 'calc(50%)', opacity: 0 },
};

const transition = {
  damping: 10,
  stiffness: 100,
  duration: 0.8,
};

export {
  transformVariant,
  transition
};
