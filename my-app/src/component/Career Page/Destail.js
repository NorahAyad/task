import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {getheadline} from "../../reducer/jobs/actions";
function Destail() {
  const { id } = useParams();
  const { Jobs } = useSelector((state) => state.JobsReducer);
  const [jobHeadline, setJobHeadline] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
      headline:state.JobsReducer.headline
    };
  });
  function SubmitOnClik() {
   
   
  }
  function selectOnChange(e) {
  
    setJobHeadline(e)
   console.log(jobHeadline+"job")
   dispatch(getheadline(jobHeadline))
  }
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Header as="h5">
          <div className="col" id="box">
            <div className="img-job">
              <img src={Jobs[id].img} />
            </div>
            <div>
              <h5 style={{ textAlign: "right", marginRight: "-3px" }} onChange={selectOnChange(Jobs[id].headline)}>
            {Jobs[id].headline}
              </h5>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Form.Text className="text-muted">
            <h6>
              : JobDescription
              <br />
              {Jobs[id].JobDescription}{" "}
            </h6>
            <br />
            <p>
              details <br />
              {Jobs[id].details}
            </p>
            <h6>
              {" "}
              : JobTitle <br />
            </h6>
            <br />
            <p> {Jobs[id].JobTitle}</p>

            <p6> skills : </p6>
            <br />
            <p>{Jobs[id].skills}</p>
            <br />
          </Form.Text>

          <Button
            type="submit"
            style={{
              marginRight: "9px",
              color: "#fff",
              backgroundColor: "#00024d",
              borderColor: "#00024d",
             }}
             onClick={SubmitOnClik()}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Destail;
