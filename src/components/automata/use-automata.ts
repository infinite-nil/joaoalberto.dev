import { useEffect, useRef } from "react";

function getRandomRule() {
  const allowedRules = [
    1, 3, 5, 9, 11, 13, 18, 25, 26, 28, 37, 41, 45, 50, 54, 57, 58, 60, 62, 63,
    70, 73, 75, 77, 79, 81, 82, 86, 89, 90, 91, 93, 94, 101, 102, 103, 105, 107,
    109, 111, 123, 122, 130, 131, 134, 136, 138, 140, 142, 145, 146, 147, 149,
    150, 154, 158, 161, 163, 165, 167, 169, 190, 193, 210, 214, 224, 242, 246,
    250, 254,
  ];

  return allowedRules[Math.floor(Math.random() * allowedRules.length - 1) + 1];
}

function automata(context: CanvasRenderingContext2D) {
  const rule = getRandomRule();
  const ruleSet = rule.toString(2).padStart(8, "0");
  const total = 80;
  const width = window.innerWidth / total;
  const height = width;

  function calculateState(a: any, b: any, c: any) {
    const neighborhood = [a, b, c].join("");
    const value = 7 - parseInt(neighborhood, 2);

    return parseInt(ruleSet[value]);
  }

  const state: Array<Array<number>> = Array.from(
    { length: total },
    (_, rowIndex) =>
      Array.from({ length: total }, (_, colIndex) =>
        Math.floor(total / 2) === colIndex && rowIndex === 0 ? 1 : 0
      )
  );

  for (const i in state) {
    const rowIndex = Number(i);

    if (rowIndex > 0) {
      for (const c in state[rowIndex]) {
        const colIndex = Number(c);

        const left = state[rowIndex - 1][(colIndex - 1 + total) % total];
        const right = state[rowIndex - 1][(colIndex + 1) % total];
        const center = state[rowIndex - 1][colIndex];

        state[rowIndex][colIndex] = calculateState(left, center, right);
      }
    }
  }

  for (const ri in state) {
    const row = state[ri];

    for (const ci in row) {
      const col = row[ci];

      context.fillStyle = col === 0 ? "#ffffff" : "#f8f8f8";
      context.beginPath();
      context.rect(width * Number(ci), height * Number(ri), width, height);
      context.fill();
      context.closePath();
    }
  }
}

function useAutomata() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (canvas.current) {
      canvas.current.width = screenWidth;
      canvas.current.height = screenHeight;

      const context = canvas.current.getContext("2d");

      if (context) automata(context);
    }
  }, [canvas]);

  return canvas;
}

export { useAutomata };
