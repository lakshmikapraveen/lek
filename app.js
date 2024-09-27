document.getElementById('add-button').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        const todoList = document.getElementById('todo-list');

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Add delete button to each task
        const deleteButton = document.createElement('span');
        deleteButton.textContent = ' X';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Clear the input field
        todoInput.value = '';
    }
});
