import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import Stories from "./Stories";
// import { useGlobalContext } from "./Context";

const App = () => {
  // const data = useGlobalContext();
  return (
    <>
      <div>Welcome to my website</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
