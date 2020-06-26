// We were asked to implement a task list and the following functionality:
//
// adding a new task
// completing a given number of existing tasks
// displaying the task list
// We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.
//
// Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.

const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  let i;

  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

// Line 26 uses the delete operator in order to remove the first todo in the list of todos. The delete operator removes the element in the array, but does not modify the array's length and leaves an empty slot
// in place of the removed element. In the following iteration, the element at index 0 will therefore be an empty slot and todos[0] will return undefined.

// This can be fixed by using Array.prototype.splice() instead of the delete operator. Change line 26 to:

// todos.splice(0, 1);
// or
// todos.shift();
