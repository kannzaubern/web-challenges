import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "lemon", color: "yellow" },
    { id: 1, name: "orange", color: "orange" },
    { id: 2, name: "apple", color: "green" },
    { id: 3, name: "lime", color: "green" },
    { id: 4, name: "banana", color: "yellow" },
  ];

  return (
    <div>
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color}></Card>
      ))}
    </div>
  );
}
