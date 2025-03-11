let inp=document.querySelector("input");
let task="";
let tasks=[];
function inputCall(){
 let task=inp.value;
 if(task.trim()!="" ){
 addingTask(task);
 inp.value="";
}
}

let ul=document.querySelector("ul");
let addTask=document.querySelector("#add");
addTask.addEventListener("click",inputCall);

function addingTask(task){
let div=document.createElement("div");
div.classList.add("containerWrap");
ul.append(div);
 let li=document.createElement("li");
 div.append(li);
 li.innerText=task;
 li.classList.add("lists");
 tasks.push(task);
 let bR=document.createElement("button");
 bR.classList.add("btn");
 bR.innerText="delete"
 bR.classList.add("deleteB");
 div.appendChild(bR);
}

let removeT = document.querySelector("#remove");

removeT.addEventListener("click", removeTask);

function removeTask() {
    let lastTask = ul.lastElementChild;

    if (lastTask) {
        lastTask.remove();
        if (tasks.length > 0) {
            tasks.pop();
        }
    }
}

ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
    let par=event.target.parentElement;
    par.remove();
   }
})



