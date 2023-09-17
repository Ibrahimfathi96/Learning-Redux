import Metrics from "./Metrics";
const ScreenWidth = Metrics.screenWidth;
const Sizes = {
  size6: (ScreenWidth * 6) / 365,
  size8: (ScreenWidth * 8) / 365,
  size10: (ScreenWidth * 10) / 365,
  size12: (ScreenWidth * 12) / 365,
  size14: (ScreenWidth * 14) / 365,
  size16: (ScreenWidth * 16) / 365,
  size18: (ScreenWidth * 18) / 365,
  size20: (ScreenWidth * 20) / 365,
  size22: (ScreenWidth * 22) / 365,
  size24: (ScreenWidth * 24) / 365,
  size26: (ScreenWidth * 26) / 365,
  size28: (ScreenWidth * 28) / 365,
  size30: (ScreenWidth * 30) / 365,
};
const FontWeight = {
  bold: "900",
  semiBold: "700",
  regular: "500",
  semiLight: "300",
  light: "100",
};

export default { Sizes, FontWeight };
