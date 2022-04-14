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
  let response = $.ajax({
    url: '/api/session',
    method: "POST",
    data: { user }
  });
  return response;
};

//logout
export const logout = () => {
  return $.ajax({
    url: '/api/session',
    method: "DELETE"
  });
};