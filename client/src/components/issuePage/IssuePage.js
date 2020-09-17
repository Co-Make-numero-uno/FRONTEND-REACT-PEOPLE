import React from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'

const IssuePage = () => {

    const {id} = useParams()
    const {push} = useHistory()

    console.log("use params: ", id)

    const editButton = (issue) => {
        console.log(issue);
        push(`/issue/${issue}/edit`);
        console.log(issue)
    }

    const deleteButton = (issue) => {
        axios.delete(`http://api.issue${issue.id}`)
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    }


    return (
        <div className="card">
            <h2> </h2>
            <p>Location: </p>
            <p>Description: </p>
            <button onClick={() => editButton(id)}>Edit Issue</button>
            <button onClick={() => deleteButton(id)}>Delete Issue</button>
        </div>
    );
};

export default IssuePage;