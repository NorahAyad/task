import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import Filter from "./Filter";
function Jobs() {
 
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });


 
  return (

    <>
      <Filter/>
     
           {state.JobsReducer.map((e, index) => <Job index={index} e={e} />)}
        
     
       
      
      
    </>
  );
}

export default Jobs;

