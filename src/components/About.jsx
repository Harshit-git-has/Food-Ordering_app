
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);

        // console.log("Parent constructor");
    }

    componentDidMount() {
        // console.log("parent component Did Mount")
    }    

    render (){

    //     console.log("Parent Render");
     return ( 
        <div>
            <h1>About class Component</h1>
            <div className=" font-bold">
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-lg  font-bold"> { loggedInUser } </h1>} 
                </UserContext.Consumer>
            </div>
 
           
            <h2> This Is Food Order Website</h2>
            <UserClass name= { "first"} location={" kanpur class"} />
         
        </div>
        );
    }
}


export default About;