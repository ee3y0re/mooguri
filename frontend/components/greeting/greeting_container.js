import { connect } from "react-redux";
import { logout } from "../../actions/session_actions"
import Greeting from "./greeting";

const mapStateToProps = (state) => {
  console.log(state);
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  //GreetingContainer passes as props to the presentational component currentUser from the state
  return {
    currentUser: allUsers[currentUserId]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);


















// import { connect } from "react-redux";
// import { logout } from "../../actions/session_actions";

// /* 
// GreetingContainer passes as props to the presentational component currentUser 
// from the state and the logout action creator.In order to get the current user's 
// information from our state, we will need to use state.session.id to get the id 
// of the current user and then use this id to get the information from 
// state.entities.users. It should look something like 
// state.entities.users[state.session.id]. You can use object de-structuring in 
// your mapStateToProps function to make this look a bit cleaner. Set up 
// mapStateToProps and mapDispatchToProps accordingly. 
// */

// const mapStateToProps = (state) => {
//   let currentId = state.session.id;
//   let allUsers = state.entities.users;
//   return {
//     currentUser: allUsers[currentId]
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: aUser => dispatch(logout(aUser))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
// //remember to add it somewhere on app