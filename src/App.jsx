import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Name></Name>
      <Greetings></Greetings>
    </>
  );
}

function Name() {
  const name = "Shuvo";
  const age = 22;
  const profession = "Web Developer";
  return (
    <div>
      <h1 className="title-style"> Information Desk</h1>
      <h2>Name is: {name}</h2>
      <h2>Age is: {age}</h2>
      <h2>Profession is: {profession}</h2>
    </div>
  );
}

function Greetings() {
  const name = "Nazmul Hasan Shuvo";
  return (
    <div>
      <h2>Greetings!</h2>
      <p>
        Hello dear <span className="name">{name}</span> you're successfully done to create a greetings using
        react
      </p>
    </div>
  );
}

export default App;
