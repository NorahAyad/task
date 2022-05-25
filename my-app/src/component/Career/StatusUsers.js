import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { useEffect,useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
function StatusUsers() {
  const [stateUser, setStateUser] = useState({});
  const state = useSelector((state) => {
    return {
        statusList: state.statusList.statusUsers,
        id: state.loginDetails.id,
    };
  });
  console.log(state.id)
  console.log(state.statusList[state.id - 1])
  let array=state.statusList[state.id - 1].statusList
  console.log("arry")
  console.log(array)
  

  return (

    <>
   



{array.map((ele)=>{
                      // total2+=ele.price;
                      return(
                       <>
                       <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
    <Card.Header as="h5">
    headlineJobs : {ele.headlineJobs}
      
    </Card.Header>



    
    <Card.Body>
   
    <Form.Text className="text-muted">
    <h5 className="text-muted ">
    <div>{ele.firstName}   {ele.lastName}</div>
        </h5>
    <h5 className="text-muted ">
       linkedin LinK: {ele.linkedin}
        </h5>
        <h5 className="text-muted ">
        Sklis: {ele.Sklis}
        </h5>
        <h5 className="text-muted ">
        status: {ele.reject}  {ele.accept} 
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

