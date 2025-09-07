import React, { useState } from "react";
import type { TextStyle } from "../types";
import PreviewSection from "./PreviewSection";
import ExportButtons from "./ExportButtons";
import ContentSection from "./ContentSection";
import TypographySection from "./TypographySection";
import ColorsSection from "./ColorsSection";
import EffectsSection from "./EffectsSection";
import SegmentSection from "./SegmentSection";

const HeadlineStyler: React.FC = () => {
  const [style, setStyle] = useState<TextStyle>({
    text: "Your Amazing Headlines That Capture Attention and Inspire Action",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 48,
    enableGradient: false,
    textColor: "#0046FF",
    gradientStart: "#42d392",
    gradientEnd: "#647eff",
    gradientDirection: "to right",
    // Modern Effects
    enableFadeIn: false,
    fadeInDuration: 1000,
    enableHoverGlow: false,
    glowColor: "#0046FF",
    glowIntensity: 10,
    enableLetterAnimation: false,
    letterAnimationType: "bounce",
    letterAnimationDelay: 100,
    letterAnimationPattern: "leftToRight",
    textShadow: "none",
    textShadowColor: "rgba(0,0,0,0.3)",
    textOutline: "none",
    textOutlineColor: "#000000",
    // Segment Styling
    segments: [],
  });

  const updateStyle = (key: keyof TextStyle, value: any) => {
    setStyle((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="flex flex-col lg:flex-row lg:h-screen">
        {/* Preview Section */}
        <div className="lg:w-1/2 p-4 lg:p-6 flex flex-col">
          <div className="min-h-[300px] lg:flex-1">
            <PreviewSection style={style} />
          </div>
          <ExportButtons style={style} />
        </div>

        {/* Settings Panel */}
        <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-800 lg:overflow-auto">
          <div className="p-4 lg:p-6">
            <div className="space-y-6">
              <ContentSection style={style} updateStyle={updateStyle} />
              <TypographySection style={style} updateStyle={updateStyle} />
              <ColorsSection style={style} updateStyle={updateStyle} />
              <EffectsSection style={style} updateStyle={updateStyle} />
              <SegmentSection style={style} updateStyle={updateStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineStyler;
