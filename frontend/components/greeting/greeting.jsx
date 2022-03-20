// import React from "react";
// import { Link } from "react-router-dom";

// // function component with destructured props
// //currentUser comes from mapStateToProps
// //logout comes from mapDispatchToProps
// const Greeting = ({ currentUser, logout }) {
//   //we don't need to keep track of state
//   //we don't need a render since we aren't using a class component

//   /*
//   If the user is not logged in, then the Greeting should contain:

//   A <Link to> /signup
//   A <Link to> /login
//   */

//   const notLoggedIn = () => {
//     return (
//       <nav className="not-logged-in-greet">
//         <Link to={"/api/session"}></Link>
//         <Link to={"/api/users"}></Link>
//       </nav>
//     );
//   };

//   /*
//   If the user is logged in, then the Greeting should contain:

//   A welcome message including the user's username
//   A button to logout
//   */

//   const loggedIn = () => {
//     return (
//       <div className="logged-in-greet">
//         <h1>Hi old friend, {currentUser.username}~ C;</h1>
//         <button></button>
//       </div>
//     )
//   }
// };

// export default Greeting;

// // const Greeting = ({ currentUser, logout }) => {
// //   const sessionLinks = () => (
// //     <nav className="login-signup">
// //       <Link to=>Login</Link>
// //       &nbsp;or&nbsp;
// //       <Link to="/signup">Sign up!</Link>
// //     </nav>
// //   );
// //   const personalGreeting = () => (
// //     <hgroup className="header-group">
// //       <h2 className="header-name">Hi, {currentUser.username}!</h2>
// //       <button className="header-button" onClick={logout}>Log Out</button>
// //     </hgroup>
// //   );

// //   return currentUser ? personalGreeting() : sessionLinks();
// // };


// // export default Greeting;
