import "/Users/norah/Desktop/task/my-app/src/App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import back from "../../images/back.png";
import { useNavigate } from "react-router-dom";
function StatusUsers() {
  let toggle = false;
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      statusList: state.statusList.statusUsers,
      id: state.loginDetails.id,
    };
  });
  console.log(state.id);
  console.log(state.statusList[state.id - 1]);
  let array = state.statusList[state.id - 1].statusList;
  console.log("arry");
  console.log(array);

  if (state.statusList[state.id - 1]) {
    toggle = true;
  }
  return (
    <>
      <img className="back" onClick={() => history(-1)} src={back}></img>

      {array.map((ele) => {
        return (
          <>
            <Card
              style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}
            >
              <Card.Header as="h5">
                headlineJobs : {ele.headlineJobs}
              </Card.Header>

              <Card.Body>
                <Form.Text className="text-muted">
                  <h5 className="text-muted ">
                    <div>
                      {ele.firstName} {ele.lastName}
                    </div>
                  </h5>
                  <h5 className="text-muted ">linkedin LinK: {ele.linkedin}</h5>
                  <h5 className="text-muted ">Sklis: {ele.Sklis}</h5>
                  <h5 className="text-muted ">
                    status: {ele.reject} {ele.accept}
                  </h5>
                </Form.Text>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </>
  );
}

export default StatusUsers;
