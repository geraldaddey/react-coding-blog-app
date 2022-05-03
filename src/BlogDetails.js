import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-detail">
      <h2>Blog Details </h2>

      <h1>ID - {id}</h1>
    </div>
  );
};

export default BlogDetails;
