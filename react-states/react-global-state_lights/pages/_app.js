import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const lightsCount = lights.filter((light) => light.isOn).length;
  console.log("Lights count:", lightsCount);

  function handleToggle(lightId) {
    setLights((prevLights) =>
      prevLights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsOn() {
    console.log("Turning all lights on...");
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: true }))
    );
  }

  function handleAllLightsOff() {
    console.log("Turning all lights off...");
    setLights((prevLights) =>
      prevLights.map((light) => ({ ...light, isOn: false }))
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        lightsCount={lightsCount}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
      />
    </Layout>
  );
}

// <Component> is actually Pages
// You pass props from App to the Page and then from the Page to the Component
