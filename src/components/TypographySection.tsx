import React from "react";
import type { TextStyle } from "../types";

interface TypographySectionProps {
  style: TextStyle;
  updateStyle: (key: keyof TextStyle, value: any) => void;
}

const TypographySection: React.FC<TypographySectionProps> = ({
  style,
  updateStyle,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Typography
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Font Family
            </label>
            <select
              value={style.fontFamily}
              onChange={(e) => updateStyle("fontFamily", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
            >
              <option value="Inter">Inter</option>
              <option value="Arial">Arial</option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times">Times</option>
              <option value="Georgia">Georgia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Font Weight
            </label>
            <select
              value={style.fontWeight}
              onChange={(e) => updateStyle("fontWeight", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
            >
              <option value="300">300 - Light</option>
              <option value="400">400 - Normal</option>
              <option value="500">500 - Medium</option>
              <option value="700">700 - Bold</option>
              <option value="900">900 - Black</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Font Size (px)
          </label>
          <div className="space-y-2">
            <input
              type="range"
              min="12"
              max="120"
              value={style.fontSize}
              onChange={(e) =>
                updateStyle("fontSize", parseInt(e.target.value))
              }
              className="w-full"
            />
            <input
              type="number"
              value={style.fontSize}
              onChange={(e) =>
                updateStyle("fontSize", parseInt(e.target.value))
              }
              className="w-full px-3 py-1 text-base border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographySection;
