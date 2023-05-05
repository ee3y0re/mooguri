import React from "react";
import "./AuthForm.scss";
import Button from "../../../components/buttons/Button";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.stateStart;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  };

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return <li key={`error-${idx}`}>{error}</li>;
        })}
      </ul>
    );
  }

  render() {
    const isSignup = this.props.formType === "Sign Up";
    return (
      <div className="auth-container">
        <h3>{this.props.formType}</h3>
        {isSignup && <p className="auth-subtext">Registration is easy</p>}
        {isSignup && (
          <>
            <label className="auth-label">Username:</label>
            <input
              className="auth-input"
              type="text"
              onChange={this.update("username")}
            />
          </>
        )}
        {!isSignup && this.props.otherForm}
        <label className="auth-label">Email:</label>
        <input
          className="auth-input"
          type="text"
          onChange={this.update("email")}
        />
        <label className="auth-label">Password:</label>
        <input
          className="auth-input"
          type="password"
          onChange={this.update("password")}
        />
        {this.renderErrors()}
        <Button type="submit" styleKey="filled">
          {this.props.formType}
        </Button>
      </div>
    );
  }
}

export default AuthForm;
