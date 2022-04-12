import "./home.css";
import { useState } from "react";

function Home() {
  const homeName = "Addey";
  const firstChild = "Ronald";
  const secondChild = "Gerald";

  const [name, setName] = useState("Gerald");
  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName("Quansah");
    setAge(24);
  };

  return (
    <div className="home">
      <h1>HOME BIOGRAPHY APP</h1>
      <p>Members and their intel</p>

      <p>
        {name} is {age} years old in 2022
      </p>

      <button onClick={handleClick}>Click to refresh data</button>

      <br />

      <span>
        {firstChild} is the brother of {secondChild}.
      </span>
      <div className="box">
        <p>FAMILY TREE</p>
      </div>
    </div>
  );
}

export default Home;
