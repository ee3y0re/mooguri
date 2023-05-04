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

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user).then(this.props.closeModal);
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
      <div className="auth-container">

        <button className="modal-close-x" onClick={this.props.closeModal}>&times;</button>

        <form className="auth-form-box" onSubmit={this.handleSubmit}>

          <div className="auth-form-content">

            <h1 className="form-title">Sign Up</h1>

            <br />

            <label id="signup-username">Username:</label>
            <br />
            <input
              id="signup-username"
              type="text"
              onChange={this.update("username")}
              className="user-auth-input"/>
            <br />

            <label id="signup-email">Email:</label>
            <br />
            <input
              id="signup-email"
              type="text"
              onChange={this.update("email")}
              className="user-auth-input"/>

            <br />

            <label id="signup-password">Password:</label>

            <br />

            <input
              id="signup-password"
              type="password"
              onChange={this.update("password")}
              className="user-auth-input"/>

            <br />

            {this.renderErrors()}
            
            <input id="auth-submit-button" type="submit" value={this.props.formType} />
          </div>
          
        </form>
      </div>
      
    )
  }
}

export default SignupForm;