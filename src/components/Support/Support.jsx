import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Support() {

  const [supportScore, setSupportInput] = useState("");
  const dispatch = useDispatch();

  const postSubmit = () => {
    console.log("score:", supportScore);

    dispatch({
      type: "ADD_SUPPORT",
      payload: supportScore
    })
  }

  return(
    <>
    <h2>How well are you being supported?</h2>
    <p>Support?</p>
    <form>
      <select value={supportScore} onChange ={e => {setSupportInput(e.target.value)}}>
          <option value="">Choose Score</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </select>
    
      <Link to="/comments"><button onClick={postSubmit}>Next</button></Link>
    </form>
    </>
  )
}