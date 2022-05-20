import "../App.css";
import { Link } from "react-router-dom";
import Destail from "./Destail";
import { useDispatch, useSelector } from "react-redux";
import {getcategory} from "../reducer/jobs/actions"
import { useNavigate } from 'react-router-dom';
import {  useState } from "react";
import Category from"./Category";
function Body() {
  const navigate = useNavigate();
  const [select,setSelect] = useState()
  
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
    };
  });
  let input2
  function selectOnChange (e){
    e.preventDefault();
    input2 = e.target.value
    setSelect(input2)

  }
  const buttonPrice = (e) =>{
    e.preventDefault();
  console.log(select)
    dispatch(getcategory(select))
    navigate("/Category")
   
  }
  return (

    <>
   <form>
           <label>Price Options:</label><br/>
          <select id="selcetedOption" value={select} onChange={selectOnChange}> 
           <option id="op1" value="0" selected>...</option>
          <option id="op2" value="private1"> private1</option>
         <option id="op4" value="private3">private3</option>
                             </select>
        <button onClick={buttonPrice}>Apply</button>
        </form> 
    
       <p>  {state.JobsReducer.map((e,index)=>{
        return(
          <div className="col-12" id="box-c">
          <div className="img-cat">
          <img src={e.img} alt="Avatar" class="image"/>
          
          </div>
          <div className="info-cat">
            <div className="col-12">
              <h2 style={{ textAlign: "right" }}>
             {e.theSide}
              </h2>
              <h3 className="col-12" style={{ textAlign: "right" }}>
                {console.log(e.theSide)}
                <Link to="/Destail ">{e.details}</Link>
              </h3>
              <div className="destail-wzefa">
                <div className="but-wz">
                  <p>{e.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        )
      })}</p>
      
      
    </>
  );
}

export default Body;

