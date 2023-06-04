import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function Feeling() {

  const [feelingScore, setFeelingInput] = useState("");
  const dispatch = useDispatch();

  const postSubmit = () => {
    console.log("score:", feelingScore);
  
    // AXIOS POST TO DATABASE BELOW
    dispatch({
      type: "ADD_FEELINGS",
      payload: feelingScore
    })
  }

 return (
  <>
    <h2>How are you feeling today?</h2>
    <p>Feeling?</p>
    <form>
      <select value={feelingScore} onChange ={e => {setFeelingInput(e.target.value)}}>
        <option value="">Choose Score</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

    <Link to ="/understanding"><button onClick={postSubmit}>Next</button></Link>
    {/* to = Clicking Next will send you to  "/understanding" */}    
    </form>
  </>
 )
}