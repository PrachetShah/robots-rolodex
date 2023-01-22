import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log("Constructor");
  }

  // Like UseEffect
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    console.log("Mount Component");
  }

  render() {
    console.log("Render");
    return (
      <div className="App">
        <input
          className="search-box"
          placeholder="Search Monsters"
          type="search"
          onChange={(event) => {
            console.log(event.target.value);
            const searchStr = event.target.value.toLowerCase();

            const filteredArr = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchStr);
            });

            // console.log(filteredArr);
            this.setState({ monsters: filteredArr });
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
