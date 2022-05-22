import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserName, setId } from "../reducer/Login/actions";
import { setLoginDetails } from "../reducer/Login/actions";
import { Link } from "react-router-dom";
function Singin() {
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      
      loginDetails: state.loginDetails.loginDetails,
      
    };
  });
  console.log(state.loginDetails);
  const dispatch = useDispatch();
  let firstName;
  let lastName;
  let userName;
  let email;
  let password;
  let logIn;
  const changeFirstName = (e) => {
    firstName = e.target.value;
  };
  const changeLastName = (e) => {
    lastName = e.target.value;
  };
  const changeUserName = (e) => {
    userName = e.target.value;
  };
  const changeEmail = (e) => {
    email = e.target.value;
  };
  const changePassword = (e) => {
    password = e.target.value;
  };
  const Cheack = (e) => {
    e.preventDefault();
    console.log("check");

    let x = 0;
    let y = 0;
    for (let i = 0; i < state.loginDetails.length; i++) {
      if (state.loginDetails[i].email == email) {
        x = 1;
        alert("The email is taken");
        break;
      }
      if (state.loginDetails[i].username == userName) {
        y = 1;
        alert("The username is taken");
        break;
      }
    }
    if (x == 0 && y == 0) {
      let newUser = {
        id: state.loginDetails.length + 1,
        email: email,
        username: userName,
        password: password,
        name: { firstname: firstName, lastname: lastName },
        logIn:true
      };
      let arr = state.loginDetails.slice();
      console.log(arr);
      arr.push(newUser);
      console.log(arr);
      const action = setLoginDetails(arr);
      dispatch(action);
      const action4 = setUserName(userName);
      dispatch(action4);
      const action5 = setId(state.loginDetails.length + 1);
      dispatch(action5);
      console.log(state.loginDetails);
      navigate("/");
    }
  };


  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body>
          <Card.Title style={{ marginBottom: "20px" }}> Singin</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>first name</Form.Label>
              <Form.Control   onChange={changeFirstName} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last name</Form.Label>
              <Form.Control   onChange={changeLastName} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control   onChange={changeEmail} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control   onChange={changeUserName} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control  onChange={changePassword}type="password" placeholder="Password" />
            </Form.Group>

            <Button
              type="submit"
              style={{
                marginRight: "9px",
                color: "#fff",
                backgroundColor: "#00024d",
                borderColor: "#00024d",
              }}
              onClick={(e) => Cheack(e)}
            >
               Sign Up
            </Button>
            <p>
            Already registered ?<Link to="/login">Log in</Link>
          </p>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Singin;
