import "/Users/norah/Desktop/task/my-app/src/App.css";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useEffect } from "react";
import {deleteIJobs} from "../../reducer/jobs/actions";
import {updetJobs} from "../../reducer/jobs/actions";
import { useState } from "react";
import remove from "../../images/remove.png";
import refresh from "../../images/refresh .png";
import { useNavigate } from "react-router-dom";
function JobsAdmin() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [TheSide, setTheSide] = useState('');
  const [Headline, setHeadline] = useState('');
  const [Details, setDetails] = useState('');
  const [Title, setTitle] = useState('');
  const [Image, setImage] = useState('');
  const [JobDescription, setIJobDescription] = useState('');
  const [Skills, setSkills] = useState('');
  const [Category, setCategory] = useState('');
  const [Jobs, setJobs] = useState([]);




  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,

    };
  })
console.log(state.JobsReducer)

useEffect(() => {
 
 
    
}, []);


const submitUpdate = (e, jobs) => {
alert("n")
console.log(jobs.headline)
  e.preventDefault();
  const updetJobs1 = {
   
    jobs: {
      // oldName in items
     
      Headline: jobs.headline,
    },
    data: {
      // take new data
    
     theSide:TheSide,
      title:Title,
      headline:Headline,
    category:Category,
    description: JobDescription,
      image:Image,
      skills:Skills,
      details:Details
    },
  };
  dispatch(updetJobs(updetJobs1));
};

  return <>
  
  <button
            type="submit"
            onClick={()=> history(-1)}
          >
           back
         
          </button>
 {state.JobsReducer.map((e, index) => 
       <Card style={{ width: "350px", marginTop: "70px", marginLeft: "17px" }}>
       <Card.Header as="h5">
         <div className="col" id="box">
           <div className="img-job">
             <img src={e.img} />
           </div>
           <div>
           <Form.Control className="FormEdit" type="text" placeholder= {" Edti her ..   "+   e.headline}  onChange={(e) => {
               setHeadline((e.target.value ));
              }} />
            
           </div>
         </div>
       </Card.Header>
       <Card.Body>
         <Form.Text className="text-muted">
           <h5 className="text-muted ">
             JobDescription:
             <br />
             <Form.Control type="text" placeholder= {"Edti her ..  "+   e.JobDescription}  onChange={(e) => {
               setIJobDescription((e.target.value ));
              }} />
           </h5>
         
           <h5 className="text-muted ">  Details:  </h5>
         
            
             <Form.Control type="text" placeholder= {"  Edti her .. "+   e.details}  onChange={(e) => {
               setDetails((e.target.value ));
              }} />
            
         
           <h5 className="text-muted " >
             
              JobTitle: <br />
             <Form.Control type="text" placeholder= {"  Edti her .. "+   e.JobTitle}  onChange={(e) => {
               setTitle((e.target.value ));
              }} />
           </h5>
          
           

           <h5 className="text-muted " > skills : </h5>
           <Form.Control type="text" placeholder= {"  Edti her .."+   e.skills}  onChange={(e) => {
               setSkills((e.target.value ));
              }} />
           <br />
           
           <br />
         </Form.Text>

         <img className="img-delet" src={remove} 
         onClick={() => {
          const action = deleteIJobs(e);
          dispatch(action);
        }}
         />
         <img className="img-refresh" src={refresh} 
          onClick={(event) => {
            submitUpdate(event, e);
          }}
         />
         {/* <Button
                  style={{
                    width: "10.9rem",
                    margin: "1rem",
                    padding: "1rem",
                    borderColor: "#d7aa67",
                    backgroundColor: "#d7aa67",
                  }}
                  onClick={(event) => {
                    submitUpdate(event, e);
                  }}
                >
                  Update
                </Button> */}
        
       </Card.Body>
     </Card>
 
 
 )}
  
  
  
  
  
  
  
  </>;
}

export default JobsAdmin;
