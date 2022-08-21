document.addEventListener('DOMContentLoaded', () => {
  // your code here
  const todo = document.querySelector('#tasks');
  const newTask = document.querySelector('#new-task-description');
  const form = document.querySelector('#create-task-form');

  const myInput = (input) => {
    return input ? input : false;
  };

  const addTask = (e) => {
    e.preventDefault();
    myNewTask();
  };

  const myNewTask = () => {
    const task = newTask.value;
    if (myInput(task)) {
      createNewTask(task);
    }
  };

  const createNewTask = (content) => {
    const task = document.createElement('li');
    task.textContent = content;
    todo.appendChild(task);
    form.reset();
  };

  form.addEventListener('submit', addTask);
});
