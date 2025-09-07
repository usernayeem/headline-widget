import React from "react";
import type { TextStyle } from "../types";

export const getPreviewStyle = (style: TextStyle): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    fontFamily: style.fontFamily,
    fontWeight: style.fontWeight,
    fontSize: `${style.fontSize}px`,
    lineHeight: 1.2,
    textAlign: "center",
    color: style.textColor,
  };

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
        value !== "transparent"
    )
    .map(
      ([key, value]) =>
        `  ${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
    )
    .join("\n");
  const css = `.headline {\n${cssText}\n}`;

  const blob = new Blob([css], { type: "text/css" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "headline-style.css";
  a.click();
  URL.revokeObjectURL(url);
};

export const exportToHTML = (style: TextStyle) => {
  const cssStyle = getPreviewStyle(style);
  const cssText = Object.entries(cssStyle)
    .filter(
      ([_, value]) =>
        value !== "none" &&
        value !== "unset" &&
        value !== "initial" &&
        value !== "transparent"
    )
    .map(
      ([key, value]) =>
        `    ${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`
    )
    .join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Headline</title>
    <style>
        .headline {
${cssText}
        }
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
        value !== "transparent"
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
