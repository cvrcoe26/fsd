// in command prompt, run the following command
// npx create-react-app@latest my-app
// cd my-app
// replace the below code in the src/App.js file and create a new file named Child.js
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
