export interface TextStyle {
  text: string;
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  enableGradient: boolean;
  textColor: string;
  gradientStart: string;
  gradientEnd: string;
  gradientDirection: "to right" | "to left" | "to bottom" | "to top";
}
