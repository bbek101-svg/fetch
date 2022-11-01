import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ArticleRow from "./ArticleRow";

function Article() {
  const [posts, setPosts] = useState([]);

  const articles = useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full h-screen">
      <div className="max-w-[1248px] p-4 grid grid-cols-1 m-auto md:grid-cols-3 justify-center items-center ">
        {posts.map((article) => (
          <ArticleRow article={article} />
        ))}
      </div>
    </div>
  );
}

export default Article;
