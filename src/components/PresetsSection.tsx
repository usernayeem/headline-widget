import React from "react";
import type { TextStyle } from "../types";

interface Preset {
  name: string;
  style: TextStyle;
}

interface PresetsSectionProps {
  applyPreset: (preset: TextStyle) => void;
}

const PresetsSection: React.FC<PresetsSectionProps> = ({ applyPreset }) => {
  const presets: Preset[] = [
    {
      name: "Modern",
      style: {
        text: "Modern Design",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: 42,
        enableGradient: false,
        textColor: "#0046FF",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
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
        segments: [],
      },
    },
    {
      name: "Elegant",
      style: {
        text: "Elegant Typography",
        fontFamily: "Georgia",
        fontWeight: "400",
        fontSize: 48,
        enableGradient: false,
        textColor: "#8b5cf6",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: true,
        fadeInDuration: 1200,
        enableHoverGlow: false,
        glowColor: "#8b5cf6",
        glowIntensity: 10,
        enableLetterAnimation: false,
        letterAnimationType: "slideUp",
        letterAnimationDelay: 100,
        letterAnimationPattern: "leftToRight",
        textShadow: "none",
        textShadowColor: "rgba(0,0,0,0.3)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Bold",
      style: {
        text: "BOLD IMPACT",
        fontFamily: "Inter",
        fontWeight: "900",
        fontSize: 56,
        enableGradient: false,
        textColor: "#ef4444",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: true,
        glowColor: "#ef4444",
        glowIntensity: 15,
        enableLetterAnimation: false,
        letterAnimationType: "scale",
        letterAnimationDelay: 100,
        letterAnimationPattern: "leftToRight",
        textShadow: "md",
        textShadowColor: "rgba(0,0,0,0.4)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Gradient",
      style: {
        text: "Gradient Magic",
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: 48,
        enableGradient: true,
        textColor: "#0046FF",
        gradientStart: "#6366f1",
        gradientEnd: "#ec4899",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: true,
        glowColor: "#6366f1",
        glowIntensity: 12,
        enableLetterAnimation: false,
        letterAnimationType: "rotate",
        letterAnimationDelay: 100,
        letterAnimationPattern: "leftToRight",
        textShadow: "none",
        textShadowColor: "rgba(0,0,0,0.3)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Shadow",
      style: {
        text: "Shadow Depth",
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: 48,
        enableGradient: false,
        textColor: "#10b981",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: false,
        glowColor: "#10b981",
        glowIntensity: 10,
        enableLetterAnimation: false,
        letterAnimationType: "bounce",
        letterAnimationDelay: 100,
        letterAnimationPattern: "leftToRight",
        textShadow: "lg",
        textShadowColor: "#374151",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Retro",
      style: {
        text: "RETRO VIBES",
        fontFamily: "Times",
        fontWeight: "700",
        fontSize: 52,
        enableGradient: false,
        textColor: "#f97316",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: false,
        glowColor: "#f97316",
        glowIntensity: 10,
        enableLetterAnimation: true,
        letterAnimationType: "pulse",
        letterAnimationDelay: 150,
        letterAnimationPattern: "leftToRight",
        textShadow: "sm",
        textShadowColor: "rgba(0,0,0,0.5)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Neon Glow",
      style: {
        text: "NEON LIGHTS",
        fontFamily: "Arial",
        fontWeight: "700",
        fontSize: 52,
        enableGradient: false,
        textColor: "#00ffff",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: true,
        glowColor: "#00ffff",
        glowIntensity: 20,
        enableLetterAnimation: true,
        letterAnimationType: "pulse",
        letterAnimationDelay: 100,
        letterAnimationPattern: "allTogether",
        textShadow: "lg",
        textShadowColor: "#00ffff",
        textOutline: "sm",
        textOutlineColor: "#ffffff",
        segments: [],
      },
    },
    {
      name: "Minimal",
      style: {
        text: "clean & simple",
        fontFamily: "Helvetica",
        fontWeight: "400",
        fontSize: 40,
        enableGradient: false,
        textColor: "#6b7280",
        gradientStart: "#6366f1",
        gradientEnd: "#8b5cf6",
        gradientDirection: "to right",
        enableFadeIn: true,
        fadeInDuration: 800,
        enableHoverGlow: false,
        glowColor: "#6b7280",
        glowIntensity: 10,
        enableLetterAnimation: false,
        letterAnimationType: "fadeIn",
        letterAnimationDelay: 100,
        letterAnimationPattern: "leftToRight",
        textShadow: "none",
        textShadowColor: "rgba(0,0,0,0.3)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
    {
      name: "Playful",
      style: {
        text: "Fun & Playful!",
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: 44,
        enableGradient: true,
        textColor: "#0046FF",
        gradientStart: "#f472b6",
        gradientEnd: "#fbbf24",
        gradientDirection: "to right",
        enableFadeIn: false,
        fadeInDuration: 1000,
        enableHoverGlow: true,
        glowColor: "#f472b6",
        glowIntensity: 12,
        enableLetterAnimation: true,
        letterAnimationType: "bounce",
        letterAnimationDelay: 80,
        letterAnimationPattern: "leftToRight",
        textShadow: "none",
        textShadowColor: "rgba(0,0,0,0.3)",
        textOutline: "none",
        textOutlineColor: "#000000",
        segments: [],
      },
    },
  ];

  const handlePresetClick = (preset: TextStyle) => {
    setTimeout(() => {
      applyPreset(preset);
    }, 50);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Presets
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => handlePresetClick(preset.style)}
            className="group px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-800 text-gray-900 dark:text-white hover:text-indigo-700 dark:hover:text-indigo-300 rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm border border-transparent hover:border-indigo-200 dark:hover:border-indigo-600"
          >
            <span className="group-hover:font-semibold transition-all duration-200">
              {preset.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PresetsSection;
