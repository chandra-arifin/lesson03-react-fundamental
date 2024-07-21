import { Link, useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <div>
        <h2>My Blogs Posts</h2>

        {posts.map((item, index) => (
          <div key={index}>
            <Link to={`/blog/${item.id}`}>{item.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
