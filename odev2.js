const taskBox = document.getElementById("task");
const listBox = document.getElementById("list");

function newElement(){
    if(taskBox.value ===''){
        alert("Bos Yazilmaz!");
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = taskBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskBox.value ="";
    saveData();
}
listBox.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElment.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listBox.innerHTML);
}



function showTask (){
    listBox.innerHTML = localStorage.getItem("data");
}
showTask();