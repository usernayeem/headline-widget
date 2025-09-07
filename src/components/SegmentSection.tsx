import React, { useState } from "react";
import { FiPlus, FiTrash2, FiEdit3 } from "react-icons/fi";
import type { TextStyle, SegmentStyle } from "../types";
import { generateId } from "../utils/helpers";

interface SegmentSectionProps {
  style: TextStyle;
  updateStyle: (key: keyof TextStyle, value: any) => void;
}

const SegmentSection: React.FC<SegmentSectionProps> = ({
  style,
  updateStyle,
}) => {
  const [selectedText, setSelectedText] = useState("");

  const addSegment = () => {
    if (!selectedText.trim()) return;

    const startIndex = style.text.indexOf(selectedText);
    if (startIndex === -1) return;

    const newSegment: SegmentStyle = {
      id: generateId(),
      startIndex,
      endIndex: startIndex + selectedText.length,
      highlight: false,
      highlightColor: "#ffff00",
      underline: false,
      underlineColor: "#0046FF",
      background: false,
      backgroundColor: "#e5e7eb",
    };

    updateStyle("segments", [...style.segments, newSegment]);
    setSelectedText("");
  };

  const updateSegment = (
    segmentId: string,
    key: keyof SegmentStyle,
    value: any
  ) => {
    const updatedSegments = style.segments.map((segment) =>
      segment.id === segmentId ? { ...segment, [key]: value } : segment
    );
    updateStyle("segments", updatedSegments);
  };

  const removeSegment = (segmentId: string) => {
    const filteredSegments = style.segments.filter(
      (segment) => segment.id !== segmentId
    );
    updateStyle("segments", filteredSegments);
  };

  const getSegmentText = (segment: SegmentStyle) => {
    return style.text.slice(segment.startIndex, segment.endIndex);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Word/Segment Styling
      </h3>

      <div className="space-y-6">
        {/* Add New Segment */}
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-3">
            Add New Segment
          </h4>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select text to style
              </label>
              <input
                type="text"
                value={selectedText}
                onChange={(e) => setSelectedText(e.target.value)}
                placeholder="Enter text from your headline..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-base"
              />
              {selectedText && style.text.indexOf(selectedText) === -1 && (
                <p className="text-red-500 text-sm mt-1">
                  Text not found in headline
                </p>
              )}
            </div>
            <button
              onClick={addSegment}
              disabled={
                !selectedText.trim() || style.text.indexOf(selectedText) === -1
              }
              className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FiPlus size={16} />
              Add Segment
            </button>
          </div>
        </div>

        {/* Existing Segments */}
        {style.segments.length > 0 && (
          <div className="space-y-4">
            <h4 className="text-md font-medium text-gray-900 dark:text-white">
              Styled Segments ({style.segments.length})
            </h4>
            {style.segments.map((segment) => (
              <div
                key={segment.id}
                className="bg-white dark:bg-gray-700 p-5 rounded-lg border border-gray-200 dark:border-gray-600 space-y-4"
              >
                {/* Segment Header */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-2">
                    <FiEdit3 size={16} className="text-indigo-500" />
                    <span className="font-medium text-gray-900 dark:text-white">
                      "{getSegmentText(segment)}"
                    </span>
                  </div>
                  <button
                    onClick={() => removeSegment(segment.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded transition-colors"
                    title="Remove segment"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>

                {/* Segment Controls */}
                <div className="space-y-4">
                  {/* Highlight */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Highlight
                      </label>
                      <button
                        onClick={() =>
                          updateSegment(
                            segment.id,
                            "highlight",
                            !segment.highlight
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          segment.highlight
                            ? "bg-indigo-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            segment.highlight
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    {segment.highlight && (
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={segment.highlightColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "highlightColor",
                              e.target.value
                            )
                          }
                          className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={segment.highlightColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "highlightColor",
                              e.target.value
                            )
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Underline */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Underline
                      </label>
                      <button
                        onClick={() =>
                          updateSegment(
                            segment.id,
                            "underline",
                            !segment.underline
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          segment.underline
                            ? "bg-indigo-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            segment.underline
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    {segment.underline && (
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={segment.underlineColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "underlineColor",
                              e.target.value
                            )
                          }
                          className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={segment.underlineColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "underlineColor",
                              e.target.value
                            )
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                      </div>
                    )}
                  </div>

                  {/* Background */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Background
                      </label>
                      <button
                        onClick={() =>
                          updateSegment(
                            segment.id,
                            "background",
                            !segment.background
                          )
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          segment.background
                            ? "bg-indigo-600"
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            segment.background
                              ? "translate-x-6"
                              : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                    {segment.background && (
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={segment.backgroundColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "backgroundColor",
                              e.target.value
                            )
                          }
                          className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                        />
                        <input
                          type="text"
                          value={segment.backgroundColor}
                          onChange={(e) =>
                            updateSegment(
                              segment.id,
                              "backgroundColor",
                              e.target.value
                            )
                          }
                          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {style.segments.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <FiEdit3 size={48} className="mx-auto mb-3 opacity-50" />
            <p>No segments created yet.</p>
            <p className="text-sm">
              Add text segments to apply special styling.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SegmentSection;
