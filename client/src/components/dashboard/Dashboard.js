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
        <div className="dashboard">
            {props.issues.map(issue=><IssueCard key={issue.id} issue={issue}/>)}
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