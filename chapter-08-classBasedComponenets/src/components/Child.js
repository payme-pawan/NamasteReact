import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child-constrctor");
  }
    
    componentDidMount() {
        console.log("Child-componentDidMount");
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
        <h3>{this.state.count2}</h3>
      </>
    );
  }
}

export default Child;
