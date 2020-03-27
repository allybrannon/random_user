import React, { Component } from "react";
import "bulma/css/bulma.css";

// Import components
import ManyUsers from "./components/manyUsers";

// Import CSS
import "./App.css";

class App extends Component {
  state = {
    userData: [],
    title: "Here's some random folks"
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    });
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }

  render() {
    const { title, userData } = this.state;
    return (
      <div className="App">
        <h1>{title}</h1>
        <ManyUsers userData={userData} />
        <button onClick={this.handleClick}>Get More Folks</button>
      </div>
    );
  }
}

export default App;
