import useAutomata from "./use-automata";

export default function Automata() {
  const canvas = useAutomata();

  return (
    <div className="fixed inset-0 -z-10">
      <canvas ref={canvas} id="automata" />
    </div>
  );
}
