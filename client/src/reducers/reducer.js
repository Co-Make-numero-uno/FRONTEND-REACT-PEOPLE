import {GET_ISSUES_START, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL} from '../actions/DashboardAction';
import {NEW_ISSUE_START, NEW_ISSUE_SUCCESS, NEW_ISSUE_FAIL} from '../actions/PostIssueAction';
import {SET_ISSUE} from '../actions/EditIssueAction'
import {EDIT_ISSUE_FAIL, EDIT_ISSUE_START, EDIT_ISSUE_SUCCESS} from '../actions/EditIssueAction'
import {UPVOTE_SUCCESS} from "../actions/UpvoteIssueAction";

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

        case SET_ISSUE:
            return {...state, issue: action.payload}

        case EDIT_ISSUE_START:
            return {
                ...state,
                loading: true,
                error: {
                    message: null,
                    err: null
                }
            }
        case EDIT_ISSUE_SUCCESS:
            const filter = state.issues.map((filtered) => 
                {if (filtered.id === action.payload.id){return action.payload} else {return filtered}}
                );
            return {...state, issues: filter, loading: false,
            }
        case EDIT_ISSUE_FAIL:
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
        case UPVOTE_SUCCESS:
            return {
                ...state,
                issue: {
                    ...state.issue,
                    votes: state.issue.votes + 1
                }
            }
        default:
            return state;
    }
}