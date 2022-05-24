import "../App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../reducer/Login/actions";
import { setUserName } from "../reducer/Login/actions";
import edit from "../images/edit.png";
import file from "../images/file.png";
import user from "../images/user.png";

function NavBarHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
      loginDetails: state.loginDetails.loginDetails,
      userName: state.loginDetails.userName,
      
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
  // console.log(state.loginDetails)
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
        <div className="icon-LogOut">
                 
                      <img className="img-nav" src={edit} />
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
                  
                      <img className="img-user" src={user} />
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
