import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Button } from "react-bootstrap";
import { useEffect,useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

import { Card, Col, Row } from "react-bootstrap";
function CreateOrderDetails({usersApply,setUsersApply}) {

  
  const   update=()=>{
    axios

.get("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=true")
.then((res) => {
  console.log(res.data);
  setUsersApply(res.data);
})
.catch((err) => {
  console.log(err);
});
}
  const submitReject = (event) => {
      alert("reject")
    event.preventDefault();
    const data = {

        firstName:usersApply.firstName,
        lastName:usersApply.lastName,
      skils:usersApply.skils ,
    linkedin: usersApply.linkedin,
    file: "selectedFile",
    accept: usersApply.accept,
    reject: "reject",
    creat:false,
    headlineJobs:usersApply.headlineJobs,
   
    };
    axios

      .put(`https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user/${usersApply.id} `, data)
      .then(async (res) => {
        console.log(res.data);
        update()
        // Swal.fire({
        //   title: "Do you want to save the changes?",
        //   showDenyButton: true,
        //   showCancelButton: true,
        //   confirmButtonText: "Save",
        //   denyButtonText: `Don't save`,
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire("Saved!", "", "success");
        //   } else if (result.isDenied) {
        //     Swal.fire("Changes are not saved", "", "info");
        //   }
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  
  const   submitAccept = (event) => {
    alert("accept")
    event.preventDefault();
    const data = {

        firstName:usersApply.firstName,
        lastName:usersApply.lastName,
      skils:usersApply.skils ,
    linkedin: usersApply.linkedin,
    file: "selectedFile",
    accept: "accept",
    reject: usersApply.reject,
    headlineJobs:usersApply.headlineJobs,
    creat:false
   
    };
    axios

      .put(`https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user/${usersApply.id} `, data)
      .then(async (res) => {
        console.log(res.data);
        update()
        // Swal.fire({
        //   title: "Do you want to save the changes?",
        //   showDenyButton: true,
        //   showCancelButton: true,
        //   confirmButtonText: "Save",
        //   denyButtonText: `Don't save`,
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     Swal.fire("Saved!", "", "success");
        //   } else if (result.isDenied) {
        //     Swal.fire("Changes are not saved", "", "info");
        //   }
        // });
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return(
    <>

<Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Header as="h5">
          <div>{usersApply.firstName}   {usersApply.lastName}</div>
        </Card.Header>
        <Card.Body>
         
        </Card.Body>
      </Card>
     

  
   


</>
  )
  
}

export default CreateOrderDetails;
