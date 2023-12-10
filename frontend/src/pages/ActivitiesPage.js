import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ActivityList from '../components/ActivityList';
import { Link } from 'react-router-dom';

function ActivitiesPage({ setActivity }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [activities, setActivities] = useState([]);

    // RETRIEVE the entire list of activities
    const loadActivities = async () => {
        const response = await fetch('/activities');
        const activities = await response.json();
        setActivities(activities);
    } 
    

    // UPDATE a single activity
    const onEditActivity = async activity => {
        console.log("onEditActivity has been called");
        setActivity(activity);
        redirect("/EditActivityPageFor");
    }


    // DELETE a single activity  
    const onDeleteActivity = async _id => {
        const response = await fetch(`/activities/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/activities');
            const activities = await getResponse.json();
            setActivities(activities);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the activities
    useEffect(() => {
        loadActivities();
    }, []);

    // DISPLAY the activities
    return (
        <>
            <h2>List of Activities</h2>
            <p>Daily activity log that includes the activity name, the date the activity happened, and how many participants joined.</p>
            <Link to="../AddActivityPageForm">Add New Activity</Link>
            <ActivityList 
                activities={activities} 
                onEdit={onEditActivity} 
                onDelete={onDeleteActivity} 
            />
        </>
    );
}

export default ActivitiesPage;