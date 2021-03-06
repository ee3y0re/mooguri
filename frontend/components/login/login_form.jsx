import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {         
          this.props.errors.map((error, idx) => {
            return (<li className="errors-li" key={`error-${idx}`}>{error}</li>)
          })
        }
      </ul>
    )
  }

  demoLogin(e){
    e.preventDefault();
    const bestUser = Object.assign({}, 
      {
        email: "vanillab@abbymail.com",
        password: "besticecream"
      }
    );
    this.props.processForm(bestUser).then(this.props.closeModal);
  }


  render(){
    return (
      <div className="auth-container">

        <button className="modal-close-x" onClick={this.props.closeModal}>&times;</button>

        {this.props.otherForm}

        <form className="auth-form-box" onSubmit={this.handleSubmit}>
            <h1 className="form-title">Log In</h1>

            <br />

            <label id="login-email">Email:</label>
            <br />
            <input
              id="login-email"
              type="text"
              onChange={this.update("email")}
              className="user-auth-input"/>

            <br />
            
            <label id="login-password">Password:</label>

            <br />

            <input
              id="login-password"
              type="password"
              onChange={this.update("password")}
              className="user-auth-input"/>
              
          <br />

          {this.renderErrors()}

          
          <input id="auth-submit-button" type="submit" value={this.props.formType} />
          <button id="auth-submit-button" onClick={this.demoLogin}>Demo User Login</button>
        </form>
      </div>

    );
  }
}

export default LoginForm;