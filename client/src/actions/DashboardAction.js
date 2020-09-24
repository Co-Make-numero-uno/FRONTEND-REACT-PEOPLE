import axios from "axios";

export const GET_ISSUES_START = "GET_ISSUES_START";
export const GET_ISSUES_SUCCESS = "GET_ISSUES_SUCCESS";
export const GET_ISSUES_FAIL = "GET_ISSUES_FAIL";

export const getIssues = () => (dispatch) =>{
    dispatch({type: GET_ISSUES_START});
    axios.get("https://co-make-back-end.herokuapp.com/issues/").then(res=>{
        dispatch({type: GET_ISSUES_SUCCESS, payload: res.data});
    }).catch(err=>{
        const errMessage = err.response.data.message;
        dispatch({type: GET_ISSUES_FAIL, payload: {message: errMessage, err: err.response}});
    });
}