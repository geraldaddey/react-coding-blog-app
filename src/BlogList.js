const BlogList = ({ blogs, title }) => {
  return (
    <div className="bloglist-preview">
      <h2 style={{ color: "red", fontSize: "2rem" }}>Gerald's Book</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.auhtor} </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
