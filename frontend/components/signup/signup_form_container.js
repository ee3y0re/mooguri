// //to use Link, you need both react and link
// import React from "react";
// import { Link } from "react-router-dom";
// //need connect to link presentational container and component container
// import { connect } from "react-redux";
// //remember to import the action you want to pass into props
// import { signup } from "../../actions/session_actions";
// //remember to import the presentational component itself
// import SessionForm from "./login_form";

// const mapStateToProps = (state) => {
//   return {
//     errors: state.errors.session,
//     formType: "Sign Up",
//     //to use Link, you need both react and link
//     navLink: <Link to={"/api/users"}>Sign Up</Link>
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     processForm: user => dispatch(signup(user))
//   };
// };

// // export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);