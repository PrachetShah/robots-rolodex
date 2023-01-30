import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Like UseEffect
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  handleChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    // console.log(filteredArr);
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredArr = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Robots Rolodex</h1>
        <SearchBox
          onChangeHandler={this.handleChange}
          placeholder="Search Monsters"
          className="monster-search-box"
        />
        <CardList monsters={filteredArr} />
      </div>
    );
  }
}

export default App;
