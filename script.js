const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

window.onload=function(){
    inputBox.focus();
}

inputBox.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});


function addTask(){
    const task=inputBox.value;
    if(task){
        const li=document.createElement('li');
        li.innerHTML=task;
        listContainer.appendChild(li);
        inputBox.value='';
        let span=document.createElement('span');
        span.innerHTML='\u00D7';
        li.appendChild(span);
    }
    else{
        alert('write something to continue !');
    }

    saveData();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    if(e.target.tagName==='SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
});


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showData();
