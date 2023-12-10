import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditActivityPageForm = ({ activityToEdit }) => {
    console.log("showing activity to edit", activityToEdit)
    const [activityName, setActivityName]       = useState(activityToEdit.activityName);
    const [date, setDate]         = useState(activityToEdit.date);
    const [participants, setParticipants] = useState(activityToEdit.participants);
    
    const redirect = useNavigate();

    const editActivity = async () => {
        const response = await fetch(`/activities/${activityToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                activityName: activityName, 
                date: date, 
                participants: participants
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`${activityName} was edited successfully`);
        } else {
            const errMessage = await response.json();
            alert(`${activityName} was NOT edited successfully ${response.status}. ${errMessage.Error}`);
        }
        redirect("/ActivitiesPage");
    }

    return (
        <>
        <article>
            <h2>Edit an activity</h2>
            <p>Edit activity details below.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which activity are you editing?</legend>
                    <label for="activityName">Activity Name</label>
                    <input
                        type="text"
                        value={activityName}
                        onChange={e => setActivityName(e.target.value)} 
                        id="activityName" />
                    
                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="participants">Number of Participants</label>
                    <input
                        type="number"
                        value={participants}
                        onChange={e => setParticipants(e.target.value)} 
                        id="participants" />

                    <label for="submit">
                    <button
                        onClick={editActivity}
                        id="submit"
                    >Save</button> updates to the collection</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditActivityPageForm;