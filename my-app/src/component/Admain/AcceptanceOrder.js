import "/Users/norah/Desktop/task/my-app/src/App.css";
import { useEffect,useState } from "react";
import AcceptanceOrderDetialis from "./AcceptanceOrderDetialis"
import axios from "axios";
function AcceptanceOrder() {

  const [usersApply, setUsersApply] = useState([])
  useEffect(() => {
   
    axios
    
    .get("https://628af85a7886bbbb37ade5c4.mockapi.io/api/v1/user?filter=accept")
    .then((res) => {
      console.log(res.data);
      setUsersApply(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  
  }, []);
  return <>
  hi
      {usersApply.map((usersApply) => {
        return<AcceptanceOrderDetialis usersApply={usersApply}setUsersApply={setUsersApply}  key={usersApply.id}
        />
      }) }
  
  </>;
}

export default AcceptanceOrder;
