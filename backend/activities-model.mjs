// Models for the Activity Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'There has been an internal server error and you are unable to connect to the database.' });
    } else  {
        console.log('You are connected to the database.');
    }
});

// SCHEMA: Define the collection's schema.
const activitySchema = mongoose.Schema({
	activityName:    { type: String, required: true },
	participants:     { type: Number, required: true },
	date: { type: Date, required: true }
});

// Compile the model from the schema 
// by defining the collection name "activities".
const activities = mongoose.model('Activity', activitySchema);


// CREATE model *****************************************
const createActivity = async (activityName, participants, date) => {
    const activity = new activities({ 
        activityName: activityName, 
        participants: participants, 
        date: date
    });
    return activity.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveActivities = async () => {
    const query = activities.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveActivitiesByID = async (_id) => {
    const query = activities.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteActivityById = async (_id) => {
    const result = await activities.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateActivity = async (_id, activityName, participants, date) => {
    const result = await activities.replaceOne({_id: _id }, {
        activityName: activityName,
        participants: participants,
        date: date
    });
    return { 
        _id: _id, 
        activityName: activityName,
        participants: participants,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createActivity as createActivity, retrieveActivities as retrieveActivities, retrieveActivitiesByID as retrieveActivitiesByID, updateActivity as updateActivity, deleteActivityById as deleteActivityById }