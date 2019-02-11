import React from 'react';

class WarmUp extends React.Component {
  constructor () {
    super();
    this.state = {
      data: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
 // debugger
    this.setState({ data: event.target.value})
  }
  //setState re-renders

  handleMultipleChanges(event){
 // debugger
    this.setState({ [event.target.name]: event.target.value})
  }

  //could separate funciton:
  reverseWord() {
    return this.state.data.split('').reverse().join('')
  }

  render(){
    // let {data} = this.state
    return(
      <>
      Type your words {' '}
        <input onChange={this.handleChange} type='text' name='data' value={this.state.data}/>

        <p>{this.state.data.split('').reverse().join('')}</p>
        <p>{this.reverseWord()}</p>
      </>
    )
  }
}

export default WarmUp;
