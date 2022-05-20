import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Body>
          <Card.Title style={{ marginBottom: "20px" }}>Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button
              type="submit"
              style={{
                marginRight: "9px",
                color: "#fff",
                backgroundColor: "#00024d",
                borderColor: "#00024d",
              }}
            >
              Submit
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
