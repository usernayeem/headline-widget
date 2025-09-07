import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiDownload, FiCopy } from "react-icons/fi";
import type { TextStyle } from "../types";
import {
  exportToJSON,
  exportToCSS,
  exportToHTML,
  copyStyle,
} from "../utils/helpers";

interface ExportButtonsProps {
  style: TextStyle;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ style }) => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button");
      gsap.fromTo(
        buttons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  const handleButtonClick = (
    callback: () => void,
    buttonElement: HTMLButtonElement
  ) => {
    gsap.to(buttonElement, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    callback();
  };

  return (
    <div ref={buttonsRef} className="flex justify-center flex-wrap gap-3 mb-6">
      <button
        onClick={(e) =>
          handleButtonClick(() => exportToJSON(style), e.currentTarget)
        }
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <FiDownload size={16} />
        Export JSON
      </button>
      <button
        onClick={(e) =>
          handleButtonClick(() => exportToCSS(style), e.currentTarget)
        }
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <FiDownload size={16} />
        Export CSS
      </button>
      <button
        onClick={(e) =>
          handleButtonClick(() => exportToHTML(style), e.currentTarget)
        }
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <FiDownload size={16} />
        Export HTML
      </button>
      <button
        onClick={(e) =>
          handleButtonClick(() => copyStyle(style), e.currentTarget)
        }
        className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
      >
        <FiCopy size={16} />
        Copy Style
      </button>
    </div>
  );
};

export default ExportButtons;
