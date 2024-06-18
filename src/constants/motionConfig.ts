const transformVariant = {
  visible: { transform: 'translateY(0px)', opacity: 1 },
  hidden: { transform: 'translateY(-100px)', opacity: 0 },
};

const transition = {
  damping: 10,
  stiffness: 100,
  duration: 0.8
};

export {
  transformVariant,
  transition
};
