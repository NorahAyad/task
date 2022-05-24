import {  useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "/Users/norah/Desktop/task/my-app/src/App.css";
function Category(){
    
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
            <div className="col-12" id="box-c">
          <div className="img-cat">
          <img src={e.img} alt="Avatar" class="image"/>
          
          </div>
          <div className="info-cat">
            <div className="col-12">
              <h2 style={{ textAlign: "right" }}>
             {e.theSide}
              </h2>
              <h3 className="col-12" style={{ textAlign: "right" }} >
              {e.details}
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
         
        );
          }
      })}


    </div>

        
        
        </>
    )
}
export default Category;
