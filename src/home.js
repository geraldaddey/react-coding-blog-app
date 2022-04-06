import "./home.css";

function Home() {
  const homeName = "Addey";
  const firstChild = "Ronald";
  const secondChild = "Gerald";

  return (
    <div className="home">
      <h1>HOME BIOGRAPHY APP</h1>
      <p>Members and their intel</p>

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
