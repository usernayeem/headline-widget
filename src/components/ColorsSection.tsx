import React from "react";
import type { TextStyle } from "../types";

interface ColorsSectionProps {
  style: TextStyle;
  updateStyle: (key: keyof TextStyle, value: any) => void;
}

const ColorsSection: React.FC<ColorsSectionProps> = ({
  style,
  updateStyle,
}) => {
  const gradientDirections = [
    {
      value: "to right",
      icon: "→",
      label: "Right",
      classes: "text-gray-700 dark:text-gray-200",
    },
    {
      value: "to left",
      icon: "←",
      label: "Left",
      classes: "text-gray-700 dark:text-gray-200",
    },
    {
      value: "to bottom",
      icon: "↓",
      label: "Down",
      classes: "text-gray-700 dark:text-gray-200",
    },
    {
      value: "to top",
      icon: "↑",
      label: "Up",
      classes: "text-gray-700 dark:text-gray-200",
    },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Colors & Gradients
      </h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Enable Gradient
          </label>
          <button
            onClick={() => updateStyle("enableGradient", !style.enableGradient)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              style.enableGradient
                ? "bg-indigo-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                style.enableGradient ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Text Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={style.textColor}
              onChange={(e) => updateStyle("textColor", e.target.value)}
              className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
            />
            <input
              type="text"
              value={style.textColor}
              onChange={(e) => updateStyle("textColor", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
            />
          </div>
        </div>

        {style.enableGradient && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Gradient Direction
              </label>
              <div className="grid grid-cols-4 gap-3">
                {gradientDirections.map((direction) => (
                  <button
                    key={direction.value}
                    onClick={() =>
                      updateStyle("gradientDirection", direction.value)
                    }
                    className={`relative p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center min-h-[60px] ${
                      style.gradientDirection === direction.value
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 shadow-md"
                        : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-indigo-300 dark:hover:border-indigo-400 hover:bg-indigo-25 dark:hover:bg-indigo-900/10"
                    }`}
                    title={`Gradient ${direction.label}`}
                  >
                    <span
                      className={`text-2xl font-bold mb-1 ${
                        style.gradientDirection === direction.value
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {direction.icon}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        style.gradientDirection === direction.value
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {direction.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gradient Start
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={style.gradientStart}
                    onChange={(e) =>
                      updateStyle("gradientStart", e.target.value)
                    }
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={style.gradientStart}
                    onChange={(e) =>
                      updateStyle("gradientStart", e.target.value)
                    }
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gradient End
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={style.gradientEnd}
                    onChange={(e) => updateStyle("gradientEnd", e.target.value)}
                    className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={style.gradientEnd}
                    onChange={(e) => updateStyle("gradientEnd", e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
                  />
                </div>
              </div>
            </div>

            {/* Gradient Preview */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gradient Preview
              </label>
              <div
                className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-600"
                style={{
                  background: `linear-gradient(${style.gradientDirection}, ${style.gradientStart}, ${style.gradientEnd})`,
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ColorsSection;
