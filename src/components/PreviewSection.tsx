import React, { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import type { TextStyle } from "../types";
import {
  getPreviewStyle,
  getSegmentStyle,
  parseTextWithSegments,
} from "../utils/helpers";

interface PreviewSectionProps {
  style: TextStyle;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ style }) => {
  const previewRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Memoize the render key to prevent unnecessary re-renders
  const renderKey = useMemo(() => {
    return `${style.enableGradient}-${style.gradientDirection}-${style.gradientStart}-${style.gradientEnd}-${style.textColor}-${style.segments.length}-${style.enableLetterAnimation}-${style.letterAnimationPattern}`;
  }, [
    style.enableGradient,
    style.gradientDirection,
    style.gradientStart,
    style.gradientEnd,
    style.textColor,
    style.segments.length,
    style.enableLetterAnimation,
    style.letterAnimationPattern,
  ]);

  const calculateAnimationDelay = (
    index: number,
    totalLetters: number,
    pattern: string
  ): number => {
    const baseDelay = style.letterAnimationDelay;

    switch (pattern) {
      case "allTogether":
        return 0;
      case "rightToLeft":
        return (totalLetters - 1 - index) * baseDelay;
      case "leftToRight":
      default:
        return index * baseDelay;
    }
  };

  // Inject keyframes only once when letter animation is enabled
  useEffect(() => {
    if (!style.enableLetterAnimation) return;

    const existingStyle = document.getElementById("letter-animations");
    if (existingStyle) return; // Don't inject if already exists

    const styleElement = document.createElement("style");
    styleElement.id = "letter-animations";
    styleElement.textContent = `
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
        40%, 43% { transform: translateY(-10px); }
        70% { transform: translateY(-5px); }
      }
      
      @keyframes wave {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes rotate {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        75% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
      
      @keyframes scale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes slideDown {
        from { transform: translateY(-20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes slideLeft {
        from { transform: translateX(-20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideRight {
        from { transform: translateX(20px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes flip {
        0% { transform: perspective(400px) rotateY(0); }
        40% { transform: perspective(400px) rotateY(-20deg); }
        60% { transform: perspective(400px) rotateY(10deg); }
        80% { transform: perspective(400px) rotateY(-5deg); }
        100% { transform: perspective(400px) rotateY(0); }
      }
      
      @keyframes rubber {
        0% { transform: scale3d(1, 1, 1); }
        30% { transform: scale3d(1.25, 0.75, 1); }
        40% { transform: scale3d(0.75, 1.25, 1); }
        50% { transform: scale3d(1.15, 0.85, 1); }
        65% { transform: scale3d(0.95, 1.05, 1); }
        75% { transform: scale3d(1.05, 0.95, 1); }
        100% { transform: scale3d(1, 1, 1); }
      }
      
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
      
      @keyframes swing {
        20% { transform: rotate(15deg); }
        40% { transform: rotate(-10deg); }
        60% { transform: rotate(5deg); }
        80% { transform: rotate(-5deg); }
        100% { transform: rotate(0deg); }
      }
      
      @keyframes tada {
        0% { transform: scale(1); }
        10%, 20% { transform: scale(0.9) rotate(-3deg); }
        30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
        40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
        100% { transform: scale(1) rotate(0); }
      }
      
      @keyframes wobble {
        0% { transform: translateX(0%); }
        15% { transform: translateX(-25%) rotate(-5deg); }
        30% { transform: translateX(20%) rotate(3deg); }
        45% { transform: translateX(-15%) rotate(-3deg); }
        60% { transform: translateX(10%) rotate(2deg); }
        75% { transform: translateX(-5%) rotate(-1deg); }
        100% { transform: translateX(0%); }
      }
      
      @keyframes jello {
        0%, 11.1%, 100% { transform: translate3d(0, 0, 0); }
        22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
        33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
        44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
        55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
        66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
        77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
        88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
      }
      
      @keyframes heartBeat {
        0% { transform: scale(1); }
        14% { transform: scale(1.3); }
        28% { transform: scale(1); }
        42% { transform: scale(1.3); }
        70% { transform: scale(1); }
      }
      
      @keyframes flash {
        0%, 50%, 100% { opacity: 1; }
        25%, 75% { opacity: 0; }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
      }
      
      @keyframes rollIn {
        0% { opacity: 0; transform: translateX(-100%) rotate(-120deg); }
        100% { opacity: 1; transform: translateX(0) rotate(0deg); }
      }
      
      @keyframes zoomIn {
        0% { opacity: 0; transform: scale(0.3); }
        50% { opacity: 1; }
        100% { transform: scale(1); }
      }
      
      @keyframes lightSpeed {
        0% { transform: translateX(100%) skewX(-30deg); opacity: 0; }
        60% { transform: skewX(20deg); opacity: 1; }
        80% { transform: skewX(-5deg); opacity: 1; }
        100% { transform: translateX(0) skewX(0deg); opacity: 1; }
      }
      
      @keyframes flipInX {
        0% { transform: perspective(400px) rotateX(90deg); opacity: 0; }
        40% { transform: perspective(400px) rotateX(-20deg); }
        60% { transform: perspective(400px) rotateX(10deg); opacity: 1; }
        80% { transform: perspective(400px) rotateX(-5deg); }
        100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
      }
      
      @keyframes flipInY {
        0% { transform: perspective(400px) rotateY(90deg); opacity: 0; }
        40% { transform: perspective(400px) rotateY(-20deg); }
        60% { transform: perspective(400px) rotateY(10deg); opacity: 1; }
        80% { transform: perspective(400px) rotateY(-5deg); }
        100% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
      }
      
      @keyframes backInUp {
        0% { transform: translateY(1200px) scale(0.7); opacity: 0.7; }
        80% { transform: translateY(0px) scale(0.7); opacity: 0.7; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      .letter-animation {
        display: inline-block;
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }
      
      .letter-animation.once {
        animation-iteration-count: 1;
        animation-fill-mode: both;
      }

      /* Custom scrollbar for preview container */
      .preview-scroll::-webkit-scrollbar {
        width: 8px;
      }
      .preview-scroll::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.1);
        border-radius: 4px;
      }
      .preview-scroll::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.3);
        border-radius: 4px;
      }
      .preview-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(0,0,0,0.5);
      }
    `;
    document.head.appendChild(styleElement);
  }, [style.enableLetterAnimation]);

  // Separate effect for fade-in animation
  useEffect(() => {
    if (!style.enableFadeIn || !textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: style.fadeInDuration / 1000,
        ease: "power2.out",
      }
    );
  }, [style.enableFadeIn, style.fadeInDuration]);

  // Separate effect for letter animations
  useEffect(() => {
    if (!style.enableLetterAnimation || !textRef.current) return;

    const letters = textRef.current.querySelectorAll(".letter-animation");
    const totalLetters = letters.length;

    letters.forEach((letter, index) => {
      const element = letter as HTMLElement;
      element.style.animationName = style.letterAnimationType;

      const delay = calculateAnimationDelay(
        index,
        totalLetters,
        style.letterAnimationPattern
      );
      element.style.animationDelay = `${delay}ms`;

      // Add 'once' class for entrance animations
      const entranceAnimations = [
        "fadeIn",
        "slideUp",
        "slideDown",
        "slideLeft",
        "slideRight",
        "rollIn",
        "zoomIn",
        "lightSpeed",
        "flipInX",
        "flipInY",
        "backInUp",
      ];

      if (entranceAnimations.includes(style.letterAnimationType)) {
        element.classList.add("once");
      } else {
        element.classList.remove("once");
      }
    });
  }, [
    style.enableLetterAnimation,
    style.letterAnimationType,
    style.letterAnimationDelay,
    style.letterAnimationPattern,
    style.text, // Only when text changes
  ]);

  const handleMouseEnter = () => {
    if (style.enableHoverGlow && textRef.current) {
      gsap.to(textRef.current, {
        filter: `drop-shadow(0 0 ${style.glowIntensity}px ${style.glowColor})`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (style.enableHoverGlow && textRef.current) {
      gsap.to(textRef.current, {
        filter: "drop-shadow(0 0 0px transparent)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const renderTextContent = () => {
    const hasSegments = style.segments.length > 0;

    if (hasSegments) {
      const textSegments = parseTextWithSegments(style);
      let letterIndex = 0;

      return textSegments.map((segment, segmentIndex) => {
        if (segment.isSegment && segment.segmentStyle) {
          const segmentContent = style.enableLetterAnimation
            ? segment.text.split("").map((char, charIndex) => {
                const currentLetterIndex = letterIndex + charIndex;
                return (
                  <span key={currentLetterIndex} className="letter-animation">
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })
            : segment.text;

          letterIndex += segment.text.length;

          return (
            <span
              key={segment.segmentStyle.id}
              style={getSegmentStyle(segment.segmentStyle)}
            >
              {segmentContent}
            </span>
          );
        } else {
          const normalContent = style.enableLetterAnimation
            ? segment.text.split("").map((char, charIndex) => {
                const currentLetterIndex = letterIndex + charIndex;
                return (
                  <span key={currentLetterIndex} className="letter-animation">
                    {char === " " ? "\u00A0" : char}
                  </span>
                );
              })
            : segment.text;

          letterIndex += segment.text.length;

          return (
            <React.Fragment key={segmentIndex}>{normalContent}</React.Fragment>
          );
        }
      });
    } else if (style.enableLetterAnimation) {
      return style.text.split("").map((char, index) => (
        <span key={index} className="letter-animation">
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else {
      return style.text;
    }
  };

  const baseStyle = getPreviewStyle(style);

  return (
    <div className="md:static fixed top-0 left-0 right-0 z-50 md:z-auto h-[280px] md:h-auto md:mb-6 lg:h-[75vh] flex-1 flex items-center justify-center">
      {/* Mobile & Desktop: Gray background container */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border-1 border-[#D3D3D3] w-full h-full flex items-center justify-center m-0 md:m-0">
        <div
          ref={previewRef}
          className="p-0 md:p-8 text-center cursor-pointer w-full h-full flex items-center justify-center overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full overflow-auto preview-scroll flex items-center justify-center">
            <div
              ref={textRef}
              key={renderKey}
              style={baseStyle}
              className="max-w-full break-words p-2 sm:p-4 text-center leading-tight"
            >
              {renderTextContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
