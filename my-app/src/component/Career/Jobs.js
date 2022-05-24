import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import Filter from "./Filter";
import { useEffect,useState } from "react";
function Jobs() {
  const [TheSide, setTheSide] = useState({});
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });

  useEffect(() => {
    setTheSide(state.JobsReducer)
   console.log( TheSide)
   
  }, [TheSide]);

 
  return (

    <>
      <Filter/>
     
           {state.JobsReducer.map((e, index) => <Job index={index} e={e} />)}
        
      
      
    </>
  );
}

export default Jobs;

