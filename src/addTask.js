







function openTaskModal() {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('show');
}



// Hide task form
const hideListForm = () => {
    const listForm = document.getElementById('modal-form');
    const listInput = document.getElementById('title-input');

    listInput.value = "";
    listForm.classList.add("hidden");
}





const CreateTask = (dataProject, id, title) => {
    return {
        dataProject,
        id,
        title
    }
}






// Create Task in HTML
function addTask(listId, title) {
    const ul = document.getElementById('task-list');
    const li = document.createElement('li');

    li.id = listId;
    ul.appendChild(li);

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    li.appendChild(taskContent);

    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task-title');
    taskTitle.textContent = title;
    taskContent.appendChild(taskTitle);

}




// update title of the content
function updateTitle(nameNode) {
    const mainTitle = document.querySelector('.proj-title');
    mainTitle.textContent = nameNode.textContent;
}



// Task Title DOM
const openProject = () => {
    bodyContainer.innerHTML = '';

    // Title container
    const projTitleContainer = document.createElement('div');
    projTitleContainer.classList.add('proj-title-container');
    bodyContainer.appendChild(projTitleContainer);


    // Title
    const projTitle = document.createElement('h1');
    projTitle.classList.add('proj-title');
    projTitleContainer.appendChild(projTitle);




    // Add task btn
    const addTaskBtn = document.getElementById('add-task-btn');
    projTitleContainer.appendChild(addTaskBtn);

}

export {
   
}