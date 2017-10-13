// tasks.js
// This script manages a to-do list.

// Variable that stores the tasks:
var tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';
    var task = document.getElementById('task');
    var output = document.getElementById('output');
    var message = [];

    if (task.value) {
        tasks.push(task.value);
        task.value = '';
        rNum = Math.floor(Math.random() * tasks.length);
        message = ['<h2>To-Do</h2><ol>'];
        for (var i = 0, count = tasks.length; i < count; i++) {
            message = ['<li>' + tasks[rNum] + '</li>'];
        }
        message = ['</ol>'];
        output.innerHTML = message.join();
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;