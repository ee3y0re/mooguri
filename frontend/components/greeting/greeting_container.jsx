// /* GreetingContainer passes as props to the presentational component currentUser 
// from the state and the logout action creator.In order to get the current user's 
// information from our state, we will need to use state.session.id to get the id 
// of the current user and then use this id to get the information from 
// state.entities.users. It should look something like 
// state.entities.users[state.session.id]. You can use object de-structuring in 
// your mapStateToProps function to make this look a bit cleaner. Set up 
// mapStateToProps and mapDispatchToProps accordingly. */

// import { connect } from "react-redux"; //to connect mstp, mdtp and the presentational
// import { logout } from "../../actions/session_actions"; //import the action to map to props
// import Greeting from "./greeting"; //import the presentational component

// /*
// Prompt
// GreetingContainer passes as props to the presentational component currentUser 
// from the state and the logout action creator. In order to get the current user's 
// information from our state, we will need to use state.session.id to get the id 
// of the current user and then use this id to get the information from 
// state.entities.users. It should look something like 
// state.entities.users[state.session.id]. You can use object de-structuring in 
// your mapStateToProps function to make this look a bit cleaner. Set up 
// mapStateToProps and mapDispatchToProps accordingly.
// */

// //we want to destructure so that we get only portions of state
// //to get currentUser, their id would be stored into session when logged in
// //then we use that stored id to go into entities and users to get the user object
// //we key into the user's object for the correct user using session.id
// //we take that session.id and pass into user to store as a prop

// /*
// entities:
//   users: {}
// errors:
//   session: []
// session:
//   id: null
// */
// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id]
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Greeting);