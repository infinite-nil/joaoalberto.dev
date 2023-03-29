export type Props = {
  focused: boolean;
};

export const pathAnimation = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
};

export const variants = {
  open: {
    pathLength: 1,
    opacity: 1,
    scale: 1,
  },
  closed: {
    pathLength: 0,
    opacity: 0,
    scale: 0,
  },
};
