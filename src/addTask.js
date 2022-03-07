const changeTaskDOM = (() => {

    let projectObj;

    const bodyContent = document.getElementById('body-content');

    const pTitle = document.getElementById('project-title');


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
        
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        bodyContent.appendChild(taskContainer);

        // Task check box
        const checkBox = document.createElement('input');
        checkBox.classList.add('task-check-box');
        checkBox.type = 'checkbox';
        taskContainer.appendChild(checkBox);




        // Task title
        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.title}`;
        taskContainer.appendChild(taskTitle);

        // Task btn container
        const taskBtnContainer = document.createElement('div');
        taskContainer.appendChild(taskBtnContainer)

        // Task edit btn
        const taskEditBtn = document.createElement('button');
        taskEditBtn.textContent = 'Edit';
        taskEditBtn.classList.add('task-delete-btn');
        taskEditBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

        taskBtnContainer.appendChild(taskEditBtn);

        // Task delete btn
        const taskDeleteBtn = document.createElement('button');
        taskDeleteBtn.textContent = 'Delete';
        taskDeleteBtn.classList.add('task-edit-btn');
        taskDeleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        taskBtnContainer.appendChild(taskDeleteBtn);


        // Task delete btn event listener
        const deleteTask = e => {
            taskContainer.textContent = '';
            taskContainer.style.display = 'none';
            const index=projectObj.myTasks.indexOf(task);
            if(index>-1) projectObj.myTasks.splice(index,1);
        }
        
        taskDeleteBtn.addEventListener('click', deleteTask);


        // Check box event listener
        const checkBoxEvent = () => {

            taskTitle.classList.toggle('derp');
            // taskTitle.style.setProperty('text-decoration', 'line-through');
        }

        checkBox.addEventListener('click', checkBoxEvent);

    }

    // Open add new task modal
    const addNewTask = (e) => {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.add('show');

    }


    // Submit task
    const taskTitleInput = document.getElementById('title-input');
    const submitTask = e => {
        e.preventDefault();
        let task = CreateTask(taskTitleInput.value);
        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.remove('show');
        taskTitleInput.value = '';
        newTask(task);
        projectObj.myTasks.push(task);
    }
    const taskModalForm = document.getElementById('modal-form');
    taskModalForm.addEventListener('submit', submitTask);

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
        projTitle.textContent = `${project.name}`;

        projTitleContainer.appendChild(projTitle);


        if (project.myTasks.length != 0) {
            //console.log(project.tasks);
            project.myTasks.forEach((task) => {
                newTask(task);
            })
        }



        const addTask = document.createElement("div");
        addTask.innerHTML = 
        `<button class="add-task-btn" id="add-task-btn">
            <i class="fa-solid fa-circle-plus"></i>
        </button>`;
        addTask.addEventListener('click', addNewTask);
        addTask.classList.add("new-task");
        projTitleContainer.appendChild(addTask);

    }

    // const addTaskBtn = document.getElementById('add-task-btn');
    // addTaskBtn.addEventListener('click', addNewTask);


    




    return {
        resetProject,
        openProject,
        newTask
    }



})();



























export {
    changeTaskDOM
}