import React from 'react';
import Activity from './Activity';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function ActivityList({ activities, onDelete, onEdit }) {
    return (
        <table id="activities">
            <caption>Manage Activities</caption>
            <thead>
                <tr>
                    <th>Activity Name</th>
                    <th>Date</th>
                    <th>Total Participants</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {activities.map((activity, i) => 
                    <Activity 
                        activity={activity} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default ActivityList;
