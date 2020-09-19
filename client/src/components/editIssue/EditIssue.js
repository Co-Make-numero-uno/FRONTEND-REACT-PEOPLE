import React from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'
import './EditIssue.css'
import {connect} from 'react-redux'
import {setIssue} from '../../actions/EditIssueAction'

const EditIssue = (props) => {

    const [edit, setEdit] = React.useState(props.issue)

    const changeHandler = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});
        console.log(edit)
    }

    const {id} = useParams();
    const {push} = useHistory();

    const putIssue = (e) =>{
        e.preventDefault();
        axios.put(`https://co-make-back-end.herokuapp.com/issues/${id}`, edit)
            .then(res=>{
                console.log("Put Success: ", res);
                push("/dashboard")
            })
            .catch(err=>{console.log("Put Error: ", err)})
    }

    return (
        <div>
            <h2>Edit Issue</h2>
            <form>
                <input type="text" name="title" placeholder="Name" value={edit.title} onChange={changeHandler}></input>
                <input type="text" name="city" placeholder="City" value={edit.city} onChange={changeHandler}></input>
                <input type="text" name="state" placeholder="State" value={edit.state} onChange={changeHandler}></input>
                <input type="text" name="description" placeholder="Description" value={edit.description} onChange={changeHandler}></input>
            </form>
            <button onClick={putIssue}>Submit Edit</button>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        issue: state.issue
    }
}

export default connect(mapStateToProps, {setIssue})(EditIssue);