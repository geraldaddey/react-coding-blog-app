const BlogList = ({ blogs, title }) => {
  return (
    <div className="bloglist-preview">
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
