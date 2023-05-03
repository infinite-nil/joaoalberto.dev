import { useEffect } from 'react'

function measure(cb: () => void) {
  const name = `fn:${cb.name}`;

  console.time(name);
  cb();
  console.timeEnd(name);
}

type Point = {
  x: number;
  y: number;
}

type Line = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const SIZE = 600;

const walls: Line[] = [
  { x1: 400, y1: 200, x2: 400, y2: 400 },
  { x1: 300, y1: 300, x2: 500, y2: 10 }
];

function getAngle(x: number, y: number, cx: number, cy: number) {
  const dx = x - cx;
  const dy = y - cy;

  return Math.atan2(dy, dx);
}

function getPoint(x: number, y: number, angle: number) {
  const radians = (Math.PI / 180) * angle;
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);
  const px = (cos * (x - 300)) + (sin * (y - 300)) + 300
  const py = (cos * (y - 300)) - (sin * (x - 300)) + 300

  return {
    x: px,
    y: py,
  }
}

function createWalls(context: CanvasRenderingContext2D) {
  context.strokeStyle = '#acacac';
  context.beginPath();

  for (const wall of walls) {
    context.moveTo(wall.x1, wall.y1);
    context.lineTo(wall.x2, wall.y2);
  }

  context.stroke();
  context.closePath();
}

function drawIntersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
  const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)

  if (den === 0) {
    return
  }

  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

  if (t > 0 && t < 1 && u > 0 && u < 1) {
    const px = (x3 + (u * (x4 - x3)))
    const py = (y3 + (u * (y4 - y3)))

    return {
      x: px,
      y: py
    }
  }

}

function drawLight(context: CanvasRenderingContext2D, x: number, y: number, cx: number, cy: number) {


  context.strokeStyle = 'red'
  context.beginPath();

  const angle = getAngle(x, y, cx, cy);
  const point = getPoint(x, y, angle);

  context.moveTo(cx, cy);

  let finalX = point.x;
  let finalY = point.y;

  for (const wall of walls) {
    const p = drawIntersection(x, y, cx, cy, wall.x1, wall.y1, wall.x2, wall.y2);

    if (p?.x && p?.y) {
      // context.arc(p.x, p.y, 2, 0, Math.PI * 2);
      finalX = p.x
      finalY = p.y
    }
  }

  context.lineTo(finalX, finalY);

  context.stroke();
  context.closePath();
}

function setup(selector: string) {
  if (!selector) throw new Error('You must provide a valid selector');

  const canvas = document.querySelector(selector) as HTMLCanvasElement;

  if (!canvas) throw new Error('Cant find canvas element');

  const context = canvas.getContext('2d');

  if (!context) throw new Error('Cant get context');

  canvas.width = SIZE;
  canvas.height = SIZE;

  // const p = drawIntersection(100, 200, 100, 400, 40, 295, 160, 295)
  // console.log('P', p)
  // if (p?.x && p.y) {
  //   context.arc(p?.x, p?.y, 10, 0, Math.PI * 2);
  //   context.fill();
  // }
  //
  // context.moveTo(100, 200)
  // context.lineTo(100, 400)
  // context.moveTo(40, 295)
  // context.lineTo(160, 295)
  // context.stroke();

  // drawLight(context, 10, 300);
  // createWalls(context)

  canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
    context.clearRect(0, 0, SIZE, SIZE);
    drawLight(context, offsetX, offsetY, 600, 300)
    drawLight(context, offsetX, offsetY + 50, 600, 300)
    drawLight(context, offsetX, offsetY - 50, 600, 300)
    createWalls(context);
  })

  // for (let angle = 0; angle <= 360; angle += 10) {
  //   console.log('Angle', angle);
  //
  //   drawLight(context, angle * 100, angle * 100)
  // }
}

function RayTracing() {
  useEffect(() => {
    setup("#ray");
  }, []);

  return (
    <div>
      <canvas id="ray" />
    </div>
  )
}

export default RayTracing
