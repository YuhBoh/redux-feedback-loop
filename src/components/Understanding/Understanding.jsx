import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Understanding() {

  const [understandingScore, setUnderstandingInput] = useState("");
  const dispatch = useDispatch();

  const postSubmit = () => {
    console.log("score:", understandingScore);

    dispatch({
      type: "ADD_UNDERSTANDING",
      payload: understandingScore
    })
  }

  return(
    <>
      <h2>How well are you understanding the content?</h2>
      <p>Understanding?</p>
      <form>
        <select value={understandingScore} onChange ={e => {setUnderstandingInput(e.target.value)}}>
          <option value="">Choose Score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>

      <Link to="/support"><button onClick={postSubmit}>Next</button></Link>
      </form>
    </>
  );
}