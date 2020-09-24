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
                <select name="state" value={edit.state} onChange={changeHandler}>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
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