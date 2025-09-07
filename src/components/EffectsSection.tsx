import React from "react";
import type { TextStyle } from "../types";

interface EffectsSectionProps {
  style: TextStyle;
  updateStyle: (key: keyof TextStyle, value: any) => void;
}

const EffectsSection: React.FC<EffectsSectionProps> = ({
  style,
  updateStyle,
}) => {
  const animationCategories = {
    "Bounce & Elastic": [
      { value: "bounce", label: "Bounce" },
      { value: "rubber", label: "Rubber" },
      { value: "jello", label: "Jello" },
      { value: "tada", label: "Tada" },
    ],
    "Wave & Movement": [
      { value: "wave", label: "Wave" },
      { value: "swing", label: "Swing" },
      { value: "wobble", label: "Wobble" },
      { value: "shake", label: "Shake" },
    ],
    "Scale & Pulse": [
      { value: "scale", label: "Scale" },
      { value: "pulse", label: "Pulse" },
      { value: "heartBeat", label: "Heart Beat" },
      { value: "zoomIn", label: "Zoom In" },
    ],
    "Rotation & Flip": [
      { value: "rotate", label: "Rotate" },
      { value: "flip", label: "Flip" },
      { value: "flipInX", label: "Flip In X" },
      { value: "flipInY", label: "Flip In Y" },
    ],
    "Entrance Effects": [
      { value: "fadeIn", label: "Fade In" },
      { value: "slideUp", label: "Slide Up" },
      { value: "slideDown", label: "Slide Down" },
      { value: "slideLeft", label: "Slide Left" },
      { value: "slideRight", label: "Slide Right" },
      { value: "rollIn", label: "Roll In" },
      { value: "lightSpeed", label: "Light Speed" },
      { value: "backInUp", label: "Back In Up" },
    ],
    "Special Effects": [{ value: "flash", label: "Flash" }],
  };

  const animationPatterns = [
    {
      value: "leftToRight",
      label: "Left to Right",
      description: "Letters animate from left to right",
    },
    {
      value: "rightToLeft",
      label: "Right to Left",
      description: "Letters animate from right to left",
    },
    {
      value: "allTogether",
      label: "All Together",
      description: "All letters animate simultaneously",
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Modern Effects
      </h3>

      <div className="space-y-6">
        {/* Fade In Effect */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Fade In Animation
            </label>
            <button
              onClick={() => updateStyle("enableFadeIn", !style.enableFadeIn)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                style.enableFadeIn
                  ? "bg-indigo-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  style.enableFadeIn ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          {style.enableFadeIn && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration (ms)
              </label>
              <input
                type="range"
                min="300"
                max="3000"
                step="100"
                value={style.fadeInDuration}
                onChange={(e) =>
                  updateStyle("fadeInDuration", parseInt(e.target.value))
                }
                className="w-full"
              />
              <div className="text-xs text-gray-500 mt-1">
                {style.fadeInDuration}ms
              </div>
            </div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Hover Glow Effect
            </label>
            <button
              onClick={() =>
                updateStyle("enableHoverGlow", !style.enableHoverGlow)
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                style.enableHoverGlow
                  ? "bg-indigo-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  style.enableHoverGlow ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
          {style.enableHoverGlow && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Glow Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={style.glowColor}
                    onChange={(e) => updateStyle("glowColor", e.target.value)}
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={style.glowColor}
                    onChange={(e) => updateStyle("glowColor", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Glow Intensity
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  value={style.glowIntensity}
                  onChange={(e) =>
                    updateStyle("glowIntensity", parseInt(e.target.value))
                  }
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">
                  {style.glowIntensity}px
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Letter Animation */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Per-Letter Animation
            </label>
            <button
              onClick={() =>
                updateStyle(
                  "enableLetterAnimation",
                  !style.enableLetterAnimation
                )
              }
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                style.enableLetterAnimation
                  ? "bg-indigo-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  style.enableLetterAnimation
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
          {style.enableLetterAnimation && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Animation Type
                </label>
                <select
                  value={style.letterAnimationType}
                  onChange={(e) =>
                    updateStyle("letterAnimationType", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                >
                  {Object.entries(animationCategories).map(
                    ([category, animations]) => (
                      <optgroup key={category} label={category}>
                        {animations.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </optgroup>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Animation Pattern
                </label>
                <select
                  value={style.letterAnimationPattern}
                  onChange={(e) =>
                    updateStyle("letterAnimationPattern", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                >
                  {animationPatterns.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-500 mt-1">
                  {
                    animationPatterns.find(
                      (p) => p.value === style.letterAnimationPattern
                    )?.description
                  }
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Animation Delay (ms)
                </label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="25"
                  value={style.letterAnimationDelay}
                  onChange={(e) =>
                    updateStyle(
                      "letterAnimationDelay",
                      parseInt(e.target.value)
                    )
                  }
                  className="w-full"
                  disabled={style.letterAnimationPattern === "allTogether"}
                />
                <div className="text-xs text-gray-500 mt-1">
                  {style.letterAnimationDelay}ms{" "}
                  {style.letterAnimationPattern === "allTogether"
                    ? "(not applicable)"
                    : ""}
                </div>
              </div>

              <div className="text-xs text-gray-600 dark:text-gray-200 bg-gray-200 dark:bg-gray-500 p-2 rounded">
                <strong>Tip:</strong> "Left to Right" creates a wave effect,
                "Right to Left" reverses it, and "All Together" creates
                simultaneous animation.
              </div>
            </div>
          )}
        </div>

        {/* Text Shadow */}
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Text Shadow
              </label>
              <select
                value={style.textShadow}
                onChange={(e) => updateStyle("textShadow", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            {style.textShadow !== "none" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Shadow Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={
                      style.textShadowColor.includes("rgba")
                        ? "#000000"
                        : style.textShadowColor
                    }
                    onChange={(e) =>
                      updateStyle("textShadowColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={style.textShadowColor}
                    onChange={(e) =>
                      updateStyle("textShadowColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text Outline */}
        <div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Text Outline
              </label>
              <select
                value={style.textOutline}
                onChange={(e) => updateStyle("textOutline", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
            {style.textOutline !== "none" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Outline Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={style.textOutlineColor}
                    onChange={(e) =>
                      updateStyle("textOutlineColor", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={style.textOutlineColor}
                    onChange={(e) =>
                      updateStyle("textOutlineColor", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectsSection;
