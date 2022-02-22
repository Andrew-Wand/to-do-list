


const changeProjectDOM = (() => {

// DOM
const projDiv = document.getElementById('proj-container');



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

    const submitProject = (e) => {
        e.preventDefault();
        const projectTitleInput = document.getElementById('project-title-input');
        let project = CreateProject(projectTitleInput.value);
        projForm.classList.remove('show');
        addProject(project);
    }
    const submitProjectBtn = document.getElementById('project-submit-btn');
    submitProjectBtn.addEventListener('click', submitProject);
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