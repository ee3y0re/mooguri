// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers/root_reducer';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

// //initiatin an array with thunk
// const middlewares = [thunk];

// //for security
// //only shows data when testing and hides when in production
// if (process.env.NODE_ENV !== "production") {
//   // must use 'require' (import only allowed at top of file)
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

// //remember to remove logger before deploying to herokku
// const configureStore = (preloadedState = {}) =>
//   createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))

// export default configureStore;