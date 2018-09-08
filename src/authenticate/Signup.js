import React, { Component } from 'react';


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state={name:"",email:"",username:"",password:""}
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)

  }
  handleNameChange(event){
    //how to change a property that's passed in w/o changing others

  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
    console.log('e',event.target.value)


  }
  handlePasswordChange(event){

  }
  handleUsernameChange(event){

    this.setState({username: event.target.value})
    console.log('e',event.target.value)
  }
  handleSignupSubmit(event){
event.preventDefault();
//version of app cache
window.localStorage.setItem("name",this.state.name )
console.log (localStorage.getItem("name"));
window.location = "/"


//make sure you use () instead of {} when you're using an object
//this.props.onSignupSubmit(this.state.name);

  }
  render() {
    return (
      <form id="signupInfo">
        <label> name </label>
        <input type="text" onChange={this.handleNameChange}></input>
        <br/>
        <label> email </label>
        <input type ="text" onChange={this.handleEmailChange}></input>
        <br/>
        <label> username </label>
        <input type ="text" onChange={this.handleUsernameChange}></input>
        <br/>
        <label> password </label>
        <input type ="text" ></input>
        <input type="hidden" onChange={this.handlePasswordChange}></input>
        <br/>
        <button id="sumbitButton" onClick={this.handleSignupSubmit}>Submit</button>
      </form>
    );
  }
}

export default Signup;
