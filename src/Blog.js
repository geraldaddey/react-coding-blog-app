import { useState } from "react";
import BlogList from "./BlogList";
import "./home.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "Lorem ipsum dolor sit amet",
      auhtor: "Gerald",
    },
    {
      title: "My new book",
      body: "Lorem ipsum dolor sit amet",
      auhtor: "Kweku",
    },
    {
      title: "My new web3 roadmap",
      body: "Lorem ipsum dolor sit amet",
      auhtor: "Quansah",
    },
  ]);
  return <BlogList blogs={blogs} title="Gerald's Books" />;
};

export default Blog;
