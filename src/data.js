export const API_KEY = "AIzaSyB521LKn3FPMr4bsrWsaD_mvXwfdbF0USg";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
