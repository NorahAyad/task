import "/Users/norah/Desktop/task/my-app/src/App.css";
import axios from "axios";
import { useEffect,useState } from "react";
import RejectionOrderDetialis from "./RejectionOrderDetialis"
import { Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function RejectionOrder() {
  const [usersApply, setUsersApply] = useState([])
  const history = useNavigate();
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
           <Form.Text className="text-muted  ">
    <h1 className="headerAdmin"> Rejection Order</h1>
    </Form.Text>
    <button
            type="submit"
            onClick={()=> history(-1)}
          >
           back
         
          </button>
            {usersApply.map((usersApply) => {
        return<RejectionOrderDetialis usersApply={usersApply} setUsersApply={setUsersApply} key={usersApply.id}
        />




}) }

    </div>
  )
 
         
  
}

export default RejectionOrder;
