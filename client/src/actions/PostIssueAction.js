import axios from 'axios'

export const NEW_ISSUE_FAIL = "NEW_ISSUE_FAIL";
export const NEW_ISSUE_SUCCESS = "NEW_ISSUE_SUCCESS";
export const NEW_ISSUE_START = "NEW_ISSUE_START";

export const newIssue = (issue) => (dispatch) => {
    dispatch({type: NEW_ISSUE_START})
    axios.post("https://co-make-back-end.herokuapp.com/issues", issue)
    .then((res)=>{
        console.log(res)
        dispatch({type: NEW_ISSUE_SUCCESS, payload: res.data})
    })
    .catch(err=> {
        console.log("Posting error: ", err);
        const errMessage = err.response.data.message;
        dispatch({type: NEW_ISSUE_FAIL, payload: {message: errMessage, err: err}})
    })
}