import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();
    console.log("Parent-constrctor");
  }

  async componentDidMount() {
    const data = await fetch("https://random.dog/woof.json");
    const json = await data.json();
    console.log("Parent-componentDidMount");
    console.log(data);
    console.log(json);
  }


  componentDidUpdate() {
    console.log("Parent-componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("Parent-componentWillUnmount")
  }

  render() {
    return (
      <>
        {console.log("Parent-render")}
        <h1>Parent Component</h1>
        <Child name="Pawan" />
      </>
    );
  }
}

export default Parent;
