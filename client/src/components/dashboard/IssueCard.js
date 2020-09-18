import React from 'react';
import {useHistory} from 'react-router-dom'


const IssueCard = (props) => {

    const {push} = useHistory()
    const clickIssue = (issue) => {
        push(`/issue/${issue}`);
        console.log(issue)
    }

    return (
        <div className="card" onClick={() => clickIssue(props.issue.id)}>
            <h2>{props.issue.title}</h2>
            <p>Location: {props.issue.city}, {props.issue.state}</p>
            <p>Description: {props.issue.description}</p>
        </div>
    );
};

export default IssueCard;