import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

const App = () => {
  return (
    <div>
      <StarRating numberOfStars={5} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
