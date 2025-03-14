const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{
        const task = document.createElement("li");
        task.innerHTML = inputBox.value;
        listContainer.appendChild(task);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        task.appendChild(cross);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

