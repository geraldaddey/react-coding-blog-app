import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="blog-preview">{blogs && <BlogList blogs={blogs} />}</div>
  );
};

export default Blog;
