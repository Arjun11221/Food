import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent Constructor Called");

   
  }

  async componentDidMount() {
    //console.log("Parent Component DidMount");
    const data = await fetch("https://api.github.com/users/Arjun11221");
    const json = await data.json();
    console.log(json);
    this.setState({
        userInfo : json
    })
  }

  render() {
    //console.log("Parent Render Called");

    return (
      <div>
        <h1>Hello Guys</h1>
        <UserClass name={"First"} location={"Delhi"} />
      </div>
    );
  }
}

export default About;
