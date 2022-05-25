const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  loginDetails: [
    {
      id: 1,
      email: "norah@gmail.com",
      username: "norah",
      password: "123",
      logIn: true,
      name: { firstname: "norah", lastname: "Alotaibi" },
    },
  ],
  userName: "",
  id: 0,
  logIn: "",
};

const loginDetails = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_LOGIN":
      console.log(state.loginDetails);
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        loginDetails: payload,
        userName: state.userName,
        id: state.id,
      };
    case "SET_USERNAME":
      return {
        loginDetails: state.loginDetails,
        userName: payload,
        id: state.id,
      };

    case "LOG_IN":
      return {
        loginDetails: state.loginDetails,
        userName: state.userName,
        id: state.id,
        logIn: payload,
      };
    case "LOG_OUT":
      return {
        loginDetails: state.loginDetails,
        userName: state.userName,
        id: state.id,
        user: payload,
      };
    case "SET_ID":
      console.log(state.id);
      return {
        loginDetails: state.loginDetails,
        userName: state.userName,
        id: payload,
      };

    default:
      return state;
  }
};
export default loginDetails;
