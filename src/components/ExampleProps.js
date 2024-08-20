import React from "react";

/*
function ExampleProps(props) {
  return (
    <div>
      <h1>Hello{props.name}</h1>
    </div>
  );
}
export default ExampleProps;

*/
const ExampleProps = ({ name, FamilyDesignation, children }) => {
  return (
    <div>
      <h1>
        Hello {name} as {FamilyDesignation}
      </h1>
      {children}
      {/* {props.children} */}
    </div>
  );
};

export default ExampleProps;
