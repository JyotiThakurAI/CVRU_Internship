import { useState } from "react";

function BlogCard({ title, category, date, description, content }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <article className="blog-card">
      <div className="blog-info">
        <strong>{category}</strong>
        <span>{date}</span>
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      {showContent && <p>{content}</p>}

      <button onClick={() => setShowContent(!showContent)}>
        {showContent ? "Read Less" : "Read More"}
      </button>
    </article>
  );
}

export default BlogCard;