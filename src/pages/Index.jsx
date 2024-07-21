import Article from "../components/Article";
import postsData from "../data/posts.json";
import Search from "../components/Search";
import { useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(postsData.length);

  const onSearchChangeParent = (value) => {
    const filterPosts = postsData.filter((item) =>
      item.title.toUpperCase().includes(value.toUpperCase())
    );
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };

  return (
    <>
      <div>
        <h1>Simple Blogs</h1>
        <Search onSearchChange={onSearchChangeParent} totalPosts={totalPosts} />

        {posts.map((props, index) => (
          <Article {...props} key={index} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
