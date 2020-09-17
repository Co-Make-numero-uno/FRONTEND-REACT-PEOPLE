import axios from 'axios'

export const NEW_ISSUE_FAIL = "NEW_ISSUE_FAIL";
export const NEW_ISSUE_SUCCESS = "NEW_ISSUE_SUCCESS";
export const NEW_ISSUE_START = "NEW_ISSUE_START";

export const newIssue = (issue) => (dispatch) => {
    console.log("New issue payload: ", issue)
    dispatch({type: NEW_ISSUE_START})
    axios.post("http://", issue)
    .then((res)=>{
        console.log("Posting Success: ", res);
        dispatch({type: NEW_ISSUE_SUCCESS, payload: res.data})
    })
    .catch(err=> {
        console.log("Posting error: ", err);
        dispatch({type: NEW_ISSUE_FAIL})
    })
}