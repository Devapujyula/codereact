import React from "react";

const DataProps = (props) => {
  const { title, price, description, category, imageUrl, rating, count } =
    props;
  return (
    <div>
      <h1>{title || "Random Title"}</h1>
      <h4>Price: ${price}</h4>
      <h3>Category: {category || "Random Category"}</h3>
      <img
        src={imageUrl}
        alt={title}
        style={{ height: "250px", width: "200px" }}
      />
      <br></br>
      <strong>{description || "Random Description"}</strong>
      <h3>Rating: {rating || "Randon Rating"}</h3>
      <h3>count: {count || "Random Counting"}</h3>
    </div>
  );
};

export default DataProps;
