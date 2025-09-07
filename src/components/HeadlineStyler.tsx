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
    text: "Your Amazing Headlines That Capture Attention",
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
        <div className="lg:w-1/2 md:p-4 lg:p-6 flex flex-col">
          <PreviewSection style={style} />

          {/* Desktop Export Buttons */}
          <div className="hidden md:block">
            <ExportButtons style={style} />
          </div>
        </div>

        {/* Settings Panel */}
        <div className="lg:w-1/2 bg-gray-50 dark:bg-gray-800 lg:overflow-auto">
          {/* Mobile spacer for fixed preview */}
          <div className="md:hidden h-[280px]" />

          {/* Scrollable Content Area */}
          <div className="p-4 lg:p-6">
            {/* Mobile Export Buttons - Scrollable with content */}
            <div className="md:hidden mb-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                <ExportButtons style={style} />
              </div>
            </div>

            {/* Settings Sections */}
            <div className="space-y-8">
              <ContentSection style={style} updateStyle={updateStyle} />
              <TypographySection style={style} updateStyle={updateStyle} />
              <ColorsSection style={style} updateStyle={updateStyle} />
              <EffectsSection style={style} updateStyle={updateStyle} />
              <SegmentSection style={style} updateStyle={updateStyle} />
            </div>

            {/* Bottom padding for mobile scrolling */}
            <div className="md:hidden h-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineStyler;
