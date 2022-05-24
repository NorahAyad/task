import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Link } from "react-router-dom";
import Destail from "./Destail";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

function Job({e,index}) {
 
  
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });


 
  return (

    <>

    
    <div className="col-12 job" id="box-jobs" >
    <div className="info">
            <div className="col-12">
            <Form.Text>
            <h2  id="theSide" >
             {e.theCompany}
              </h2>
            </Form.Text>
            <Form.Text>
            <h3 className="text-muted">
                
                <Link  className="text-muted"to={`/Destail/${index}` }>{e.details}</Link>
              </h3>

            </Form.Text >
             
              <div className="destail info ">
                <div >
                <Form.Text>
                
                  <p className="text-muted"> category:  <span>{e.category} </span> </p>
                  <p >  </p>
                  </Form.Text>
                </div>
              </div>
            </div>
          </div>

          <div className="img">
          <img src={e.img} alt="Avatar"  />
          
          </div>

        
          </div>
      
    </>
  );
}

export default Job;

