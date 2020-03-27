import React, { Component } from "react";
import "bulma/css/bulma.css";

// Import components
import ManyUsers from "./components/manyUsers";

// Import CSS
import "./App.css";

class App extends Component {
  state = {
    userData: []
  };

  loadData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=6");
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
        <p class="userList">Your user list is below!</p>
        <div class="button" onClick={this.handleClick}>
          Get More Users
        </div>
        <ManyUsers userData={userData} />
      </div>
    );
  }
}

export default App;
