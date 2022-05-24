import "/Users/norah/Desktop/task/my-app/src/App.css";
import axios from "axios";
import { useEffect,useState } from "react";
import RejectionOrderDetialis from "./RejectionOrderDetialis"
function RejectionOrder() {
  const [usersApply, setUsersApply] = useState([])
  useEffect(() => {
   
    axios
    
    .get("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=reject")
    .then((res) => {
      console.log(res.data);
      setUsersApply(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  
  }, []);

  return (
    <div>
            {usersApply.map((usersApply) => {
        return<RejectionOrderDetialis usersApply={usersApply} setUsersApply={setUsersApply} key={usersApply.id}
        />




}) }

    </div>
  )
 
         
  
}

export default RejectionOrder;
