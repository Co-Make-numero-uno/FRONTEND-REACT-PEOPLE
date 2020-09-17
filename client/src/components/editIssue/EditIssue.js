import React from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'
import './EditIssue.css'

const EditIssue = () => {
    const {id} = useParams();
    const {push} = useHistory();

    const putIssue = (e) =>{
        e.preventDefault();
        axios.put(`http://${id}`)
            .then(res=>{
                console.log("Put Success: ", res);
            })
            .catch(err=>{console.log("Put Error: ", err)})
    }

    return (
        <div>
            <h2>Edit Issue</h2>
            <form>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="State"></input>
                <input type="text" placeholder="Description"></input>
            </form>
            <button onClick={putIssue}>Submit Edit</button>
        </div>
    );
};

export default EditIssue;