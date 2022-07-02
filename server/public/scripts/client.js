//document.ready
$(ready);

//ready function
function ready() {
    console.log('jQuery works!');
    //GET tasks
    refreshTasks();
    //handle all the click events
    addClickHandlers();
}

function addClickHandlers() {
    //POST task
    $('#addTask').on('click', addTask);
    //DELETE task
    $('#taskList').on('click', '.delete', deleteTask);
    //PUT task
    // $('#task').on('click', '.complete', completeTask);
}

// GET
function refreshTasks() {
    $.ajax({
        type: 'GET',
        url: '/tasks',
    })
        .then(function (tasks) {
            console.log(`Got the tasks:`, tasks);
            renderTasks(tasks);
        })
        .catch(function (error) {
            console.log('Error in GET', error);
        });
    clearInputs();
}

// DOM
function renderTasks(tasks) {
    //empty the table
    $('#taskList').empty();
    //loop through array of objects and render each object
    for (let i = 0; i < tasks.length; i += 1) {
        let task = tasks[i];
        // For each task, append a new row to our table
        $('#taskList').append(`
        <tr>
        <td>${task.task}</td>
        <td>${task.completed}
            <button
                data-id=${task.id}
                class="complete"> ❌ 
            </button>
        </td>
        <td>
            <button
                data-id=${task.id}
                class="delete"
            >Delete</button>
        </td>
        </tr>
        `);
    }
    clearInputs();
}

//POST
function addTask() {
    //SEND TO SERVER
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            task: $('#task').val(),
        },
    })
        .then(function (task) {
            console.log('Received task from server:', task);
            refreshTasks();
        })
        .catch(function (error) {
            console.log('Error in POST', error);
            alert('Unable to add task at this time. Please try again later.');
        });
}

// DELETE
function deleteTask() {
    let taskId = $(this).data('id');
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`,
    })
        .then(function (tasks) {
            console.log('Boop! Deleted!', tasks);
            refreshTasks();
        })
        //4. if DELETE failed, then...
        .catch(function (error) {
            alert('Error in DELETE function on client.js:', error);
        });
}

// PUT
// function completeTask() {
//     // 6. declare taskId = 'false'
//     let taskId = $(this).data('id');

//     // 8. PUT AJAX
//     $.ajax({
//         method: 'PUT',
//         url: `/tasks/${taskId}`,
//     })
//         .then(function (tasks) {
//             console.log(`This task's id is ${tasks}`);
//             //retrieve tasks
//             refreshTasks();
//         })
//         .catch(function (error) {
//             //alert user error
//             alert('ERROR in completeTask:', error);
//         });
// }

// CLEAR
function clearInputs() {
    $('input').val('');
}
