import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  renderErrors() {
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
      <form className="login-form" onSubmit={this.handleSubmit}>
        {this.renderErrors()}
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
        <input type="submit" value={this.props.formType}/>
      </form>
    );
  }
}

export default LoginForm;