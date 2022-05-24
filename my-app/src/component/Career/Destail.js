import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {getheadline} from "../../reducer/jobs/actions";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
function Destail() {
  const { id } = useParams();
  const { Jobs } = useSelector((state) => state.JobsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
      headline:state.JobsReducer.headline,
      statusList: state.statusList.statusUsers,
      id: state.loginDetails.id,
    };
  });
 
  useEffect(() => {
      dispatch(getheadline(Jobs[id].headline))
 
  }, []);
  
  
  const ckeek = ()=>{
    if(state.id == 0){
      alert("You have to log in to add to Apply");
    }else{
      navigate("/Apply");
    }
 
    };
  
 
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Header as="h5">
          <div className="col" id="box">
          <div className="box-header">
              <h5 style={{ }} >
            { Jobs[id].headline}
              </h5>
            </div>
            <div className="img-job">
              <img src={Jobs[id].img} />
            </div>
           
          </div>
        </Card.Header>
        <Card.Body>
          <Form.Text className="text-muted">
            <h5 className="text-muted ">
              JobDescription:
              <br />
            </h5>
          <p>{Jobs[id].JobDescription}{" "}</p>
            <h5 className="text-muted ">
              details <br />
           </h5>
           <p>{Jobs[id].details} </p> 
            <h5 className="text-muted ">
              
               JobTitle: <br />
            </h5>
        
            <p> {Jobs[id].JobTitle}</p>

            <h5 className="text-muted "> skills : </h5>
         
            <p>{Jobs[id].skills}</p>
            <br />
          </Form.Text>

          <Button
            type="submit"
            onClick={()=>ckeek()}
            style={{
              marginRight: "9px",
              color: "#fff",
              backgroundColor: "#00024d",
              borderColor: "#00024d",
             }}
            
          >
            Apply her
         
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Destail;
