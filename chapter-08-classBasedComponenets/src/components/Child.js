import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child-constrctor");
  }

  async componentDidMount() {
    const data = await fetch("https://random.dog/woof.json");
    const json = await data.json();
    console.log("Child-componentDidMount");
    console.log(data);
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Child-componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child-componentWillUnmount")
  }

  render() {
    return (
      <>
        {console.log("Child-render")}
        <h2> Child Component</h2>
        <h3>{this.props.name}</h3>
        <h3>{this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1, count2: 2 })
          }
        >
          count++
        </button>
      </>
    );
  }
}

export default Child;
