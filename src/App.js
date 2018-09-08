import React, { Component } from 'react';

import './App.css';
import Signup from './authenticate/Signup';
//import Slider from './slider/Slider'
import NavBar from './authenticate/NavBar';
import './BodyGrid.css';
import DropDownBar from './authenticate/DropDownBar';
import AHopeDivided from './images/AHopeDivided.jpg';
import AnAmericanMarriage from './images/AnAmericanMarriage.jpg';
import AnExtraordinaryUnion from './images/AnExtraordinaryUnion.jpg';
import DesignOfEverydayThings from './images/DesignOfEverydayThings.jpg';
import TheHouseGirl from './images/TheHouseGirl.jpg';
import EmotionalDesign from './images/EmotionalDesign.jpg';
import DontMarryHim from './images/DontMarryHim.jpg';
import TiffanySly from './images/TiffanySly.jpg';


class App extends Component {

  constructor(){
    super()
    this.state={name:""}
    this.nameChange = this.nameChange.bind(this)
  }
  nameChange(name){
    console.log("the name change ever is set up correctly",name)
    this.setState({name:name})
  }
  render() {
    return (
      <div class="App">

      <DropDownBar/>
      <NavBar />
    <div class="grid">
        <img src={AHopeDivided} class="module" alt="a hope divided"/>
        <img src={AnAmericanMarriage}  class="module" alt="AnAmericanMarriage"/>
        <img src={AnExtraordinaryUnion}  class="module"alt="AnExtraordinaryUnion"/>
        <img src={DesignOfEverydayThings}  class="module" alt="DesignOfEverydayThings"/>
        <img src={DontMarryHim}  class="module" alt="DontMarryHim"/>
        <img src={EmotionalDesign}  class="module" alt="EmotionalDesign"/>
        <img src={TheHouseGirl} class="module" alt="TheHouseGirl"/>
        <img src={TiffanySly} class="module" alt="TiffanySly"/>
      </div>



        <Signup onSignupSubmit={this.nameChange}/>

      </div>
    );
  }
}

export default App;
