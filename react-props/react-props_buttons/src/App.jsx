export default function App() {
  return <Button color = #239129 text = "Submit" />;

export function Button({ color, disabled, text }) {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled}>
      {text}
    </button>
  );
}
