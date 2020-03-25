import React, { Component } from "react";
import "../App.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      photo: "",
      gender: ""
    };
  }

  getUserInfo = async () => {
    const response = await fetch("https://randomuser.me/api/?results=1");
    const data = await response.json();
    return data.results[0];
  };

  async componentDidMount() {
    const userData = await this.getUserInfo();
    this.setState({
      firstName: userData.name.first,
      lastName: userData.name.last,
      photo: userData.picture.large,
      gender: userData.gender
    });
  }
  render() {
    const { firstName, lastName, photo, gender } = this.state;
    return (
      <header>
        <div class="frame card_offset">
          <div class="card">
            <div class="user_photo horizontal_center" id="user_photo">
              <img src={photo} alt="user image" />
            </div>

            <p id="user_title">Hi my Name is</p>
            <p id="user_value">
              {firstName} {lastName}
            </p>
          </div>
        </div>
      </header>
    );
  }
}
export default User;
