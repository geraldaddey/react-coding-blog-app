// Add styles to your component
import "./App.css";
import "./home.css";
import Home from "./home";
import Blog from "./Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";

function App() {
  // const link = "http://www.google.com";

  // const handleClick = () => {
  //   console.log(title);
  // };

  // const handleClickAgain = (name) => {
  //   console.log("new name is " + title + " " + name);
  // };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Export component after creating it to be used in externaal   sheets

export default App;
