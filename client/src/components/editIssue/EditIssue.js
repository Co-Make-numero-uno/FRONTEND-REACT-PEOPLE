import React from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'
import './EditIssue.css'
import {connect} from 'react-redux'
import {setIssue, editIssue} from '../../actions/EditIssueAction'

const EditIssue = (props) => {
    const {id} = useParams();
    const {push} = useHistory();
    const [edit, setEdit] = React.useState(props.issue)

    const handleEdit = () => {
        props.editIssue(edit);
        push(`/dashboard`)
    }

    const changeHandler = (e) => {
        setEdit({...edit, [e.target.name]: e.target.value});
    }

    

    return (
        <div>
            {props.loading &&
                <p>Loading...</p>
            }
            {!props.loading && props.error.message &&
                <p>{props.error.message}</p>
            }
            <div>
            <h2>Edit Issue</h2>
            <form>
                <input type="text" name="title" placeholder="Name" value={edit.title} onChange={changeHandler}></input>
                <input type="text" name="city" placeholder="City" value={edit.city} onChange={changeHandler}></input>
                <input type="text" name="state" placeholder="State" value={edit.state} onChange={changeHandler}></input>
                <textarea type="text" name="description" placeholder="Description" value={edit.description} onChange={changeHandler}></textarea>
            </form>
            <button className="editbutton" onClick={()=> {handleEdit()}}>Submit Edit</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        issue: state.issue,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {setIssue, editIssue}

export default connect(mapStateToProps, mapDispatchToProps)(EditIssue);