import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "./home.css";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw Error("could not fetch that resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => setError(err.message));
    setIsLoading(false);
  }, []);

  return (
    <div className="blog-preview">
      {error && <div> {error} </div>}
      {isLoading && <div> Loading ....</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Blog;
