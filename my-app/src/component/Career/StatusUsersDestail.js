
import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { useEffect,useState } from "react";
function StatusUsersDestail({stateUser ,setStateUser}) {

    const state = useSelector((state) => {
        return {
            statusList: state.statusList.statusUsers,
            id: state.loginDetails.id,
        };
      });

 

 
  return (

    <>
    
    <div className="creat-oder" id="box-c">

          
<div className="info-cat">
<div className="col-12">
  <h2  style={{ textAlign: "right" }} id="theSide" >

  Name:   {stateUser.firstName}   {stateUser.lastName}

  {/* {console.log(e.firstName)} */}
  </h2>
  <h3 className="col-12" style={{ textAlign: "right" }}>
  linkedin:   <p>{stateUser.linkedin}</p>

 
  </h3>
  <div className="destail-wzefa">
    <div className="but-wz">
    Sklis: <p>{stateUser.sklis}</p>
    </div>
    <div className="but-wz">
    headlineJobs: <p>{stateUser.headlineJobs}</p>
    </div>
   
       
       
      
  </div>
  
</div>
</div>
</div>

        
      
      
    </>
  );
}

export default StatusUsersDestail;

