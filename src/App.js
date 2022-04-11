// Add styles to your component
import "./App.css";
import "./home.css";

function App() {
  // We  can declare any variable here and use it in the JSX

  const title = "Gerald Addey";
  // const likes = 50;
  const link = "http://www.google.com";

  return (
    <div className="App">
      <div className="content">
        <p>Food Blog</p>

        <div className="links">
          <a href="/home">Home</a>
          <a href="/create">New Blog</a>
          <a href={link}>About Us</a>
        </div>

        <div className="footer"> {title} </div>
      </div>
    </div>
  );
}

// Export component after creating it to be used in externaal   sheets

export default App;
