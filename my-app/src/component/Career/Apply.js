import "/Users/norah/Desktop/task/my-app/src/App.css";
import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getheadline } from "../../reducer/jobs/actions";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {setStatusList} from "../../reducer/status/actions";
import { useState } from "react";
import axios from "axios";
function Apply() {
  const [selectedFile, setSelectedFile] = useState("");
  const dispatch = useDispatch();
  const formData = new FormData();
  formData.append("file", selectedFile);
  
  const state = useSelector((state) => {
    return {
      headline: state.JobsReducer.headline,
      statusList: state.statusList.statusUsers,
      id: state.loginDetails.id,
    };
  });
  
  const [userApply, setUserApply] = useState({
     
         firstName:"",
          lastName:"",
      linkedin: "",
      file: selectedFile,
      accept: "",
      reject: "",
      headlineJobs:state.headline,
      sklis:""
  
  });
  
 

  const addStatusList = ()=>{

    
  
      let arr = state.statusList;
      for (let i = 0; i < arr.length; i++) {

       if(arr[i].id == state.id){
         if(arr[i].statusList.length == 0){
          arr[i].statusList.push(userApply);
          console.log(arr);
          
          const action = setStatusList(arr);
          dispatch(action);
          break;
         }
         else{
           let eleExist=false;
           for (let j = 0; j < arr[i].statusList.length; j++) {
            console.log("heer");
            if(arr[i].statusList[j].id == userApply.id){
              eleExist=true;
              console.log("yes");
              console.log(!eleExist);
              console.log(eleExist +"mm");
            } 
           }
           console.log(eleExist +"mm");
           if(eleExist==true){
           
          
            arr[i].statusList.push(userApply);
              console.log(userApply);
              console.log(arr);
            const action = setStatusList(arr);
            dispatch(action);
            console.log(arr);
            break;
           }
          
           }
         }
    
        }

      }


   

  const createUser = (e) => {

    e.preventDefault();
    console.log("in createUser")


  axios
  
  .post("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user", userApply)
  .then((res) => {
    console.log(res.data);
    setUserApply(res.data)
    addStatusList()
    console.log(state.statusList);

    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Your work has been save",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  })
  .catch((err) => {
    console.log(err);
  });
  }
  return (
    <>
      <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
        <Card.Header as="h5">
          <div>Apply for jobs</div>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFristName">
                <Form.Label> Frist Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Frist"  onChange={(e) => {
               setUserApply({ ...userApply, firstName: e.target.value });
              }} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLasName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" onChange={(e) => {
                setUserApply({ ...userApply, lastName: e.target.value });
              }} /> 
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridLinkLinkedIn">
              <Form.Label id="labalLink">Link Linkedin</Form.Label>

              <Form.Control type="text" placeholder="Enter link"  onChange={(e) => {
                setUserApply({ ...userApply, linkedin: e.target.value });
              }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridLinkLinkedIn">
              <Form.Label id="labaskills">skills:</Form.Label>

              <Form.Control type="text" placeholder="Enter skills such as java ,sql,c# "  onChange={(e) => {
                setUserApply({ ...userApply, skills: e.target.value });
              }} />
            </Form.Group>

            

            <Form.Group className="position-relative mb-3">
              <Form.Label id="labal">File:</Form.Label>
              <Form.Control type="file" required name="file"   onChange={(e) => setSelectedFile(e.target.files[0])} />
             </Form.Group> 
              {/* <Form.Control type="file" required name="file"  onChange={(e) => {
                setUserApply({ ...userApply, file: e.target.files[0] });
              }} />
             </Form.Group>  */}

            <Button
           onClick={(e) => createUser(e)}
              style={{
                marginRight: "9px",
                color: "#fff",
                backgroundColor: "#00024d",
                borderColor: "#00024d",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
  
    </>
  );
}

export default Apply;
