import "../../App.css";

import { useSelector } from "react-redux";
import { Card, Form } from "react-bootstrap";
import suitcase1 from "../../images/suitcase.png"
import cross from "../../images/cross-button.png"
import pen from "../../images/pen.png"
import accept from "../../images/accept-admin.png"
import { Link } from "react-router-dom";
function Jobs() {
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });

  return (
    <>
    <Form.Text className="text-muted  ">
    <h1 className="headerAdmin"> Admin Home</h1>
    </Form.Text>
     
      
      
      <Card id="cardAdmin" style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body >
          <Form.Text className="text-muted">
          <Link to="/jobsAdmin">
            <img className="imgAdmin" src={suitcase1} />
            
            </Link>
            <h1 className="h1Admin">
             Jobs
           
              <br />
            </h1>
            <br />
          </Form.Text>
        </Card.Body>
      </Card>
      <Card id="cardAdmin" style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body >
          <Form.Text className="text-muted">
          <Link to="/create">
            <img className="imgAdmin" src={pen} />
            </Link>
            <h1 className="h1Admin">
            create
         
              <br />
            </h1>
            <br />
          </Form.Text>
        </Card.Body>
      </Card>
      <Card id="cardAdmin" style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body >
          <Form.Text className="text-muted">
          <Link to="/accept"> 
            <img className="imgAdmin" src={accept} />
            </Link>
            <h1 className="h1Acceptance">
            Acceptance
              <br />
            </h1>
            <br />
          </Form.Text>
        </Card.Body>
      </Card>
      <Card id="cardAdmin" style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body >
          <Form.Text className="text-muted">
          <Link to="/reject">
            <img className="imgAdmin" src={cross} />
            </Link>
            <h1 className="h1Rejection">
             rejection
            
              <br />
            </h1>
            <br />
          </Form.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Jobs;
