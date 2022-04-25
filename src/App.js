// Add styles to your component
import "./App.css";
import "./home.css";
import Home from "./home";
import Blog from "./Blog";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


  const link = "http://www.google.com";

  const handleClick = () => {
    console.log(title);
  };

  const handleClickAgain = (name) => {
    console.log("new name is " + title + " " + name);
  };

  return (
    <div className="App">
      {/* <Home /> */}
      <Blog />

      {/* <div className="content">
        <p>Food Blog</p>

        <div className="links">
          <a href="/home">Home</a>
          <a href="/create">New Blog</a>
          <a href={link}>About Us</a>
        </div>

        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClickAgain("mario")}>
          Click ME AGAIN
        </button>

        <div className="footer"> {title} </div>
      </div> */}
    </div>
  );
}

// Export component after creating it to be used in externaal   sheets

export default App;
