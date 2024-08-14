import React from "react";

/*
function FunctionalComponent() {
  return (
    <div>
      <h1>Welcome to Functional Component...!</h1>
    </div>
  );
}

 ******* Named Exports **********
 export FunctionalComponent = () => <h1>Welcome...!</h2>
 here we have to export exactly the name of the function in App.js file with curly{} braces {FunctionalComponent}
  */

const FunctionalComponent = () => (
  <div>
    <h1>Welcome to ES-6 Arrow function based Functional Component</h1>
  </div>
);

export default FunctionalComponent;
