import React from "react";

const EgProps = (props) => {
  return (
    <div>
      <img
        src={props.imageUrl}
        alt="Double Ismart Shankar"
        style={{ height: "300px", width: "250px" }}
      />
      <h1>{props.title || "Random Title"}</h1>
      <h2>{props.heroName}</h2>
    </div>
  );
};

// function getData(firstName, lastName) {
//   console.log(firstName);
//   console.log(lastName);
// }
// getData("Prakash", "Satya");

export default EgProps;
