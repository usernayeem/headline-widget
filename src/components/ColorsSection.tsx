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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gradient Direction
              </label>
              <div className="grid grid-cols-4 gap-2">
                <button
                  onClick={() => updateStyle("gradientDirection", "to right")}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    style.gradientDirection === "to right"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}
                >
                  →
                </button>
                <button
                  onClick={() => updateStyle("gradientDirection", "to left")}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    style.gradientDirection === "to left"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}
                >
                  ←
                </button>
                <button
                  onClick={() => updateStyle("gradientDirection", "to bottom")}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    style.gradientDirection === "to bottom"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}
                >
                  ↓
                </button>
                <button
                  onClick={() => updateStyle("gradientDirection", "to top")}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    style.gradientDirection === "to top"
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}
                >
                  ↑
                </button>
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
          </>
        )}
      </div>
    </div>
  );
};

export default ColorsSection;
