export const setLoginDetails = (loginDetails) => {
    console.log(loginDetails);
    return {
      type: "SET_LOGIN",
      payload: loginDetails,
    };
  };
  export const logIn = (loginDetails) => {
    console.log(loginDetails);
    return {
      type: "LOG-IN",
      payload: loginDetails,
    };
  };
  
  
  export const setUserName = (userName) => {
    console.log(userName);
  
    return {
      type: "SET_USERNAME",
      payload: userName,
    };
  };
  export const setLogOutDetails = (user) => {

    return {
      type: "LOG_OUT",
      payload: user,
    };
  };
  export const setId = (id) => {
    console.log(id);
  
    return {
      type: "SET_ID",
      payload: id,
    };
  };
  