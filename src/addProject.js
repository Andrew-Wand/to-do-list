import { changeTaskDOM } from "./addTask";

const changeProjectDOM = (() => {

    // DOM
    const projDiv = document.getElementById('proj-container');
    const projContainer = document.getElementById('proj-container')



    // Project array
    let myProjects = [];



    // Project factory function
    const CreateProject = (name) => {
        let myTasks = [];
        return {
            name,
            myTasks
        }
    }

    // Open project entry form
    const openProjectForm = () => {
        const projForm = document.getElementById('add-project-form');
        projForm.classList.add('show');
        const projectTitleInput = document.getElementById('project-title-input');
        projectTitleInput.required = true;
        

       
        

        // const projForm = document.getElementById('add-project-form');
        
        // const submitProjectBtn = document.getElementById('project-submit-btn');
        // submitProjectBtn.addEventListener('click', submitProject);
        
        
        // setTimeout(function () {
        //     submitProjectBtn.setAttribute('disabled', false);
        // }, 3000);
    }

    const submitProject = (event) => {
        event.preventDefault();
        const projectTitleInput = document.getElementById('project-title-input');
        let project = CreateProject(projectTitleInput.value);
        projForm.classList.remove('show');
        addProject(project);
        projectTitleInput.value = '';

        
        
        // submitProjectBtn.setAttribute('disabled', true);

    }

    const projForm = document.getElementById('add-project-form');
        projForm.addEventListener('submit', submitProject);
   

    // Open project page
    const openProjectPage = e => {
        if (!e.target.className) {
            return
        }

        let projectKey;

        changeTaskDOM.resetProject();

        const allProjects = document.querySelectorAll('.project-container');

        allProjects.forEach((project) => {
            if (project.classList.contains('project-click')) {
                project.classList.remove('project-click');
            }
        })

        myProjects.forEach((project) => {
            if (project.name==e.target.textContent) {
                projectKey = project;
            }
        });

        e.target.classList.add('project-click');
        changeTaskDOM.openProject(projectKey);

        

    }







    // Add project to DOM
    const addProject = (project) => {
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('project-container');
        projectContainer.setAttribute('id', 'project-container');

        const projectBtnContainer = document.createElement('div');
        projectBtnContainer.classList.add('project-btn-container');

        const projectTitle = document.createElement('div');
        projectTitle.textContent = `${project.name}`;
        projectTitle.classList.add('project-title');

        const projDeleteBtn = document.createElement('button');
        projDeleteBtn.textContent = 'Delete';
        projDeleteBtn.classList.add('project-delete-btn');

        const projEditBtn = document.createElement('button');
        projEditBtn.textContent = 'Edit';
        projEditBtn.classList.add('project-edit-btn');

        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(projectBtnContainer);

        projectBtnContainer.appendChild(projDeleteBtn);
        projectBtnContainer.appendChild(projEditBtn);

        projEditBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        projDeleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        projDiv.appendChild(projectContainer);

        myProjects.push(project);

        const deleteProject = e => {
            projectContainer.textContent = '';
            projectContainer.style.display = 'none';
            const index = myProjects.indexOf(project);
            if (index > -1) {
                myProjects.splice(index, 1);
            }
        }

        projDeleteBtn.addEventListener('click', deleteProject);

        projContainer.addEventListener('click', openProjectPage, true);



    }

    const getProjectArr = () => {
        return myProjects;
    }



    return {
        addProject,
        openProjectForm,
        getProjectArr
    }



})();































const hideForm = () => {
    sideBarProjBtn.classList.remove('show');
}


export {
    changeProjectDOM
}