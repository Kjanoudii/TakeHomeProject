// import Image from "next/image";
"use client";
import { useState } from "react";
export default function Home() {
  const [query, setQuery] = useState("");
  const articles = [
    {
      id: 1,
      title: "Introduction to React",
      content:
        "A comprehensive guide to learning React, including its key concepts like components, state, and props.",
    },
    {
      id: 2,
      title: "Mastering JavaScript",
      content:
        "Advanced tips and tricks for writing cleaner and more efficient JavaScript code.",
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      content:
        "A detailed look at modern CSS techniques to style your web pages effectively.",
    },
    {
      id: 4,
      title: "In-Depth React Features",
      content:
        "Deep dive into advanced React topics such as hooks, context, and performance optimization.",
    },
    {
      id: 5,
      title: "CSS Grid Layout",
      content:
        "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template- and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to d",
    },
  ];

  
  const HighlightedText = ({ text, highlight }) => {
    if (!highlight.trim()) return text;

  
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index} className="bg-yellow-300">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="p-4 px-20">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="border border-gray-300 p-2 rounded-md w-full mb-4"
      />
      <div className="bg-gray-100 p-4 rounded-md mt-8">
        {articles.map((article) => (
          <div key={article.id} className="mb-4 mt-5">
            <h2 className="text-xl font-bold">
              <HighlightedText text={article.title} highlight={query} />
            </h2>
            <p>
              <HighlightedText text={article.content} highlight={query} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
