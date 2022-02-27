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




window.onbeforeunload = () => {
    projects = changeProjectDOM.getProjectArr();
    localStorage.setItem('projects', JSON.stringify(projects));
}