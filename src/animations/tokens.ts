export const motionTokens = {
  duration: {
    fast: 0.25,
    normal: 0.45,
    slow: 0.8,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1] as const,
    smooth: [0.4, 0, 0.2, 1] as const,
    spring: [0.34, 1.56, 0.64, 1] as const,
  },
  distance: {
    sm: 12,
    md: 24,
    lg: 40,
  },
  stagger: {
    xs: 0.04,
    sm: 0.08,
    md: 0.12,
  },
} as const;