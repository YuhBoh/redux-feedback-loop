import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Understanding() {

  const dispatch = useDispatch();

  const clearRedux = () => {

    dispatch({
      type: "CLEAR_DATA",
    })
  }

  return(
    <>
      <h2>Feedback!</h2>
      <h2>Thank You!</h2>
      <Link to="/"><button onClick={clearRedux}>Leave New Feedback</button></Link>
    </>
  );
}