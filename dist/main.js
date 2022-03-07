(()=>{"use strict";const e=(()=>{let e;const t=document.getElementById("body-content"),n=(document.getElementById("project-title"),n=>{const c=document.createElement("div");c.classList.add("task-container"),t.appendChild(c);const d=document.createElement("input");d.classList.add("task-check-box"),d.type="checkbox",c.appendChild(d);const o=document.createElement("div");o.classList.add("task-title"),o.textContent=`${n.title}`,c.appendChild(o);const s=document.createElement("div");c.appendChild(s);const a=document.createElement("button");a.textContent="Edit",a.classList.add("task-delete-btn"),a.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',s.appendChild(a);const l=document.createElement("button");l.textContent="Delete",l.classList.add("task-edit-btn"),l.innerHTML='<i class="fa-solid fa-trash-can"></i>',s.appendChild(l),l.addEventListener("click",(t=>{c.textContent="",c.style.display="none";const d=e.myTasks.indexOf(n);d>-1&&e.myTasks.splice(d,1)})),d.addEventListener("click",(()=>{o.classList.toggle("derp")}))}),c=e=>{document.getElementById("modal-container").classList.add("show")},d=document.getElementById("title-input");return document.getElementById("modal-form").addEventListener("submit",(t=>{t.preventDefault();let c={title:d.value};document.getElementById("modal-container").classList.remove("show"),d.value="",n(c),e.myTasks.push(c)})),{resetProject:()=>{t.textContent=""},openProject:d=>{e=d;const o=document.createElement("div");o.classList.add("proj-title-container"),t.appendChild(o);const s=document.createElement("div");s.classList.add("proj-title"),s.textContent=`${d.name}`,o.appendChild(s),0!=d.myTasks.length&&d.myTasks.forEach((e=>{n(e)}));const a=document.createElement("div");a.innerHTML='<button class="add-task-btn" id="add-task-btn">\n            <i class="fa-solid fa-circle-plus"></i>\n        </button>',a.addEventListener("click",c),a.classList.add("new-task"),o.appendChild(a)},newTask:n}})(),t=(()=>{const t=document.getElementById("proj-container"),n=document.getElementById("proj-container");let c=[];const d=document.getElementById("add-project-form");d.addEventListener("submit",(e=>{e.preventDefault();const t=document.getElementById("project-title-input");let n={name:t.value,myTasks:[]};d.classList.remove("show"),s(n),t.value=""}));const o=t=>{if(!t.target.className)return;let n;e.resetProject(),document.querySelectorAll(".project-container").forEach((e=>{e.classList.contains("project-click")&&e.classList.remove("project-click")})),c.forEach((e=>{e.name==t.target.textContent&&(n=e)})),t.target.classList.add("project-click"),e.openProject(n)},s=e=>{const d=document.createElement("div");d.classList.add("project-container"),d.setAttribute("id","project-container");const s=document.createElement("div");s.classList.add("project-btn-container");const a=document.createElement("div");a.textContent=`${e.name}`,a.classList.add("project-title");const l=document.createElement("button");l.textContent="Edit",l.classList.add("project-edit-btn"),s.appendChild(l);const i=document.createElement("button");i.textContent="Delete",i.classList.add("project-delete-btn"),d.appendChild(a),d.appendChild(s),s.appendChild(i),l.innerHTML='<i class="fa-solid fa-pen-to-square"></i>',i.innerHTML='<i class="fa-solid fa-trash-can"></i>',t.appendChild(d),c.push(e),i.addEventListener("click",(t=>{d.textContent="",d.style.display="none";const n=c.indexOf(e);n>-1&&c.splice(n,1)})),n.addEventListener("click",o,!0)};return{addProject:s,openProjectForm:()=>{document.getElementById("add-project-form").classList.add("show"),document.getElementById("project-title-input").required=!0},getProjectArr:()=>c}})();let n=[];localStorage.hasOwnProperty("projects")&&(n=JSON.parse(localStorage.getItem("projects")),n.forEach((e=>{t.addProject(e)})));const c=document.getElementById("side-bar-btn"),d=document.getElementById("side-bar"),o=document.getElementById("body-container");c.addEventListener("click",(()=>{d.classList.toggle("close"),o.classList.toggle("toggle")})),document.getElementById("add-project-btn").addEventListener("click",(e=>{t.openProjectForm(),n=t.getProjectArr(),document.getElementById("project-submit-btn")})),document.getElementById("project-cancel-btn").addEventListener("click",(()=>{document.getElementById("add-project-form").classList.remove("show")})),document.querySelector(".modal-cancel").addEventListener("click",(()=>{document.getElementById("modal-container").classList.remove("show")})),window.onbeforeunload=()=>{n=t.getProjectArr(),localStorage.setItem("projects",JSON.stringify(n))}})();