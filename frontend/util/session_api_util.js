//for signing up
export const signup = (user) => {
  return $.ajax({
    url: "/api/users",
    method: 'POST',
    data: { user }
  });
};

//login
export const login = (user) => {
  // debugger
  let response = $.ajax({
    url: '/api/session',
    method: "POST",
    data: { user }
  });
  // debugger
  return response;
};

//logout
export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: "DELETE"
  });
};