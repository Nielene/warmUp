import React from 'react';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
                  name: "corey ",
                  email: "pursuit",
                  favorite_flavor: "chocolate"
                    }

      this.handleChange = this.handleChange.bind(this);
      // this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    // if(event.target.name === "name") {
    //   this.setState({name: event.target.value})
    // } else if (event.target.name === "email") {
    //   this.setState({email: event.tareget.value})
    // }
  }
  // handleChangeEmail(event) {
  //   debugger
  //   this.setState({email: event.target.value})
  // }

  render() {
    console.log(this.state)
    return(
      <React.Fragment>
        <h1>
          Sign UP!
        </h1>

        <form onChange={this.handleChange}>
          <label htmlFor="name"> Name </label>
          <input  type="text" placeholder="Your Name" name="name" value={this.state.name} id="name" />
          <br />
          <label htmlFor="email"> Email </label>
          <input type="text" placeholder="Your Email" name="email" value={this.state.email} id="email" />
          <br />
          <br />
          Favorite Flavors
          <select name="favorite_flavor" value={this.state.favorite_flavor}>
            <option value="strawberry"> strawberry </option>
            <option value="chocolate"> chocolate </option>
            <option value="vanilla"> vanilla </option>
          </select>

        </form>

      </React.Fragment>
    )
  }
}

export default SignUp;
