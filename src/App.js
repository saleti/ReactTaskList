import React, { Component} from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      list: [],
      count: 0,
      active: true
    };
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    event.target.reset();
    this.setState(prevState => ({
      input: "",
      list: [
        ...prevState.list,
        {
          name: this.state.input,
          done: false
        }
      ]
    }));
 
  };

  strike = item => {
    console.log(item);
    const completedList = this.state.list.find(list => list.name === item.name);
    completedList.done = !completedList.done;
    this.setState(prevState => ({
      list: prevState.list
    }));
  };

  render() {
    const completedList = this.state.list.filter(list => list.done === true);
    return (
      <div className="todo-list">
        <h1>Task List</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit">
            Add
          </button>
        </form>
        <p>
          {this.state.list.length - completedList.length} remaining out of{" "}
          {this.state.list.length}
        </p>
        <ul>
          {this.state.list.map((item, index) => (
            <li
              onClick={() => this.strike(item)}
              key={index}
              className={item.done ? "is-done" : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <style>{`
          .is-done {
              text-decoration: line-through
          }
            `}</style>
      </div>
    );
  }
}
export default App;