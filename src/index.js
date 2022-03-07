import { changeProjectDOM } from "./addProject";




// Local storage for projects
let projects = [];
if (localStorage.hasOwnProperty('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    projects.forEach(project => {
        changeProjectDOM.addProject(project)
    });
}



// Side bar
const sideBtn = document.getElementById('side-bar-btn');
const sideBar = document.getElementById('side-bar');
const bodyContainer = document.getElementById('body-container');

sideBtn.addEventListener('click', () => {
    sideBar.classList.toggle('close');
    bodyContainer.classList.toggle('toggle');
});


// Projects
const addProjectBtn = document.getElementById('add-project-btn');


const addNewProject = e => {
    changeProjectDOM.openProjectForm();
    projects = changeProjectDOM.getProjectArr();
    const submitProjectBtn = document.getElementById('project-submit-btn');
    // submitProjectBtn.removeAttribute('disabled');

}

addProjectBtn.addEventListener('click', addNewProject);

// Cancel btn modal
const projCancelBtn = document.getElementById('project-cancel-btn');
projCancelBtn.addEventListener('click', () => {
    const projForm = document.getElementById('add-project-form');
    projForm.classList.remove('show');
});
const modalCancel = document.querySelector('.modal-cancel');
modalCancel.addEventListener('click', () => {
    const modalCont = document.getElementById('modal-container');
    modalCont.classList.remove('show');
});




window.onbeforeunload = () => {
    projects = changeProjectDOM.getProjectArr();
    localStorage.setItem('projects', JSON.stringify(projects));
}

