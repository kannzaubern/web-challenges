import React from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}

export function Boxes({ color }) {
  return (
    <>
      <Box color="#ff0000" />
      <Box color="#fc3" />
      <Box color="#239129" />
    </>
  );
}
