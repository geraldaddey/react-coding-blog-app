import { useState } from "react";
import BlogList from "./BlogList";
import "./home.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor sit amet",
      author: "Gerald",
    },
    {
      title: "My new book",
      body: "Lorem ipsum dolor sit amet",
      author: "Kweku",
    },
    {
      title: "My new web3 roadmap",
      body: "Lorem ipsum dolor sit amet",
      author: "Quansah",
    },
  ]);

  return (
    <div className="blog-home">
      <BlogList blogs={blogs} />;
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Gerald")}
        title="Gerald's Blogs"
      />
    </div>
  );
};

export default Blog;
