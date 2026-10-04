import { useEffect, useState } from "react";

const postStyle = {
  backgroundColor: "#fff",
  border: "1px solid #dce5e8",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 3px 12px rgba(25, 55, 65, 0.07)",
};

const numberStyle = {
  color: "#168b83",
  fontSize: "12px",
  fontWeight: "bold",
  margin: "0 0 10px",
  textTransform: "uppercase",
};

const titleStyle = {
  color: "#193b45",
  fontSize: "19px",
  lineHeight: 1.35,
  margin: "0 0 12px",
  textTransform: "capitalize",
};

const bodyStyle = {
  color: "#52676d",
  fontSize: "15px",
  lineHeight: 1.65,
  margin: 0,
};

const postsStyle = {
  display: "grid",
  gap: "16px",
};

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts.");
        }

        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Something went wrong.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchPosts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <h3>Fetching posts...</h3>;
  }

  if (error) {
    return <h3 style={{ color: "red" }}>{error}</h3>;
  }

  return (
    <div style={postsStyle}>
      {posts.map((post) => (
        <article key={post.id} style={postStyle}>
          <p style={numberStyle}>Post {post.id}</p>
          <h3 style={titleStyle}>{post.title}</h3>
          <p style={bodyStyle}>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default Posts;