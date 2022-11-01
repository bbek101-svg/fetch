import React from "react";

function ArticleRow({ article }) {
  return (
    <div className="border-red-200 border-2 p-4 m-4 radius-lg">
      <h1 className="md:text-2xl break-words mb-4">{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
}

export default ArticleRow;
