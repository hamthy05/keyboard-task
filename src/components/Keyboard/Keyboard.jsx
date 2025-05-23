import React from "react";
import Key from "./Key";
import { QWERTY_LAYOUT } from "./layouts";
import useKeyboard from "./hooks/useKeyboard";

const Keyboard = ({
  onKeyPress = () => {},
  layout = QWERTY_LAYOUT,
  showAnimation = true,
  enableSound = false,
}) => {
  const { pressedKeys, handlePress } = useKeyboard({
    initialLayout: layout,
    onKeyPress,
    listenToPhysicalKeyboard: true,
  });

  return (
    <div className="keyboard-container max-w-3xl mx-auto">
      <div className="keyboard-wrapper bg-gray-50/90 backdrop-filter backdrop-blur-md px-1 pt-2 pb-1 rounded-2xl shadow-lg border border-gray-200/70">
        {layout.rows.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex justify-center mb-1">
            {row.map((keyData, keyIndex) => (
              <Key
                key={`key-${rowIndex}-${keyIndex}`}
                keyData={keyData}
                isPressed={pressedKeys.has(keyData.value)}
                onKeyPress={handlePress}
                showAnimation={showAnimation}
                enableSound={enableSound}
              />
            ))}
          </div>
        ))}
        <div className="text-xs text-gray-400 text-center py-1 font-light">
          Virtual Keyboard
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
