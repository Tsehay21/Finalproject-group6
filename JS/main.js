//import object class
import { ToDo } from "./toDo.js";
import { ToDoList } from "./toDoList.js";


let toDoList = new ToDoList();

let htmlContent = '';
// getEle('cardTask').innerHTML = htmlContent;

function getEle(id) {
    return document.getElementById(id);
}

const addToDo = () => {
    let cardTitle = getEle("taskname").value;
    let person = getEle('assigned').value;
    let description = getEle("description").value;
    let status = getEle("status").value;
    let day = getEle("dueDay").value;
    let htmlTask = getEle('cardTask');

    if (cardTitle && person && description && day) {
        let toDo = new ToDo(cardTitle, person, description, status, day);
        toDoList.addToDo(toDo);
        showToDoList(htmlTask);
    } else {
        alert('Please fill out the form completely')
    }
}

const showToDoList = (listToDo) => {
    listToDo.innerHTML = toDoList.renderToDo();
}
const removeTodo = (e) => {
    let todoIndex = e.currentTarget.getAttribute("data-index");
    let htmlTask = getEle('cardTask');
    console.log(todoIndex);
    toDoList.deleteToDo(todoIndex);
    showToDoList(htmlTask);

}


window.removeTodo = removeTodo;
getEle('addItem').addEventListener("click", () => {
    addToDo();
});

// window.addToDo = addToDo;