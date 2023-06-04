import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

export default function Comments() {

  const [commentParagraph, setCommentParagraph] = useState("");
  const dispatch = useDispatch();

  const postSubmit = () => {
    console.log("score:", commentParagraph);

    dispatch({
      type: "ADD_COMMENTS",
      payload: commentParagraph
    })
  }

  return(
    <>
    <h2>Any comments you want to leave?</h2>
    <p>Comments</p>

    <input name="comments" 
           placeholder="comments" value={commentParagraph} 
           onChange ={e => {setCommentParagraph(e.target.value)}}/> 


      <Link to="/review"><button onClick={postSubmit}>Next</button></Link>
    </>
  )
}