const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText)
        .then((tasks) => {
            // Sends back the taskss in an object
            res.send(tasks.rows);
        })
        .catch((error) => {
            console.log('error getting Tasks', error);
            res.sendStatus(500);
        });
});

//POST
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log(`Adding Task`, newTask);

    let queryText = `INSERT INTO "tasks" ("task") VALUES ($1);`;
    pool.query(queryText, [newTask.task])
        .then(() => {
            console.log('Task added successfully!');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error adding new Task`, error);
            res.sendStatus(500);
        });
});

// TODO - PUT
// router.put('/:id', (req, res) => {
//     let TaskId = req.params.id;

//     // declare queryText
//     let queryText = `UPDATE "Tasks" SET "isRead" = true WHERE id = $1;`;

//     //send => database
//     pool.query(queryText, [TaskId])
//         .then((result) => {
//             //.rows just sends the rows from database
//             res.send(result.rows);
//         })
//         .catch((err) => {
//             console.log(err);
//             //error status code
//             res.sendStatus(500);
//         });
// });

// DELETE
router.delete('/:id', (req, res) => {
    let taskId = req.params.id;
    let queryText = 'DELETE FROM "tasks" WHERE id = $1;';

    pool.query(queryText, [taskId])
        .then(() => {
            console.log('Task deleted');
            res.sendStatus(200); //DELETED!!!
        })
        .catch((error) => {
            console.log(`Error DELETEing with query ${queryText}`, error);
            res.sendStatus(500); // 500 is SERVER ERROR
        });
});

module.exports = router;
