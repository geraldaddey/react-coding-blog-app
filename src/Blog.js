import { useState } from "react";
import BlogList from "./BlogList";
import "./home.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor sit amet",
      author: "Gerald",
      id: 1,
    },
    {
      title: "My new book",
      body: "Lorem ipsum dolor sit amet",
      author: "Gerald",
      id: 2,
    },
    {
      title: "My new web3 roadmap",
      body: "Lorem ipsum dolor sit amet",
      author: "Quansah",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="blog-home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />;
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "Gerald")}
        title="Gerald's Blogs"
      /> */}
    </div>
  );
};

export default Blog;
