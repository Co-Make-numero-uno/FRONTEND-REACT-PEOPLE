import React from 'react';
import {useHistory} from 'react-router-dom'

const IssueCard = (props) => {
    console.log(props.issue.id)

    const {push} = useHistory()
    const clickIssue = (issue) => {
        push(`/issue/${issue}`);
        console.log(issue)
    }

    return (
        <div onClick={() => clickIssue(props.issue.id)}>
            <p>Name: {props.issue.name}</p>
            <p>Location: {props.issue.city}, {props.issue.state}</p>
            <p>Description: {props.issue.description}</p>
        </div>
    );
};

export default IssueCard;