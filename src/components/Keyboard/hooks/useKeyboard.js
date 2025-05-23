import { useState, useEffect, useCallback } from "react";
import { QWERTY_LAYOUT } from "../layouts";

const useKeyboard = ({
  initialLayout = QWERTY_LAYOUT,
  onKeyPress,
  listenToPhysicalKeyboard = true,
} = {}) => {
  const [state, setState] = useState({
    currentLayout: initialLayout,
    pressedKeys: new Set(),
    capsLock: false,
    shift: false,
  });

  const setLayout = useCallback((layout) => {
    setState((prev) => ({ ...prev, currentLayout: layout }));
  }, []);

  const handleKeyDown = useCallback((event) => {
    const key = event.key.toLowerCase();

    setState((prevState) => {
      const newPressedKeys = new Set(prevState.pressedKeys);
      newPressedKeys.add(key);

      let newCapsLock = prevState.capsLock;
      let newShift = prevState.shift;

      if (key === "capslock") {
        newCapsLock = !prevState.capsLock;
      }

      if (key === "shift") {
        newShift = true;
      }

      return {
        ...prevState,
        pressedKeys: newPressedKeys,
        capsLock: newCapsLock,
        shift: newShift,
      };
    });
  }, []);

  const handleKeyUp = useCallback((event) => {
    const key = event.key.toLowerCase();

    setState((prevState) => {
      const newPressedKeys = new Set(prevState.pressedKeys);
      newPressedKeys.delete(key);

      let newShift = prevState.shift;

      if (key === "shift") {
        newShift = false;
      }

      return {
        ...prevState,
        pressedKeys: newPressedKeys,
        shift: newShift,
      };
    });
  }, []);

  const handlePress = useCallback(
    (value) => {
      if (value === "shift") {
        setState((prev) => ({
          ...prev,
          shift: !prev.shift,
        }));
      } else if (value === "capslock") {
        setState((prev) => ({
          ...prev,
          capsLock: !prev.capsLock,
        }));
      } else {
        if (onKeyPress) {
          let finalValue = value;

          if ((state.shift || state.capsLock) && value.length === 1) {
            finalValue = value.toUpperCase();
          }

          onKeyPress(finalValue);

          if (state.shift) {
            setState((prev) => ({
              ...prev,
              shift: false,
            }));
          }
        }
      }
    },
    [onKeyPress, state.shift, state.capsLock]
  );

  useEffect(() => {
    if (listenToPhysicalKeyboard) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, [listenToPhysicalKeyboard, handleKeyDown, handleKeyUp]);

  return {
    layout: state.currentLayout,
    pressedKeys: state.pressedKeys,
    capsLock: state.capsLock,
    shift: state.shift,
    setLayout,
    handlePress,
  };
};

export default useKeyboard;
