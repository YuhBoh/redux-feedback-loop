import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function Review() {

  const feeling = useSelector((store) => store.feeling);

  const understanding = useSelector((store) => store.understanding);

  const support = useSelector((store) => store.support);

  const comments = useSelector((store) => store.comments);

  const postSubmit = () => {

    axios({
      method:'POST',
      url: '/review',
      data: {
        feelings: feeling.feelingScore,
        understanding: understanding.understandingScore,
        support: support.supportScore,
        comments: comments.comment
      }
    })
    .then((res) => {
      console.log("res:", res);
    })
    .catch((err) => {
      console.log('err:', err);
    })
  }

  return (
    <>
    <h2>Review Your Feedback</h2>
    
      <p>Feelings:{feeling.feelingScore}</p>
      <p>Understanding:{understanding.understandingScore}</p>
      <p>Support:{support.supportScore}</p>
      <p>Comments:{comments.comment}</p>

     <Link to="/feedback"><button onClick={postSubmit}>SUBMIT</button></Link>
    </>
  )
}