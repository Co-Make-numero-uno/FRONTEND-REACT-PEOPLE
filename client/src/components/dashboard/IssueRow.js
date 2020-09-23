import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {setIssue} from '../../actions/EditIssueAction'


const IssueCard = (props) => {

    const {push} = useHistory()
    const clickIssue = (issueID) => {
        props.setIssue(issueID)
        push(`/issue/${issueID.id}`);
        console.log(issueID);
        
    }

    return (
        <div className="issue-row">
            <div className="col">
                <p>{props.issue.title}</p>
            </div>
            <div className="col">
                <p>{props.issue.state}</p>
            </div>
            <div className="col">
                <p>{props.issue.city}</p>
            </div>
            <div className="col">
                {props.issue.upvotes}
            </div>
            <div className="col">
                <button  onClick={() => clickIssue(props.issue)}>View Issue</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        issues: state.issues,
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {setIssue})(IssueCard)