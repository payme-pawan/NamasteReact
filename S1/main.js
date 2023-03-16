const heading1 = React.createElement("h1", {
    id: "heading1",
    class: "heading"
}, "Welcome to React");

const heading2 = React.createElement("h2",{
    id: "heading2",
    className: "heading"
},"React is a Javascript Library");

console.log(heading1);

const container = React.createElement("div",{
    id: "container",
    className: "outer"
},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render adds the element to the root in the dom tree 

root.render(container);

