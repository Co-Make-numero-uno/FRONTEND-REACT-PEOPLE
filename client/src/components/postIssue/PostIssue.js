import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {newIssue} from "../../actions/PostIssueAction";

import './postIssue.css';

const PostIssue = props => {
    const initialFormState = {
        title: '',
        description: '',
        state: '',
        city: ''
    }
    const [formState, setFormState] = useState(initialFormState);
    
    const updateFormData = e =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const createIssue = e => {
        e.preventDefault();
        props.newIssue(formState);
    }

    return (
        <main className='new-issue'>
            <h1>Post Your Issue</h1>
            <p>
                Let your voice be heard! Give us details about an issue harming your community
                and gain support to see real change.
            </p>
            <form onSubmit={createIssue}>
                <div className='form-group'>
                    <label>Title: </label>
                    <input onChange={updateFormData} value={formState.title} type='text' name='title'/>
                </div>
                <div className='form-group'>
                    <label>Description: </label>
                    <textarea onChange={updateFormData} value={formState.description} rows='5' name='description'></textarea>
                </div>
                <div className='form-group'>
                    <label>State: </label>
                    <input onChange={updateFormData} value={formState.state} type='text' name='state'></input>
                </div>
                <div className='form-group'>
                    <label>City: </label>
                    <input onChange={updateFormData} value={formState.city} type='text' name='city'></input>
                </div>
                <div className='form-group'>
                    <button>Submit</button>
                </div>
            </form>
        </main>
    );
};

const mapStateToProps = state =>{
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps, {newIssue})(PostIssue);