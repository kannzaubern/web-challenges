export default function App() {
  return <Sum valueA={5} valueB={4} />;
}

export function Sum({ valueA, valueB }) {
  return <h1>{valueA + valueB}</h1>;
}
