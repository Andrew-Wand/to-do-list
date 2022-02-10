import { projectEventListeners } from "./addProject";



// DOM elements ///////////////////////////
   
    // Side bar DOM
        const sideBtn = document.getElementById('side-bar-btn');
        const sideBar = document.getElementById('side-bar');



    // Body
        const bodyContainer = document.getElementById('body-container');

    // Modal
        const modalContainer = document.getElementById('modal-container');
        const modalSubmit = document.getElementById('modal-submit');

    // Buttons
        const addProjBtn = document.getElementById('add-project-btn');
        const sideBarProjBtn = document.getElementById('add-project-form');


    // Project Form
       

        
///////////////////////////////////////////////////////////////////////////////////////////////////



// modalSubmit.addEventListener('click', () => {
//     loadTask();
// });


// Add project form
projectEventListeners();


// Add task btn
addProjBtn.addEventListener('click', () => {
    sideBarProjBtn.classList.add('show');
});



// Side bar
sideBtn.addEventListener('click', () => {
    sideBar.classList.toggle('close');
    bodyContainer.classList.toggle('toggle');
});

