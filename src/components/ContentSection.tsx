import React from "react";
import type { TextStyle } from "../types";

interface ContentSectionProps {
  style: TextStyle;
  updateStyle: (key: keyof TextStyle, value: any) => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  style,
  updateStyle,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Content
      </h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Headline Text
        </label>
        <textarea
          value={style.text}
          onChange={(e) => updateStyle("text", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none text-base"
          rows={3}
        />
      </div>
    </div>
  );
};

export default ContentSection;
