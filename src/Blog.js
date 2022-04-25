import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "./home.css";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsLoading(false);
          setBlogs(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
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
