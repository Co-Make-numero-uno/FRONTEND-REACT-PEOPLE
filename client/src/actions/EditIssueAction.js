export const SET_ISSUE = "SET_ISSUE";

export const setIssue = (action) => {
    console.log("SET_ISSUE")
    return {type: SET_ISSUE, payload: action};
}