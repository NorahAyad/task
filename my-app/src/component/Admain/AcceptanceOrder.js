import "../../App.css";
import { useEffect, useState } from "react";
import AcceptanceOrderDetialis from "./AcceptanceOrderDetialis";
import axios from "axios";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import back from "../../images/back.png";
function AcceptanceOrder() {
  const history = useNavigate();
  const [usersApply, setUsersApply] = useState([]);
  useEffect(() => {
    axios

      .get(
        "https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=accept"
      )
      .then((res) => {
        console.log(res.data);
        setUsersApply(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Form.Text className="text-muted  ">
        <h1 className="headerAdmin"> Accept Order</h1>
      </Form.Text>
      <img className="back" onClick={() => history(-1)} src={back}></img>
      {usersApply.map((usersApply) => {
        return (
          <AcceptanceOrderDetialis
            usersApply={usersApply}
            setUsersApply={setUsersApply}
            key={usersApply.id}
          />
        );
      })}
    </>
  );
}

export default AcceptanceOrder;
