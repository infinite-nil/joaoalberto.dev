import { useAutomata } from "./use-automata";

function Automata() {
  const canvas = useAutomata();

  return (
    <div className="fixed inset-0 -z-10">
      <canvas id="automata" ref={canvas} />
    </div>
  );
}

export { Automata };
