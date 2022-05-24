import "/Users/norah/Desktop/task/my-app/src/App.css";
import axios from "axios";
import { useEffect,useState } from "react";
import CreateOrderDetails from "./CreateOrderDetails"
function CreateOrder() {
  const [usersApply, setUsersApply] = useState([])
  useEffect(() => {
   
  axios
  
  .get("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=true")
  .then((res) => {
    console.log(res.data);
    setUsersApply(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

}, []);

let m1=[]


  return <>
  

          

              
              {usersApply.map((usersApply) => {
        return<CreateOrderDetails usersApply={usersApply} setUsersApply={setUsersApply} key={usersApply.id}
                 />


        
        
      }) }
        
        
       
       
  
  </>;
}

export default CreateOrder;
