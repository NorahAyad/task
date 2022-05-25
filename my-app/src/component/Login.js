import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setUserName, setId, logIn } from "../reducer/Login/actions";
import { Link } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const [userinfo, setUserinfo] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
    let login;
  const state = useSelector((state) => {
    return {
      loginDetails: state.loginDetails.loginDetails,
   
    };
   
  });


console.log(state.loginDetails)

  const usernameOrEmail = (e) => {
    setUserinfo(e.target.value);
  };
  const passwordValue = (e) => {
    setPassword(e.target.value);
  };
  const checkLogin = (e) => {
    e.preventDefault();
     

   if (userinfo.includes("@")) {
      const foundUser = state.loginDetails.find(
        (element) => element.email == userinfo
      );
      const foundPassword = state.loginDetails.find(
        (element) => element.password == password
      );
      if (foundUser && foundPassword) {
        console.log("user found");
        state.loginDetails.map((ele) => {
          if (ele.email == userinfo) {
            const action1 = setUserName(ele.username);
            dispatch(action1);
            const action2 = setId(ele.id);
            dispatch(action2);
            const action3 = logIn(ele.logIn);
            dispatch(action3);
            console.log("id is" + ele.id);
            navigate("/");
          }
        });
      } else {
        setToggle(true);
      }
    }else{
      const foundUser = state.loginDetails.find(
        (element) => element.username == userinfo
      );
      const foundPassword = state.loginDetails.find(
        (element) => element.password == password
      );
      if (foundUser && foundPassword) {
        console.log("user found");
        const action1 = setUserName(userinfo);
        dispatch(action1);
        state.loginDetails.map((ele) => {
          if (ele.username == userinfo) {
            const action2 = setId(ele.id);
            dispatch(action2);
            const action3 = logIn(ele.logIn);
            dispatch(action3);
            
          }
        });
        navigate("/");
      } 
      
      else {
        setToggle(true);
      }
      
    }
    
  };
  
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body>
          <Card.Title style={{ marginBottom: "20px" }}>Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username </Form.Label>
              <Form.Control   onChange={usernameOrEmail}type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={passwordValue}type="password" placeholder="Password" />
            </Form.Group>
            {toggle && (
            <label>
              <b className="b-login">Username or email is wrong</b>
            </label>
          )}
          <br />
            <Button
              type="submit"
              style={{
                marginRight: "9px",
                color: "#fff",
                backgroundColor: "#00024d",
                borderColor: "#00024d",
                
              }}
              onClick={(e) => checkLogin(e)}
            >
              Login
            </Button>

            <Form.Text className="text-muted">
              or,
              <Link to="/Singin">Singin</Link>
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
