import logo from "./logo.svg";

// Add styles to your component
import "./App.css";

function App() {
  // We  can declare any variable here and use it in the JSX

  const title = "Mr Gerald Addey";
  const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <h1>Blog App created by {title} </h1>
        <p>{10}</p>
        <p>{"hello, guys"}</p>
        <p>The picture had {likes} likes in total.</p>
        <p>{Math.random() * 10}</p>
        <a href={link}> Google Home Page</a>
        <p className="footer">Gerald Addey</p>
      </div>
    </div>
  );
}

// Export component after creating it to be used in externaal   sheets
export default App;
