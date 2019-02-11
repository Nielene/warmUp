import React from 'react'
import { Child } from './Child'
import { MishMash } from './MishMash'

import './App.css';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      eyeColor: 'brown',
      name: 'adult',
      hairColor: 'black',
      childsName: 'winnie',
      grandChildHairColor: 'brown'
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleChildNameChange = this.handleChildNameChange.bind(this)
    // this.handleGrandChildHairColorChange = this.handleGrandChildHairColorChange.bind(this)
  }

  // handleChildNameChange = (event) => {
  //   // debugger
  //   this.setState({
  //     childsName: event.target.value
  //   })
  // }

  handleChange = (event) => {
    // debugger
    console.log('changing')
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <>
        Parent Component showing
        <br />
        <br />

        <Child
        eyeColor={this.state.eyeColor}
        name={this.state.name + ' jr'}/>
        <br />
        <br />

        <Child
        eyeColor={this.state.eyeColor}
        name={this.state.childsName}
        changeMyName={this.handleChange}

        grandChildNaturalHairColor={this.state.grandChildNaturalHairColor}
        grandChildHairColor={this.state.grandChildHairColor}/>

        <br />
        <br />

        <MishMash name={this.state.name}
          childsName={this.state.childsName}
          grandChildHairColor={this.state.grandChildHairColor}/>

      </>
    )
  }

}

export default Parent
