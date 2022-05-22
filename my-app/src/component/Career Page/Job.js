import "/Users/norah/Desktop/task/my-app/src/App.css";
import { Link } from "react-router-dom";
import Destail from "./Destail";
import { useSelector } from "react-redux";

function Job({e,index}) {
 

  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });


 
  return (

    <>

    
    <div className="col-12" id="box-c">
          <div className="img-cat">
          <img src={e.img} alt="Avatar"  />
          
          </div>
          <div className="info-cat">
            <div className="col-12">
              <h2  style={{ textAlign: "right" }} id="theSide" >
             {e.theSide}
              </h2>
              <h3 className="col-12" style={{ textAlign: "right" }}>
                {console.log(e.theSide)}
                <Link to={`/Destail/${index}` }>{e.details}</Link>
              </h3>
              <div className="destail-wzefa">
                <div className="but-wz">
                  <p>{e.category}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      
    </>
  );
}

export default Job;

