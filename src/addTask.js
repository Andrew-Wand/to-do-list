import {
    myProjects,
    projectEventListeners
} from './addProject';

const bodyContainer = document.getElementById('body-container');
const projectTitleInput = document.getElementById('project-title-input');



const CreateTask = (title) => {
    return {
        title
    }
}






// submit Task

const submitTask = () => {
    
}





// Task Title DOM
const openTask = () => {
    bodyContainer.innerHTML = '';

    // Title container
    const projTitleContainer = document.createElement('div');
    projTitleContainer.classList.add('proj-title-container');
    bodyContainer.appendChild(projTitleContainer);


    // Title
    const projTitle = document.createElement('h1');
    projTitle.classList.add('proj-title');
    projTitleContainer.appendChild(projTitle);


    projTitle.innerHTML = projectTitleInput.value;


    // Add task button
    const addTaskBtn = document.createElement('button');
    addTaskBtn.innerText = 'Button';
    addTaskBtn.classList.add('add-task-btn');
    addTaskBtn.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';
    projTitleContainer.appendChild(addTaskBtn);

    return projTitleContainer
}

export {
    openTask
}


