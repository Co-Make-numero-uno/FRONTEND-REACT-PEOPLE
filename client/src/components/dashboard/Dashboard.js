import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getIssues} from '../../actions/DashboardAction';

import IssueRow from './IssueRow'
import './Dashboard.css'

const Dashboard = props => {
    useEffect(()=>{
        props.getIssues();
    }, []);

    return (
        <div>
            <h2 className="header">Current Issues:</h2>
            <div className="dashboard">
                    {props.loading &&
                        <p>Loading...</p>
                    }
                    {!props.loading && props.error.message &&
                        <div>Error: {props.error.message}</div>
                    }
                <div className="dashboard">
                    <div className="issue-row header">
                        <div className="col">
                            Title
                        </div>
                        <div className="col">
                            State
                        </div>
                        <div className="col">
                            City
                        </div>
                        <div className="col">
                            Upvotes
                        </div>
                        <div className="col">
                            Link
                        </div>
                    </div>
                    {props.issues.map(issue=>
                        <IssueRow key={issue.id} issue={issue}/>
                    )}
                </div>
            </div>
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

export default connect(mapStateToProps, {getIssues})(Dashboard);