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
        <div className="card dashcard" onClick={() => clickIssue(props.issue)}>
            <h2>{props.issue.title}</h2>
            <p>Location: {props.issue.city}, {props.issue.state}</p>
            <p>Description: <span className="description">Click to see more info on this topic.</span></p>
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