import React from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "getStories":
        return {
          ...state,
          hits: action.payload.hits,
          nbpages: action.payload.nbPages,
        };
    }
  };
  return <div>Reducer</div>;
};

export default Reducer;
