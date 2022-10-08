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
    //DOM to all id for get all value of the form
    let cardTitle = getEle("taskname").value;
    let person = getEle('assigned').value;
    let description = getEle("description").value;
    let status = getEle("status").value;
    let day = getEle("dueDay").value;
    let htmlTask = getEle('cardTask');

    //DOM to all id of warning text of form
    let warningTitle = getEle('warningTitle');
    let warningPerson = getEle('warningPerson');
    let warningDescription = getEle('warningDescription');
    let warningDate = getEle('warningDate');

    // if we fill out the form completely
    if (cardTitle && person && description && day) {
        let toDo = new ToDo(cardTitle, person, description, status, day);
        toDoList.addToDo(toDo);
        showToDoList(htmlTask);

        // set value of form empty after create a new form
        getEle("taskname").value = '';
        getEle("assigned").value = '';
        getEle("description").value = '';
        getEle("dueDay").value = '';

        //add class 'd-none' for warning text of form to hide warning text
        warningTitle.classList.add('d-none');
        warningPerson.classList.add('d-none');
        warningDescription.classList.add('d-none');
        warningDate.classList.add('d-none');

    } else {
        //remove class 'd-none' (class of bootstrap) to display warning text
        if (getEle("taskname").value == '') {
            warningTitle.classList.remove('d-none');
        }
        if (getEle("assigned").value == '') {
            warningPerson.classList.remove('d-none');
        }
        if (getEle("description").value == '') {
            warningDescription.classList.remove('d-none');
        }
        if (getEle("dueDay").value == '') {
            warningDate.classList.remove('d-none');
        }
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