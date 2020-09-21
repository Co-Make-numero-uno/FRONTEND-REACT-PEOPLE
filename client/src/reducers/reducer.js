import {GET_ISSUES_START, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL} from '../actions/DashboardAction';
import {NEW_ISSUE_START, NEW_ISSUE_SUCCESS, NEW_ISSUE_FAIL} from '../actions/PostIssueAction';
const initialState = {
    issues: [],
    issue: {},
    issueEditing: {},
    loading: false,
    error: {
        message: null,
        err: null
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_ISSUES_START:
            return {
                ...state,
                loading: true,
                issues: [],
                error: {
                    message: null,
                    err: null
                }
            }
        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                loading: false,
                issues: action.payload
            }
        case GET_ISSUES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case NEW_ISSUE_START:
            return {
                ...state,
                loading: true,
                error: {
                    message: null,
                    err: null
                }
            }
        case NEW_ISSUE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case NEW_ISSUE_SUCCESS: 
            return {
                ...state,
                loading: false,
                error: {
                    message: null,
                    err: null
                }
            }
        default:
            return state;
    }
}