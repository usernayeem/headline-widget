import React from "react";
import type { TextStyle, SegmentStyle } from "../types";

export const getPreviewStyle = (style: TextStyle): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
    fontSize: `${style.fontSize}px`,
    lineHeight: 1.2,
    textAlign: "center",
    color: style.textColor,
    transition: style.enableHoverGlow ? "filter 0.3s ease" : undefined,
  };

  // Apply text shadow
  if (style.textShadow !== "none") {
    const shadowIntensity = {
      sm: "1px 1px 2px",
      md: "2px 2px 4px",
      lg: "3px 3px 6px",
    }[style.textShadow];
    baseStyle.textShadow = `${shadowIntensity} ${style.textShadowColor}`;
  }

  // Apply text outline
  if (style.textOutline !== "none") {
    const outlineWidth = {
      sm: "1px",
      md: "2px",
      lg: "3px",
    }[style.textOutline];
    baseStyle.WebkitTextStroke = `${outlineWidth} ${style.textOutlineColor}`;
  }

  if (style.enableGradient) {
    return {
      ...baseStyle,
      background: `linear-gradient(${style.gradientDirection}, ${style.gradientStart}, ${style.gradientEnd})`,
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
    };
  }

  return baseStyle;
};

export const getSegmentStyle = (segment: SegmentStyle): React.CSSProperties => {
  const style: React.CSSProperties = {
    position: "relative",
    display: "inline",
  };

  if (segment.highlight) {
    style.backgroundColor = segment.highlightColor;
    style.padding = "0 4px";
    style.borderRadius = "2px";
  }

  if (segment.underline) {
    style.textDecoration = "underline";
    style.textDecorationColor = segment.underlineColor;
    style.textDecorationThickness = "2px";
  }

  if (segment.background) {
    style.backgroundColor = segment.backgroundColor;
    style.padding = "2px 8px";
    style.borderRadius = "4px";
    style.display = "inline-block";
  }

  return style;
};

export interface TextSegment {
  text: string;
  isSegment: boolean;
  segmentStyle?: SegmentStyle;
  startIndex: number;
}

export const parseTextWithSegments = (style: TextStyle): TextSegment[] => {
  const { text, segments } = style;
  const result: TextSegment[] = [];
  let lastIndex = 0;

  // Sort segments by start index
  const sortedSegments = [...segments].sort(
    (a, b) => a.startIndex - b.startIndex
  );

  sortedSegments.forEach((segment) => {
    // Add text before segment
    if (segment.startIndex > lastIndex) {
      const beforeText = text.slice(lastIndex, segment.startIndex);
      result.push({
        text: beforeText,
        isSegment: false,
        startIndex: lastIndex,
      });
    }

    // Add segment
    const segmentText = text.slice(segment.startIndex, segment.endIndex);
    result.push({
      text: segmentText,
      isSegment: true,
      segmentStyle: segment,
      startIndex: segment.startIndex,
    });

    lastIndex = segment.endIndex;
  });

  // Add remaining text
  if (lastIndex < text.length) {
    const remainingText = text.slice(lastIndex);
    result.push({
      text: remainingText,
      isSegment: false,
      startIndex: lastIndex,
    });
  }

  // If no segments, return the whole text
  if (result.length === 0) {
    result.push({
      text: text,
      isSegment: false,
      startIndex: 0,
    });
  }

  return result;
};

export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export const exportToJSON = (style: TextStyle) => {
  const blob = new Blob([JSON.stringify(style, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "headline-style.json";
  a.click();
  URL.revokeObjectURL(url);
};

export const exportToCSS = (style: TextStyle) => {
  const cssStyle = getPreviewStyle(style);
  const cssText = Object.entries(cssStyle)
    .filter(
      ([_, value]) =>
        value !== "none" &&
        value !== "unset" &&
        value !== "initial" &&
        value !== "transparent" &&
        value !== undefined
    )
    .map(
      ([key, value]) =>
        `  ${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
    )
    .join("\n");

  let css = `.headline {\n${cssText}\n}`;

  // Add hover glow effect
  if (style.enableHoverGlow) {
    css += `\n\n.headline:hover {\n  filter: drop-shadow(0 0 ${style.glowIntensity}px ${style.glowColor});\n}`;
  }

  // Add letter animation keyframes
  if (style.enableLetterAnimation) {
    const keyframes = getAnimationKeyframes(style.letterAnimationType);
    css += `\n\n${keyframes}`;
    css += `\n\n.headline .letter-animation {\n  animation: ${style.letterAnimationType} 0.6s ease-in-out infinite;\n  animation-delay: calc(var(--i) * ${style.letterAnimationDelay}ms);\n}`;
  }

  const blob = new Blob([css], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "headline-style.css";
  a.click();
  URL.revokeObjectURL(url);
};

const getAnimationKeyframes = (type: string): string => {
  switch (type) {
    case "bounce":
      return `@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-10px); }
  70% { transform: translateY(-5px); }
}`;
    case "wave":
      return `@keyframes wave {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}`;
    case "rotate":
      return `@keyframes rotate {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}`;
    case "scale":
      return `@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`;
    default:
      return "";
  }
};

export const exportToHTML = (style: TextStyle) => {
  const cssStyle = getPreviewStyle(style);
  const cssText = Object.entries(cssStyle)
    .filter(
      ([_, value]) =>
        value !== "none" &&
        value !== "unset" &&
        value !== "initial" &&
        value !== "transparent" &&
        value !== undefined
    )
    .map(
      ([key, value]) =>
        `    ${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
    )
    .join("\n");

  let styles = `.headline {\n${cssText}\n}`;

  if (style.enableHoverGlow) {
    styles += `\n\n.headline:hover {\n  filter: drop-shadow(0 0 ${style.glowIntensity}px ${style.glowColor});\n}`;
  }

  if (style.enableLetterAnimation) {
    const keyframes = getAnimationKeyframes(style.letterAnimationType);
    styles += `\n\n${keyframes}`;
    styles += `\n\n.headline .letter-animation {\n  animation: ${style.letterAnimationType} 0.6s ease-in-out infinite;\n  animation-delay: calc(var(--i) * ${style.letterAnimationDelay}ms);\n}`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Headline</title>
    <style>
        ${styles}
    </style>
</head>
<body>
    <h1 class="headline">${style.text}</h1>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "headline.html";
  a.click();
  URL.revokeObjectURL(url);
};

export const copyStyle = async (style: TextStyle) => {
  const cssStyle = getPreviewStyle(style);
  const cssText = Object.entries(cssStyle)
    .filter(
      ([_, value]) =>
        value !== "none" &&
        value !== "unset" &&
        value !== "initial" &&
        value !== "transparent" &&
        value !== undefined
    )
    .map(
      ([key, value]) =>
        `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
    )
    .join(" ");

  try {
    await navigator.clipboard.writeText(cssText);
    return true;
  } catch (err) {
    console.error("Failed to copy style to clipboard");
    return false;
  }
};
