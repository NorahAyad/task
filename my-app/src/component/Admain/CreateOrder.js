import "../../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CreateOrderDetails from "./CreateOrderDetails";
import { useNavigate } from "react-router-dom";
import back from "../../images/back.png";
function CreateOrder() {
  const [usersApply, setUsersApply] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    axios

      .get(
        "https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=true"
      )
      .then((res) => {
        console.log(res.data);
        setUsersApply(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let m1 = [];

  return (
    <>
      <img className="back" onClick={() => history(-1)} src={back}></img>

      {usersApply.map((usersApply) => {
        return (
          <CreateOrderDetails
            usersApply={usersApply}
            setUsersApply={setUsersApply}
            key={usersApply.id}
          />
        );
      })}
    </>
  );
}

export default CreateOrder;
