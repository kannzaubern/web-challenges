export default function App() {
  //return <Greeting name="Maria" />;
  return <Greeting name="Gimena" />;
}

export function Greeting({ name }) {
  return <h1>Hello {name == "Gimena" ? "Coach!" : name}</h1>;
}

/*
export function Greeting({ name, isCoach }) {
  if (isCoach) {
    name = "Gimena" || "Klaus" || "Fatima";
    return <h1>Hello Coach!</h1>;
  } else {
    return <h1>Hello {name}</h1>;
  }
}
*/
