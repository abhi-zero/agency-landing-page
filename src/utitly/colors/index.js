const colors = {
  yellow: "cm-yellow-500",
  redMedium: "cm-red-400",
  redLight: "cm-red-200",
  greenDark: "cm-green-800",
  greenLight: "cm-green-500",
  greenExtraLight: "cm-green-300",
  blueDark: "cm-blue-800",
  blueExtraLight: "cm-blue-300"
};

export default function getColor(colorName) {
  return colors[colorName]
} 