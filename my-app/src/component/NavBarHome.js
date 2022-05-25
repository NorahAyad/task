import "../App.css";
import { Navbar } from "react-bootstrap";
import { Container,Alert,Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../reducer/Login/actions";
import { setUserName } from "../reducer/Login/actions";
import edit from "../images/edit.png";
import file from "../images/file.png";
import user from "../images/user.png";
import Swal from "sweetalert2";
import { getcategory } from "../reducer/jobs/actions";
import { useState } from "react";
function NavBarHome() {
  const [select, setSelect] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
      loginDetails: state.loginDetails.loginDetails,
      userName: state.loginDetails.userName,
      category:state.JobsReducer.category
      
    };
  });

  const UserName = () => {
    dispatch(
      setUserName({
        username: "",
        Password: "",
        logIn: false,
      })
    );
    navigate("/");
  };

  function selectOnChange(e) {
    e.preventDefault();
    setSelect(e.target.value);
  }
  const buttonCategory = (e) => {
    e.preventDefault();
    dispatch(getcategory(select));
    navigate("/Category");
  };

  if (!show) {
    return (
      <Alert variant="danger"  dismissible>
       
       <Alert.Heading> select Category </Alert.Heading>
        <br />




       <Form.Select aria-label="Default select example" value={select}  onChange={selectOnChange}>
       <option>Open this select menu</option>
       
      
          <option id="op2" value="Private company">
            {" "}
            Private company
          </option>
          <option id="op4" value="governmental">
          governmental
          </option>
     
       
        </Form.Select>
        <Button  onClose={() => setShow(true)} onClick={buttonCategory}>Apply</Button>
      </Alert>
    );
  }
  

  
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
        <div className="icon-LogOut">
                 
                      <img onClick={() => setShow(false)}  className="img-nav" src={edit} />
                 </div>
                  <div className="log">
          <Navbar.Brand href="/">
            
            <img className="img-log"
              width="100"
              src="https://teleworks.sa/wp-content/themes/understrap-child/images/header-logo-all.png"
              alt="Telework"
            ></img>
          </Navbar.Brand>
          </div>
         
          {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
           
            {/* <Nav> */}
              {/* <Nav.Link> */}
             

              {/* {state.loginDetails.logIn === true ? (
                      
                    <div className="icon-LogOut">
                       {console.log("logIn true")}
                      <img
                        onClick={UserName}
                        className="img-icon"
                        src={logOut}
                      />
                      
                        <Link to="/Admin" > <p></p></Link>
                    </div>
                  ) : (
                    <Link to="/Login">
                      <img className="img-icon" src={profile} />
                    </Link>
                  )} */}
                  <div className="icon-LogOut">
                  {state.userName}  
                  <Link to="/Login">
                  
                      <img  className="img-user" src={user} />
                 </Link>
                  </div>
                    <div>
                    <Link to="/status">
                    <img className="img-nav" src={file} />
                    </Link>
                    </div>
                   


            {/* </Nav> */}
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHome;
