import "../App.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../reducer/Login/actions";
import { setUserName } from "../reducer/Login/actions";
import logOut from "../images/logOut.png";
import profile from "../images/profile.png";
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
  
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              width="110"
              src="https://teleworks.sa/wp-content/themes/understrap-child/images/header-logo-all.png"
              alt="Telework"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Features</Nav.Link>
              <Nav.Link href="#"> <p></p></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
              {state.userName}
              {state.loginDetails.logIn === true ? (
                    <div className="icon-LogOut">
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
                  )}




                <Link to="/Login">Login</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarHome;
