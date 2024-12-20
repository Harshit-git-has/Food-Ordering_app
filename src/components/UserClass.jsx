import React from "react";

class UserClass extends React.Component {

    constructor (props) {
        super (props);

        this.state={
            userInfo : {
                name: "Dumy",
                location: "default",
                avatar_url: "https:// dummy-photo.com"
            }
        };

        // console.log ( this.props.name + "Child constructor");
    }

      async componentDidMount() {
    //     console.log( this.props.name + "Child component Did Mount");
    //    API calls

    const data = await fetch ("https://api.github.com/users/Harshit-git-has");
    const json =  await data.json ();

    this.setState({
        userInfo:json,
    }) 

    // console.log(json);
    }


      render() {

          //    console.log(this.props.name + "Child Render");

          const{ name, location, avatar_url} = this . state.userInfo;

       return(
       <div className = "user-card">
        <img src = "https://avatars.githubusercontent.com/u/132843327?v=4"></img>
        <h2> Name:{name}</h2>
        <h3> Location:{location}</h3>
        <h4> Contact: xyz@gmail.com</h4>
       </div>
       );
    }
}

export default UserClass;