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
        default:
            return state;
    }
}