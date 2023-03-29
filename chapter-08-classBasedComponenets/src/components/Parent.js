import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    console.log("Parent-constrctor");
  }

  componentDidMount() {
    console.log("Parent-componentDidMount");
  }

  render() {
    return (
      <>
        {console.log("Parent-render")}
        <h1>Parent Component</h1>
        <Child name="Pawan" />
        <Child name="Yadav" />
      </>
    );
  }
}

export default Parent;
