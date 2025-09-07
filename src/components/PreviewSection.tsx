import React from "react";
import type { TextStyle } from "../types";
import { getPreviewStyle } from "../utils/helpers";

interface PreviewSectionProps {
  style: TextStyle;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ style }) => {
  // Force re-render when gradient settings change
  const renderKey = `${style.enableGradient}-${style.gradientDirection}-${style.gradientStart}-${style.gradientEnd}-${style.textColor}`;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg flex-1 flex items-center justify-center mb-6">
      <div
        key={renderKey}
        className="p-8 text-center max-w-full break-words"
        style={getPreviewStyle(style)}
      >
        {style.text}
      </div>
    </div>
  );
};

export default PreviewSection;
