const changeTaskDOM = (() => {
    let projectObj;

    const bodyContent = document.getElementById('body-content');

    const bodyContain = document.getElementById('project-title');
    

    const CreateTask = (title) => {
        return {
            title
        }
    }

    const resetProject = () => {
        bodyContent.textContent = '';
    }




    // Create Task in HTML
    const newTask = (task) => {
        const ul = document.createElement('ul');
        const li = document.createElement('li');

        bodyContent.appendChild(ul);

        ul.appendChild(li);

        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');
        li.appendChild(taskContent);

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.title}`;
        taskContent.appendChild(taskTitle);


    }


    const addNewTask = (task) => {

        const taskTitleInput = document.getElementById('title-input');

        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.add('show');

        const submitTask = e => {
            e.preventDefault();
            let task = Task(taskTitleInput.value);
            const modalContainer = document.getElementById('modal-container');
            modalContainer.classList.remove('show');

            newTask(task);
            projectObj.tasks.push(task);
        }

        const taskSubmitBtn = document.getElementById('modal-submit');
        taskSubmitBtn.addEventListener('click', submitTask);

    }




    // Task Title DOM
    const openProject = (project) => {
        projectObj = project;
    
        // Title container
        const projTitleContainer = document.createElement('div');
        projTitleContainer.classList.add('proj-title-container');
        bodyContent.appendChild(projTitleContainer);


        // Title
        const projTitle = document.createElement('div');
        projTitle.classList.add('proj-title');
        projTitle.textContent = project.name;

        projTitleContainer.appendChild(projTitle);

        if (project.tasks.length != 0) {
            project.tasks.forEach((task) => {
                newTask(task);
            })
        }




        // Add task btn
        const addTaskBtn = document.getElementById('add-task-btn');
        projTitleContainer.appendChild(addTaskBtn);
        addTaskBtn.addEventListener('click', addNewTask);



    }





    return {
        resetProject,
        openProject,
        newTask
    }



})();



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

















// update title of the content
function updateTitle(nameNode) {
    const mainTitle = document.querySelector('.proj-title');
    mainTitle.textContent = nameNode.textContent;
}





export {
    changeTaskDOM
}