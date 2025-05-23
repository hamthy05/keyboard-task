import React, { useState } from "react";
import Keyboard from "../components/Keyboard/Keyboard";
import { QWERTY_LAYOUT, NUMERIC_LAYOUT } from "../components/Keyboard/layouts";

const KeyboardDemo = () => {
  const [text, setText] = useState("");
  const [currentLayout, setCurrentLayout] = useState(QWERTY_LAYOUT);
  const [enableSound, setEnableSound] = useState(true);

  const handleKeyPress = (value) => {
    if (value === "backspace") {
      setText((prev) => prev.slice(0, -1));
    } else if (value === "Enter") {
      setText((prev) => prev + "\n");
    } else if (value === "toggle") {
      setCurrentLayout((prev) =>
        prev.name === QWERTY_LAYOUT.name ? NUMERIC_LAYOUT : QWERTY_LAYOUT
      );
    } else {
      setText((prev) => prev + value);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 w-full max-w-3xl mx-auto">
      <div className="w-full space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          Virtual Keyboard
        </h2>
        <p className="text-gray-600">
          Type using the virtual keyboard or your physical keyboard
        </p>
      </div>

      <div className="relative w-full">
        <textarea
          className="w-full h-40 p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing..."
        />

        <div className="absolute bottom-3 right-3 flex space-x-2">
          <button
            onClick={() => setText("")}
            className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors text-gray-700"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setCurrentLayout(QWERTY_LAYOUT)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLayout.name === QWERTY_LAYOUT.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            QWERTY
          </button>
          <button
            onClick={() => setCurrentLayout(NUMERIC_LAYOUT)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentLayout.name === NUMERIC_LAYOUT.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Numeric
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-gray-700">Sound</label>
          <div
            className={`relative w-12 h-6 transition-colors duration-200 ease-in-out rounded-full cursor-pointer ${
              enableSound ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setEnableSound((prev) => !prev)}
          >
            <div
              className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
                enableSound ? "transform translate-x-6" : ""
              }`}
            />
          </div>
        </div>
      </div>

      <Keyboard
        onKeyPress={handleKeyPress}
        layout={currentLayout}
        enableSound={enableSound}
      />
    </div>
  );
};

export default KeyboardDemo;
