import "/Users/norah/Desktop/task/my-app/src/App.css";
import Job from "./Job";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function Jobs() {
  const [TheSide, setTheSide] = useState({});

  let toggle = false;
  const state = useSelector((state) => {
    return {
      JobsReducer: state.JobsReducer.Jobs,
      id: state.loginDetails.id,
    };
  });
  console.log(state.id);

  useEffect(() => {
    setTheSide(state.JobsReducer);
    console.log(TheSide);
  }, [TheSide]);

  if (state.id == 1) {
    toggle = true;
  }

  return (
    <>
      {toggle && (
        <Link to="/admin">
          <Button
            variant="danger"
            style={{
              marginTop: "1rem",
            }}
          >
            Admin page
          </Button>
        </Link>
      )}

      {state.JobsReducer.map((e, index) => (
        <Job index={index} e={e} />
      ))}
    </>
  );
}

export default Jobs;
