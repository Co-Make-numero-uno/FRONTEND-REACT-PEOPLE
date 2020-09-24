import axios from "axios";

const UPVOTE_START = "UPVOTE_START";
const UPVOTE_SUCCESS = "UPVOTE_SUCCESS";
const UPVOTE_FAIL = "UPVOTE_FAIL";

export const upvote = (vote) = dispatch => {
    dispatch({type: UPVOTE_START});
    axios.post("upvoteurl").then(res=>{
        dispatch({type: UPVOTE_SUCCESS});
    }).catch(err=>{
        console.log(err);
        dispatch({type: UPVOTE_FAIL});
    })
}