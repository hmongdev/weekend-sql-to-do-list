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
    $('tbody').on('click', '.delete', deleteTask);
    //PUT task
    $('tbody').on('click', '.complete', completeTask);
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
    $('tbody').empty();
    //loop through array of objects and render each object
    for (let i = 0; i < tasks.length; i += 1) {
        let task = tasks[i];
        // For each task, append a new row to our table
        $('tbody').append(`
        <tr class="status" data-status="${task.completed}">
        <td>${task.task}</td>
        <td>${task.completed}
            <button
                data-id="${task.id}"
                data-done="${task.completed}"
                class="complete">❌
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
    //create object
    let task = {
        task: $('#task').val(),
    };
    //check if task is empty
    if (!task.task) {
        alert(`Please enter a task!`);
    } else {
        //SEND TO SERVER
        $.ajax({
            type: 'POST',
            url: '/tasks',
            data: task,
        })
            .then(function (task) {
                console.log('Received task from server:', task);
                refreshTasks();
            })
            .catch(function (error) {
                console.log('Error in POST', error);
                alert(
                    'Unable to add task at this time. Please try again later.'
                );
            });
    }
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
function completeTask() {
    let taskId = $(this).data('id');
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
    })
        .then(function (tasks) {
            console.log(`Second task's id:`, tasks);
            refreshTasks();
        })
        .catch(function (error) {
            //alert user error
            alert('ERROR in completeTask:', error);
        });
}

// CLEAR
function clearInputs() {
    $('input').val('');
}
