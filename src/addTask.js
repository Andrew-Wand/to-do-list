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
        

        bodyContent.appendChild(taskContainer);

       


        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.textContent = `${task.title}`;
        taskContainer.appendChild(taskTitle);


    }


    const addNewTask = (e) => {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.add('show');
        const taskTitleInput = document.getElementById('title-input');

        

        const submitTask = e => {
            e.preventDefault();
            let task = CreateTask(taskTitleInput.value);
            const modalContainer = document.getElementById('modal-container');
            modalContainer.classList.remove('show');

            newTask(task);
            projectObj.myTasks.push(task);
        }

        const taskModalForm = document.getElementById('modal-form');
        taskModalForm.addEventListener('submit', submitTask);


  
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
        projTitle.textContent = `${project.name}`;

        projTitleContainer.appendChild(projTitle);

    
        if(project.myTasks.length !=0){
            //console.log(project.tasks);
            project.myTasks.forEach((task)=>{
                newTask(task);
            })
        } 


        
        const addTask=document.createElement("div");
        addTask.textContent="➕ Add a new task...";
        addTask.addEventListener('click',addNewTask);
        addTask.classList.add("new-task");
        bodyContent.appendChild(addTask);
       
        

      

        // Add task btn
      
       
        // 
        // 
        

   


    }

    // const addTaskBtn = document.getElementById('add-task-btn');
    // addTaskBtn.addEventListener('click', addNewTask);
   
   



    return {
        resetProject,
        openProject,
        newTask
    }



})();







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