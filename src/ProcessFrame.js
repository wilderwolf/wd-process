import React, { Component } from 'react';
import './App.css';

import Draggable from 'react-draggable';


const settings = {
    frame:{
        ratio: 5/16
    }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        sliderPosition: 0.5
    };
  }

  componentDidMount() {

  }

  render() {

    const height = this.calcHeight()
    const sliderCoordinates = this.calcSliderCoordinates()
    const agileWidth = this.calcAgileWidth()
    const devWidth = this.calcDevWidth()
    

    return (
        <div className="wd-process__frame" style={{height: height}}>
            <div className="wd-process__agile" style={{width: agileWidth}}></div>
            <div className="wd-process__development" style={{width: devWidth}}></div>
            <Slider position={sliderCoordinates} height={height} width={this.props.width}/>
        </div>
    );
  }

  calcHeight = () => this.props.width * settings.frame.ratio
  calcAgileWidth = () => this.props.width * this.state.sliderPosition
  calcDevWidth = () => this.props.width - this.calcAgileWidth()


  calcSliderCoordinates = () => {
      return this.props.width * this.state.sliderPosition
  }  

}

export default App;




class Slider extends Component {

    render() { 
        console.log(this.props)
        return (
            <Draggable
                axis="x"
                defaultPosition={{x: 200, y: 0}}
                bounds={{left: 0, right: this.props.width - 30}}
                handle=".wd-process__slider"
                style={{
                    left: this.props.position,
                    height: this.props.height
                }}
            >
            <div className="wd-process__slider" style={{height: this.props.height}}>
                
            </div>
            </Draggable>
    );
  }
}