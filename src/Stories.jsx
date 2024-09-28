import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits } = useGlobalContext();
  let isLoading = true;

  //   if (isLoading) {
  //     return (
  //       <>
  //         <h1>Loading......</h1>
  //       </>
  //     );
  //   }
  return (
    <>
      <h2>My teh news post</h2>
      {hits.map((curPost) => {
        return (
          <>
            <h2>{curPost.title}</h2>
          </>
        );
      })}
    </>
  );
};

export default Stories;
