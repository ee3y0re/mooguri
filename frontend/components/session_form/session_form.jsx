import React from "react";

class SessionForm extends React.Component {
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


  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.formType}</h1>
        {
          this.props.errors.map((error) => {
            return <li key={this.props.errors}>{error}</li>
          })
        }
        <label>Email:
          <input type="text"/>
        </label>
        <br />
        <label>Password:
          <input type="password" />
        </label>
        {this.props.navLink}
      </form>
    );
  }
}

export default SessionForm;