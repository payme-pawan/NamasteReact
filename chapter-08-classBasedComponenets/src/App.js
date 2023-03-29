import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./components/Parent";
import Child from "./components/Child";

class App extends React.Component {

  render() {
    return (
      <>
        <Parent />
      </>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
