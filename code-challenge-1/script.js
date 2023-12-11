document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let tasks = [];
  
    // Function to render tasks
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach(function(task, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
          <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
          <button data-index="${index}">Delete</button>
        `;
        taskList.appendChild(listItem);
      });
    }


  
    // Function to add a new task
    function addTask(text) {
      tasks.push({ text, completed: false });
      renderTasks();
      updateLocalStorage();
    }
  
    // Function to delete a task
    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
      updateLocalStorage();
    }
  
    // Function to mark task as completed
    function toggleCompleted(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
      updateLocalStorage();
    }
  
    // Function to update local storage
    function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Event listener for task submission
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  
    // Event delegation for checkbox and delete button clicks
    taskList.addEventListener('click', function(e) {
      if (e.target.matches('input[type="checkbox"]')) {
        const index = e.target.dataset.index;
        toggleCompleted(index);
      } else if (e.target.matches('button')) {
        const index = e.target.dataset.index;
        deleteTask(index);
      }
    });
  
    // Retrieve tasks from local storage on page load
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      tasks = storedTasks;
      renderTasks();
    }
  });
  