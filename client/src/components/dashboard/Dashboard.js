import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getIssues} from '../../actions/DashboardAction';

import IssueCard from './IssueCard'
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
                        <div>{props.error.message}</div>
                    }
                <div className="dashboard">{props.issues.map(issue=><IssueCard key={issue.id} issue={issue}/>)}</div>
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