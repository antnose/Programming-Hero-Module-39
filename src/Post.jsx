import { useEffect, useState } from "react";
import SinglePost from "./SinglePost";

function Post() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      {post.map((po) => (
        <SinglePost p={po} />
      ))}
    </>
  );
}

export default Post;

/**
 * 1. State to hold data
 * 2. useEffect with dependency array
 * 3. use fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */
