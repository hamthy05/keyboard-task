export const QWERTY_LAYOUT = {
  name: "QWERTY",
  rows: [
    [
      { label: "1", value: "1", type: "character" },
      { label: "2", value: "2", type: "character" },
      { label: "3", value: "3", type: "character" },
      { label: "4", value: "4", type: "character" },
      { label: "5", value: "5", type: "character" },
      { label: "6", value: "6", type: "character" },
      { label: "7", value: "7", type: "character" },
      { label: "8", value: "8", type: "character" },
      { label: "9", value: "9", type: "character" },
      { label: "0", value: "0", type: "character" },
    ],
    [
      { label: "Q", value: "q", type: "character" },
      { label: "W", value: "w", type: "character" },
      { label: "E", value: "e", type: "character" },
      { label: "R", value: "r", type: "character" },
      { label: "T", value: "t", type: "character" },
      { label: "Y", value: "y", type: "character" },
      { label: "U", value: "u", type: "character" },
      { label: "I", value: "i", type: "character" },
      { label: "O", value: "o", type: "character" },
      { label: "P", value: "p", type: "character" },
    ],
    [
      { label: "A", value: "a", type: "character" },
      { label: "S", value: "s", type: "character" },
      { label: "D", value: "d", type: "character" },
      { label: "F", value: "f", type: "character" },
      { label: "G", value: "g", type: "character" },
      { label: "H", value: "h", type: "character" },
      { label: "J", value: "j", type: "character" },
      { label: "K", value: "k", type: "character" },
      { label: "L", value: "l", type: "character" },
    ],
    [
      { label: "Shift", value: "shift", type: "shift", width: 1.5 },
      { label: "Z", value: "z", type: "character" },
      { label: "X", value: "x", type: "character" },
      { label: "C", value: "c", type: "character" },
      { label: "V", value: "v", type: "character" },
      { label: "B", value: "b", type: "character" },
      { label: "N", value: "n", type: "character" },
      { label: "M", value: "m", type: "character" },
      { label: "⌫", value: "backspace", type: "backspace", width: 1.5 },
    ],
    [
      { label: "123", value: "toggle", type: "special", width: 1.5 },
      { label: "Space", value: " ", type: "space", width: 5 },
      { label: "Enter", value: "Enter", type: "enter", width: 1.5 },
    ],
  ],
};

export const NUMERIC_LAYOUT = {
  name: "Numeric",
  rows: [
    [
      { label: "1", value: "1", type: "character" },
      { label: "2", value: "2", type: "character" },
      { label: "3", value: "3", type: "character" },
    ],
    [
      { label: "4", value: "4", type: "character" },
      { label: "5", value: "5", type: "character" },
      { label: "6", value: "6", type: "character" },
    ],
    [
      { label: "7", value: "7", type: "character" },
      { label: "8", value: "8", type: "character" },
      { label: "9", value: "9", type: "character" },
    ],
    [
      { label: ".", value: ".", type: "character" },
      { label: "0", value: "0", type: "character" },
      { label: "⌫", value: "backspace", type: "backspace" },
    ],
  ],
};

export const DEFAULT_LAYOUTS = [QWERTY_LAYOUT, NUMERIC_LAYOUT];
