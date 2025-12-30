import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/buttons/Button";
import Input from "./components/input/Input";
import ProgressBar from "./components/progressBar/ProgressBar";

function App() {
  return (
    <>
      <div style={{padding:"16px",width:"100px"}}>
        <ProgressBar value={20} visibility={true} />
      </div>
    </>
  );
}

export default App;
