import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const completedLogin = () => {
    return (
      <div className="complete-login">
        <h1>Welcome back, {`${currentUser.username}`}!</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  const needLogin = () => {
    return (
      <nav>
        <h1>Explore what's unique and one of a kind, here.</h1>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </nav>
    )
  }
  console.log(currentUser) //starts null
  return currentUser? completedLogin() : needLogin();
}

export default Greeting;





















// import React from "react";
// import { Link } from "react-router-dom";

// //pass in props from container destructured
// //don't need to write this.props
// //no render(){return()} just return()
// const Greeting = ({currentUser, logout}) => {
//   console.log(logout)
//   const loginComplete = () => {
//     return (
//       <div className="complete-login">
//         <h1>From Greeting, logged in</h1>
//         <h1>Welcome, {currentUser.username}!</h1>
//         <button onClick={logout}>Sign Out</button>
//       </div>
//     )
//   }
//   const needLogin = () => {
//     return (
//       <nav className="pending-login">
//         <h1>From Greeting, not logged in</h1>
//         <Link to={"/signup"}>Sign Up</Link>
//         <br />
//         <Link to={"/login"}>Login</Link>
//       </nav>
//     )
//   }

//   return currentUser? loginComplete() : needLogin();
// };

// export default Greeting;