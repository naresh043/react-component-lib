import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Button>Primary</Button>
     <Button size="lg" variant="danger">
        Submit
      </Button>
      <Input type="email" placeholder="Enter Email"  onChange={(e) => console.log(e.target.value)} />
    </>
  );
}

export default App;
