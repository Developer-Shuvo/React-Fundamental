import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Aarong.css";
import "./Aarong.jsx"
import ConditionalRendering from "./Conditional-randering.jsx";


// Define DressBrand component if not already defined or imported
function DressBrand({ name, lowestPrice, highestPrice }) {
  return (
    <div className="dress-brand">
      <h2>{name}</h2>
      <p>Lowest Price: {lowestPrice}</p>
      <p>Highest Price: {highestPrice}</p>
    </div>
  );
}

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
      {/* ----------------------------------------------- */} <DressBrand name="Aarong" lowestPrice="$50" highestPrice="$500"></DressBrand>
      <Name></Name>
      <Greetings></Greetings>
      <Device name="MacBook Pro" price="$1999"></Device>
      <Device name="iphone" price="$2000"></Device>
      <Device name="Watch" price="$200"></Device>
      <Device name="Trimmer" price="$80"></Device>
      <Company
        name="Star Tech"
        address="Dhaka, Bangladesh"
        service="IT Solutions"
      ></Company>
      <Company
        name="Rayans"
        address="Dhaka, Bangladesh"
        service="IT Solutions"
      ></Company>
      <Company
        name="Business IT"
        address="Dhaka, Bangladesh"
        service="IT Solutions"
      ></Company>
      <Cycle name="Mountain Bike" price="$500" brand="Trek"></Cycle>
      <Cycle name="Speed Bike" price="$500" brand="Giant"></Cycle>
      <Cycle name="Normal Bike" price="$500" brand="Trek"></Cycle>


<ConditionalRendering task= "Finish Learning React Immediately" isDone="YES"></ConditionalRendering>
      {/* ----------------------------------------------- */}
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
        Hello dear <span className="name">{name}</span> you're successfully done
        to create a greetings using react
      </p>
    </div>
  );
}

// Dynamically props using
function Cycle(props) {
  return (
    <div className="cycle-info">
      <h2>Cycle Information Using props</h2>

      <p>Cycle Name: {props.name}</p>
      <p>Cycle Price: {props.price}</p>
      <p>Brand : {props.brand}</p>
    </div>
  );
}

// Dynamically destructuring using
function Device({ name, price }) {
  return (
    <div className="device-info">
      <h2>Device Information</h2>
      <p>Device Name: {name} </p>
      <p>
        Price: <span className="price">{price}</span>{" "}
      </p>
    </div>
  );
}

function Company({ name, address, service }) {
  return (
    <div>
      <h1>Company Information</h1>
      <p>Company Name: {name}</p>
      <p>Company Address: {address}</p>
      <p>Company Service: {service}</p>
    </div>
  );
}

export default App;
