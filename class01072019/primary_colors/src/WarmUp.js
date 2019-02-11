import React from 'react';
import './WarmUp.css';

class WarmUp extends React.Component {
  constructor() {
    super();
    this.state = {
                  colorArray: ["red", "blue", "yellow"],
                  colorIdx: 0
                    }
      this.handleClick = this.handleClick.bind(this);

  }

  handleClick = () => {
    let{ colorIdx, colorArray } = this.state;
    this.setState({ colorIdx: (colorIdx + 1) % colorArray.length })
  }

  render() {
    let {colorArray, colorIdx} = this.state
    return(
      <>
        <div id="primaryColor" className={colorArray[colorIdx]}></div>
        <button onClick={this.handleClick}>Click For Primary!</button>
      </>
    )
  }
}

export default WarmUp;
//
// class Animal extends Creature {
//   constructor(name, species) {
//     super(name)
//     this.species = species
//   }
// }
//
// human = new Animal('corey', 'cat');
