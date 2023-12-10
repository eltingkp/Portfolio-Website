// Controllers for the Activity Collection

import 'dotenv/config';
import express from 'express';
import * as activities from './activities-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/activities', (req,res) => { 
    activities.createActivity(
        req.body.activityName, 
        req.body.participants, 
        req.body.date
        )
        .then(activity => {
            console.log(`"${activity.activityName}" was created!`);
            res.status(201).json(activity);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: `The activity "${req.body.activityName}" cannot be created.` });
        });
});


// RETRIEVE controller ****************************************************
app.get('/activities', (req, res) => {
    activities.retrieveActivities()
        .then(activities => { 
            if (activities !== null) {
                console.log('All activities have been retrieved from the database.');
                res.json(activities);
            } else {
                res.status(404).json({ Error: 'A list of activities does not exist in the database.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The list of activities cannot be retrieved.' });
        });
});


// RETRIEVE by ID controller
app.get('/activities/:_id', (req, res) => {
    activities.retrieveActivitiesByID(req.params._id)
    .then(activity => { 
        if (activity !== null) {
            console.log(`"${activity.activityName}" was retrieved!`);
            res.json(activity);
        } else {
            res.status(404).json({ Error: `The activity with the ID "${req.params._id}" is non-existent.`});
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `The activity with the ID "${req.params._id}" cannot be retrieved.`});
    });

});


// UPDATE controller ************************************
app.put('/activities/:_id', (req, res) => {
    activities.updateActivity(
        req.params._id, 
        req.body.activityName, 
        req.body.participants, 
        req.body.date
    )
    .then(activity => {
        console.log(`The activity "${activity.activityName}" has been updated.`);
        res.json(activity);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `The activity "${req.body.activityName}" cannot be updated.`});
    });
});


// DELETE Controller ******************************
app.delete('/activities/:_id', (req, res) => {
    activities.deleteActivityById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: `The activity with the ID "${req.params._id}" was successfully deleted.`});
            } else {
                res.status(404).json({ Error: `The activity with the ID "${req.params._id}" is non-existent.`});
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).send({ Error: `The activity with the ID "${req.params._id}" cannot be deleted.`});
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});