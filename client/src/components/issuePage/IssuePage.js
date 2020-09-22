import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import {getIssues} from '../../actions/DashboardAction'

//deploy site
//add upvotes
//private routes


const IssuePage = (props) => {

    const {id} = useParams()
    const {push} = useHistory()

    const editButton = (issue) => {
        push(`/issue/${issue}/edit`);
    }

    const deleteButton = (issue) => {
        axios.delete(`https://co-make-back-end.herokuapp.com/issues/${issue}`)
        .then(res=>{
            console.log("delete ran: ", res); 
            push("/dashboard");
        })
        .catch(err=>{console.log(err)})
    }


    return (
        <div className="card">
            <h2>{props.issue.title}</h2>
            <p>Location: {props.issue.city}, {props.issue.state}</p>
            <p>Description: {props.issue.description}</p>
            <div>
                <button className="cardbutton" onClick={() => editButton(id)}>Edit Issue</button>
                <button className="cardbutton" onClick={() => deleteButton(props.issue.id)}>Delete Issue</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        issues: state.issues,
        issue: state.issue,
        loading: state.loading,
        error: state.error
    }
}


export default connect(mapStateToProps, {getIssues})(IssuePage);