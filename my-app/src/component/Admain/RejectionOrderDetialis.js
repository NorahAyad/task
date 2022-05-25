import "/Users/norah/Desktop/task/my-app/src/App.css";
import axios from "axios";
import { useEffect,useState } from "react";
import { Card,Form, Col, Row } from "react-bootstrap";
import accept from "../../images/accept.png"
import Swal from "sweetalert2";
function RejectionOrderDetialis({usersApply,setUsersApply}) {
  

    const   update=()=>{
        axios
    
    .get("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=reject")
    .then((res) => {
      console.log(res.data);
      setUsersApply(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
    }

  const   submitAccept = (event) => {
 
    event.preventDefault();
    const data = {

        firstName:usersApply.firstName,
        lastName:usersApply.lastName,
      skils:usersApply.skils ,
    linkedin: usersApply.linkedin,
    file: "selectedFile",
    accept: "accept",
    reject: "",
    headlineJobs:usersApply.headlineJobs,
   
    };
    axios

      .put(`https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user/${usersApply.id} `, data)
      .then(async (res) => {
        console.log(res.data);
        update()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  return (
  
      <>
        
   
<Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
    <Card.Header as="h5">
      <div>{usersApply.firstName}   {usersApply.lastName}</div>
    </Card.Header>



    
    <Card.Body>
   
    <Form.Text className="text-muted">
    <h5 className="text-muted ">
      headlineJobs : {usersApply.headlineJobs}
        </h5>
    <h5 className="text-muted ">
       linkedin LinK: {usersApply.linkedin}
        </h5>
        <h5 className="text-muted ">
        Sklis: {usersApply.Sklis}
        </h5>
      
      </Form.Text>
      <img className="img-delet" src={accept} 
     onClick={(e) => {
      submitAccept(e);
    }}
     />
   
   
    </Card.Body>
  </Card>
  </> 
  )
 
         
  
}

export default RejectionOrderDetialis;
