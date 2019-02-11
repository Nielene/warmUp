import React from 'react';
//capital => a constant. dont mutate this
class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      birthdate: '',
      day: '',
      month:'',
      year: '',
      favorite_cuisine: '',
      favorite_primary: '',

    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    debugger
  }

  displayDate() {
    return(
      <div>
        <select name='day' value={this.state.day}>
          <option disabled> day</option>
          {this.displayRange(1, 31)}
        </select>

        <select name='year' value={this.state.year}>
          <option disabled> year</option>
          {this.displayRange(1900, 2019)}
        </select>
      </div>
    )
  }
//map takes in callback function
// parentheses () are implicit reutrn. corey will write return so he will use {}. its fine.
  displayRange(min, max) {
    let nums = [];
    for (let i = min; i <= max; i++) {
      nums.push(i);
    }
    return nums.map(num => {
      return <option value={num}>{num}</option>
    })
  }

  displayMonth() {
    return(
      <div>
        <select name='month' value={this.state.month}>
        <option disabled> month</option>
        {this.createMonth()}
        </select>
      </div>
    )
  }

  createMonth() {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = months[0]; i < months.length; i++) {
      months.push(i);
    }
    return months.map(months => {
      return <option value={months}>{months}</option>
    })
  }

//htmlFor points at aeh id of what it is referring to. 'name' identical
// event delegation or ..
//checked={this.state.favorite_cuisine === 'chinese'} evals to true or false
  render() {
    console.log(this.state);
    return(
      <>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' value={this.state.name}/>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' value={this.state.email}/>
          {this.displayMonth()}
          {this.displayDate()}

          <label htmlFor='radio'>Chinese</label>
          <input type='radio' id='chinese' name='favorite_cuisine' value='chinese' checked={this.state.favorite_cuisine === 'chinese'}/>

          <label htmlFor='radio'>Italian</label>
          <input type='radio' id='italian' name='favorite_cuisine' value='italian' checked={this.state.favorite_cuisine === 'italian'}/>

          <input type='submit' value='SUBMIT'/>
        </form>
      </>
    )
  }
}

export default Profile;
