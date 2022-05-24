import "/Users/norah/Desktop/task/my-app/src/App.css";
import axios from "axios";
import { useEffect,useState } from "react";
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
    alert("accept")
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

  return (
  
           
        
<div className="creat-oder" id="box-c">

          <div className="info-cat">
          <div className="col-12">
            <h2  style={{ textAlign: "right" }} id="theSide" >

            Name:   {usersApply.firstName}   {usersApply.lastName}

            {/* {console.log(e.firstName)} */}
            </h2>
            <h3 className="col-12" style={{ textAlign: "right" }}>
            linkedin:   <p>{usersApply.linkedin}</p>
          
           
            </h3>
            <div className="destail-wzefa">
              <div className="but-wz">
              Sklis: <p>{usersApply.sklis}</p>
              </div>
              <div className="but-wz">
              headlineJobs: <p>{usersApply.headlineJobs}</p>
              </div>
             
                 
                 <button   onClick={(e) => {
                    submitAccept(e);
                  }}type="button">accept</button>
                
            </div>
            
          </div>
        </div>
      
        )
                 


        
        
    
    </div>
  )
 
         
  
}

export default RejectionOrderDetialis;
