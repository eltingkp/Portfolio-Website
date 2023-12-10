import React, { useState } from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { RiDeleteBack2Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


function Activity({ activity, onEdit, onDelete }) {
    const [date] = useState(activity.date.slice(0,10));
    return (
        <tr>
            <td>{activity.activityName}</td>
            <td>{date}</td>
            <td>{activity.participants}</td>

            {/* Update these icons to something that matches your style. */}
            <td><RiDeleteBack2Fill onClick={() => onDelete(activity._id)} /></td>
            <td><GrEdit onClick={() => onEdit(activity)} /></td>
        </tr>
    );
}

export default Activity;