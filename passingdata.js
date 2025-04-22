// in command prompt, run the following command
// npx create-react-app@latest my-app
// cd my-app
// in the src folder => remove the code from App.js file and add the below app.js code
// in the src folder => create Child.js file and add the below Child.js code
// run the following command in terminal to start the app
// npm start



// App.js
import React from "react";
import Child from "./Child";
function App() {
  const msg = "Hello from Parent";
  return <Child message={msg} />;
}
export default App;


// Child.js
import React from "react";
export default function Child(props) {
  return <h2>{props.message}</h2>;
}
