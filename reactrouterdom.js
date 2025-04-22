// in command prompt, run the following command
// npx create-react-app@latest my-app
// cd my-app
// npm install react-router-dom
// in src folder => App.js file => remove the code and add the below code
// run the following command in terminal to start the app
// npm start



// App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
