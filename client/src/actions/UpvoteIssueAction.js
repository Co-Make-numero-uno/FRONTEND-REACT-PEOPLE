import axios from "../axiosWithAuth";

export const UPVOTE_START = "UPVOTE_START";
export const UPVOTE_SUCCESS = "UPVOTE_SUCCESS";
export const UPVOTE_FAIL = "UPVOTE_FAIL";

export const upvote = (issue_id) => dispatch => {
    dispatch({type: UPVOTE_START});
    axios().get(`https://co-make-back-end.herokuapp.com/issues/${issue_id}/upvote/vote`).then(res=>{
        if(res.status === 201) dispatch({type: UPVOTE_SUCCESS});
    }).catch(err=>{
        console.log(err.response);
        const errMessage = err.response.data.message;
        dispatch({type: UPVOTE_FAIL, payload: {message: errMessage, err: err.response}});
    })
}