
const projectTitle = document.getElementById('project-title-input');
const projectSubmitBtn = document.getElementById('project-submit-btn');
const sideBarProjBtn = document.getElementById('add-project-form');
const projDiv = document.getElementById('proj-container');




let myProjects = [];

const NewProject = (name) => {
    return {
        name
    }
}

const projectEventListeners = () => {
    projectSubmitBtn.addEventListener('click', submitProject);
    
    return projectEventListeners;
}


const submitProject = () => {
    const titleInput = projectTitle.value;

    const createProject = NewProject(titleInput);

    myProjects.push(createProject);

    addProjectForm(titleInput)

    hideForm();
}




const addProjectForm = (name) => {
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('project-container');

    const projectBtnContainer = document.createElement('div');
    projectBtnContainer.classList.add('project-btn-container');

    const projectTitle = document.createElement('p');
    projectTitle.textContent = name;
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

    projDiv.appendChild(projectContainer);
     



}

const hideForm = () => {
    sideBarProjBtn.classList.remove('show');
}


export {
    projectEventListeners
}