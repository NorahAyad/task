import {  useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "/Users/norah/Desktop/task/my-app/src/App.css";
function Category(){
  const history = useNavigate();
    const state = useSelector((state) => {
      return {
        JobsReducer: state.JobsReducer.Jobs,
        category:state.JobsReducer.category

      };
    });
   

    return (
        <>
            {console.log(state.category)}

            <div className="items-div">
           {state.JobsReducer.map((e, index) => {
            console.log(state.category+"state")
            console.log(e.category+"elem")
            if(state.category===e.category){
          
        return (
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
         
        );
          }
      })}
<button
            type="submit"
            
            onClick={()=> history(-1)}
          >
           back
         
          </button>

    </div>

        
        
        </>
    )
}
export default Category;
