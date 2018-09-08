import React, { Component } from 'react';
import Slide from './Slide';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

//import logo from 'filepath.jpg'
class Slider extends Component{
  constructor (props){
    super(props);

    this.state = {
      images : ['AHopeDivided','AnAmericanMarriage.jpg','AnExtraordinaryUnion.jpg', 'DesignOfEverydayThings.jpg', 'DontMarryHim.jpg','EmotionalDesign.jpg','TheHouseGirl.jpg','TiffanySly.jpg'],
      currentIndex: 0,
      translateValue:0
    }
    console.log(this.state);
  }
  goToPrevSlide = ()=>{


  }
  goToNextSlide = ()=>{

    if(this.state.currentIndex === this.state.images.length - 1){
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState=>({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }
  slideWidth =() =>{
    return document.querySelector(`.slide`).clientWidth
  }
  render(){
    return(
      <div className = "slider">
        <div className="slider-wrapper"
          style={{
            transform:  `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
      {
        this.state.images.map((image,i)=>{
          return(
          <Slide image ={image }key={i} alt="hi"/>
      // <div key = ""> hi my name is {i}{images} </div>
        )
      })

    }

      </div>
      <Slide/>
        <LeftArrow
          goToPrevSlide ={this.goToPrevSlide}
        />
        <RightArrow
          goToNextSlide ={this.goToNextSlide}
        />

      </div>
    );
  }

}
export default Slider;
