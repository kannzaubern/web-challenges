export default function App() {
  return (
    <Button color="#239129" text="Submit" disabled>
      {" "}
    </Button>
  );
}

export function Button({ color, disabled, text }) {
  return (
    <button style={{ color: color }} disabled={disabled}>
      {text}
    </button>
  );
}
