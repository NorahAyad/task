import "/Users/norah/Desktop/task/my-app/src/App.css";
import { useDispatch } from "react-redux";
import { getcategory } from "../../reducer/jobs/actions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Filter() {
  const navigate = useNavigate();
  const [select, setSelect] = useState();
  const dispatch = useDispatch();

  function selectOnChange(e) {
    e.preventDefault();
    setSelect(e.target.value);
  }
  const buttonCategory = (e) => {
    e.preventDefault();
    dispatch(getcategory(select));
    navigate("/Category");
  };

  return (
    <>
      <form>
        <label>Price Options:</label>
        <br />
        <select id="selcetedOption" value={select} onChange={selectOnChange}>
          <option id="op1" value="0" selected>
            ...
          </option>
          <option id="op2" value="private1">
            {" "}
            private1
          </option>
          <option id="op4" value="private3">
            private3
          </option>
        </select>
        <button onClick={buttonCategory}>Apply</button>
      </form>
    </>
  );
}

export default Filter;
