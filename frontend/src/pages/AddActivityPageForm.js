import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddActivityPageForm = () => {

    const [activityName, setActivityName]       = useState('');
    const [date, setDate]         = useState('');
    const [participants, setParticipants] = useState('');
    
    const redirect = useNavigate();

    const addActivity = async () => {
        const newActivity = { activityName, date, participants };
        const response = await fetch('/activities', {
            method: 'post',
            body: JSON.stringify(newActivity),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`${activityName} was added`);
            redirect("/ActivitiesPage");
        } else {
            alert(`${activityName} was NOT added = ${response.status}`);
            redirect("/ActivitiesPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add an Activity</h2>
            <p>To add a new activity please complete the information below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which activity are you adding?</legend>
                    <label for="activityName">Activity Name</label>
                    <input
                        type="text"
                        placeholder="Name of the activity"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)} 
                        id="activityName" />
                    
                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        placeholder="Date of the activity"
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="participants">Number of participants</label>
                    <input
                        type="number"
                        placeholder="Total count of participants"
                        value={participants}
                        onChange={e => setParticipants(e.target.value)} 
                        id="participants" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addActivity}
                        id="submit"
                    >Add</button> to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddActivityPageForm;