import { useState } from "react";

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
  return (
    <div className="Blog">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.auhtor} </p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
