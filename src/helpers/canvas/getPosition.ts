const MIN = -6;
const MAX = 6;
const RANGE = Math.abs(MIN) + Math.abs(MAX);

export const getCanvasPosition = (x: number, y: number, size: number) => {
  const distance = size / RANGE;
  const center = size / 2;
  return {
    x: center + distance * x,
    y: center - distance * y,
  };
};

export const getCartesianPosition = (x: number, y: number, size: number) => {
  const distance = size / RANGE;
  const center = size / 2;
  return {
    x: (x - center) / distance,
    y: (y + center) / distance,
  };
};
