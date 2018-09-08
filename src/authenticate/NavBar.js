import React, { Component } from 'react';
//import './Navbar.css';

class NavBar extends Component {
  constructor() {
    super();
  (localStorage.getItem("name")) ? this.name = localStorage.getItem("name") : this.name ="";
}


closeMenu() {
  this.setState({ showMenu: false }, () => {
    document.removeEventListener('click', this.closeMenu);
  });
}

//make sure you use () instead of {} when you're using an object
//this.props.onSignupSubmit(this.state.name);


  render() {
    return (
    <div id ="navbar">
    Aitza B Portfolio
    {this.name}
    </div>


    );
  }
}

export default NavBar;
