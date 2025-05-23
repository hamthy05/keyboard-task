import React, { useState, useEffect } from "react";

const Key = ({
  keyData,
  isPressed,
  onKeyPress,
  showAnimation = true,
  enableSound = false,
}) => {
  const [pressed, setPressed] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isPressed && showAnimation) {
      handlePressAnimation();
    }
  }, [isPressed]);

  const handlePressAnimation = () => {
    setPressed(true);
    setAnimating(true);

    if (enableSound) {
      playKeySound();
    }

    setTimeout(() => {
      setPressed(false);
      setTimeout(() => setAnimating(false), 150);
    }, 100);
  };

  const playKeySound = () => {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-press-1.mp3"
    );
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Audio play failed:", e));
  };

  const handleClick = () => {
    onKeyPress(keyData.value);
    if (showAnimation) {
      handlePressAnimation();
    }
  };

  const getBaseStyle = () => {
    switch (keyData.type) {
      case "space":
        return "bg-gray-100 text-gray-700";
      case "backspace":
      case "enter":
      case "shift":
      case "capslock":
      case "tab":
        return "bg-gray-200 text-gray-700 font-medium";
      case "special":
        return "bg-gray-300 text-gray-700 font-medium";
      default:
        return "bg-white text-gray-900";
    }
  };

  const getKeyWidth = () => {
    if (!keyData.width) return "";
    if (keyData.width === 1) return "w-10";
    if (keyData.width === 1.5) return "sm:min-w-[56px] min-w-[48px]";
    if (keyData.width === 2) return "sm:min-w-[72px] min-w-[64px]";
    if (keyData.width === 5) return "sm:min-w-[180px] min-w-[140px]";
    return "";
  };

  return (
    <button
      className={`
        ${getBaseStyle()}
        ${getKeyWidth()}
        flex items-center justify-center
        h-11 sm:h-12 md:h-14
        rounded-lg sm:rounded-xl
        m-0.5 sm:m-1
        px-2 py-3
        shadow-sm
        transition-all duration-150
        outline-none
        border border-gray-200/80
        select-none
        ${pressed ? "scale-95 bg-opacity-80 shadow-inner" : "scale-100"}
        ${animating ? "bg-opacity-90" : ""}
        ${
          showAnimation
            ? "hover:brightness-95 active:scale-95 active:bg-opacity-80 active:shadow-inner"
            : ""
        }
        backdrop-filter backdrop-blur-sm
      `}
      onClick={handleClick}
    >
      {keyData.label}
    </button>
  );
};

export default Key;
