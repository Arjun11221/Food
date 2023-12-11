import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo : {
            name : "Dummy",
            location : "Default"
        }
    }
    //console.log(this.props.name + " Constructor Called");
  }

  async componentDidMount() {
    
    const data = await fetch("https://api.github.com/users/Arjun11221");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo : json
    })
  }

  render() {
    const { name, location , avatar_url } = this.state.userInfo;

    //console.log( this.props.name + " Render Called");

    return (
      <div>
        <h2>User Details</h2>
        <h3>Name : {name}</h3>
        <h3>Contact : arjun@gmail.com</h3>
        <h3>Location : {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
