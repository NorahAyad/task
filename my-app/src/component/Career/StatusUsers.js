import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { useEffect,useState } from "react";

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

//   setStateUser(state.statusList[state.id - 1])

//   console.log(TheSide)
// {state.statusList.map((e)=>{

//     if(state.statusList ==state.id){
//         console.log("yse")
//     }else{

//     }

// }}
// state.statusList.find(
//         (element) => element.id == state.id
//       )   

  return (

    <>
      
      StatusUsers  
     
      {/* {state.statusList.map((e, index) => <StatusUsersDestail
       index={index} stateUser={stateUser} setStateUser={setStateUser} />)} */}

<div className="creat-oder" id="box-c">

          
<div className="info-cat">
<div className="col-12">

{array.map((ele)=>{
                      // total2+=ele.price;
                      return(
                        <div>
                            <hr className="my-4" />
                                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                                      <div className="col-md-2 col-lg-2 col-xl-2">
                                      {ele.firstName}
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-3">
                                       
                                        <h6 className="text-black mb-0">{ele.lastName}</h6>
                                        <h6 className="text-black mb-0"> hgphgi :{ele.accept}</h6>
                                      </div>
                                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                       
                                        
                                      </div>
                                      
                                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                        <a href="#!" className="text-muted"><i className="fas fa-times" /></a>
                                      </div>
                                    </div>
                
                        </div>
                    );
                    })}




    </div>
    </div>
    </div>
    </>
  );
}

export default StatusUsers;

