import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  if (hits.length === 0) {
    return <h1>No stories found.</h1>;
  }

  return (
    <div className="stories-div">
      {hits.map((curPost) => {
        const { title, author, objectID, url, num_comments } = curPost;
        return (
          <div className="card" key={objectID}>
            <h2>{title ? title : "No Title"}</h2>
            <p>
              By <span>{author}</span> | <span>{num_comments}</span> comments
            </p>
            <div className="card-button">
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              )}
              <button onClick={() => removePost(objectID)}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
