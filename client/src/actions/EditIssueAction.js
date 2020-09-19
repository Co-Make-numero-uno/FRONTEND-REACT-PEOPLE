import axios from 'axios';

export const SET_ISSUE = "SET_ISSUE";
export const EDIT_ISSUE_START = "EDIT_ISSUE_START";
export const EDIT_ISSUE_SUCCESS = "EDIT_ISSUE_SUCCESS";
export const EDIT_ISSUE_FAIL = "EDIT_ISSUE_FAIL";

export const setIssue = (action) => {
    console.log("SET_ISSUE:", action)
    return {type: SET_ISSUE, payload: action};
}

export const editIssue = (action) => (dispatch) =>{
    console.log("editIssue ran: ", action.id)
    dispatch({type: EDIT_ISSUE_START});
    axios.put(`https://co-make-back-end.herokuapp.com/issues/${action.id}`).then(res=>{
        dispatch({type: EDIT_ISSUE_SUCCESS, payload: res.data});
    }).catch(err=>{
        const errMessage = err.response.data.message;
        dispatch({type: EDIT_ISSUE_FAIL, payload: {message: errMessage, err: err.response}});
    });
}