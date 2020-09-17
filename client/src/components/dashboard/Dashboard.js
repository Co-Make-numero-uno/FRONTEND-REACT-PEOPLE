import React from 'react';
import IssueCard from './IssueCard'

const dummyData = [{
    name: "Pothole",
    city: "Chicago",
    state: "IL",
    description: "On 45th and Western",
    id: "1"
},
{
    name: "Low Water Pressure",
    city: "Hammond",
    state: "IN",
    description: "3336 165th Street",
    id: "2"
}]

const Dashboard = () => {
    return (
        <div>
            {dummyData.map(issue=><IssueCard key={issue.id} issue={issue}/>)}
        </div>
    );
};

export default Dashboard;