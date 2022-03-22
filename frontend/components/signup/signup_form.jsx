import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    // debugger;
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
    this.props.history.push("/")
  }

  update(field) {
    return(e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  renderErrors(){
    return (
      <ul>
        {
          this.props.errors.map((error, idx) => {
            return (<li key={`error-${idx}`}>{error}</li>)
          })
        }
      </ul>
    )
  }  
  render(){
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <label>Username:
          <input
            type="text"
            onChange={this.update("username")}
          />
        </label> 
        <br />
        <label>Email:
          <input
            type="text"
            onChange={this.update("email")}
          />
        </label>
        <br />
        <label>Password:
          <input
            type="password"
            onChange={this.update("password")}
          />
        </label>
        <br />
        <input type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default SignupForm;