export interface SegmentStyle {
  startIndex: number;
  endIndex: number;
  highlight: boolean;
  highlightColor: string;
  underline: boolean;
  underlineColor: string;
  background: boolean;
  backgroundColor: string;
  id: string;
}

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
  // Modern Effects
  enableFadeIn: boolean;
  fadeInDuration: number;
  enableHoverGlow: boolean;
  glowColor: string;
  glowIntensity: number;
  enableLetterAnimation: boolean;
  letterAnimationType:
    | "bounce"
    | "wave"
    | "rotate"
    | "scale"
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "flip"
    | "rubber"
    | "pulse"
    | "swing"
    | "tada"
    | "wobble"
    | "jello"
    | "heartBeat"
    | "flash"
    | "shake"
    | "rollIn"
    | "zoomIn"
    | "lightSpeed"
    | "flipInX"
    | "flipInY"
    | "backInUp";
  letterAnimationDelay: number;
  letterAnimationPattern: "leftToRight" | "rightToLeft" | "allTogether";
  textShadow: "none" | "sm" | "md" | "lg";
  textShadowColor: string;
  textOutline: "none" | "sm" | "md" | "lg";
  textOutlineColor: string;
  // Segment Styling
  segments: SegmentStyle[];
}
