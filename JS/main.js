//import object class
import { ToDo } from "./toDo.js";
import { ToDoList } from "./toDoList.js";
// GetStorage();

let toDoList = new ToDoList;

function getEle(id) {
    return document.getElementById(id);
}

//hàm chạy khi load page

const addToDo = () => {
    //DOM to all id for get all value of the form
    let cardTitle = getEle("taskname").value;
    let person = getEle('assigned').value;
    let description = getEle("description").value;
    let day = getEle('dueDay').value;
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
        getEle('dueDay').value = '';

        //add class 'd-none' for warning text of form to hide warning text
        warningTitle.classList.add('d-none');
        warningPerson.classList.add('d-none');
        warningDescription.classList.add('d-none');
        warningDate.classList.add('d-none');

        //change object to JSON
        let tasksJson = JSON.stringify(toDoList.toDoList);
        //sent JSON to local Storage
        localStorage.setItem('listTD', tasksJson);


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
    //this is index of task todo we want to delete
    let todoIndex = e.currentTarget.getAttribute("data-index");
    //this is id of where we render tasks
    let htmlTask = getEle('cardTask');
    //delete task from toDoList (now we have a new toDoList)
    toDoList.deleteToDo(todoIndex);
    //update UI after we deleted task
    showToDoList(htmlTask);

    //create tasksJson to store JSON
    let tasksJson = JSON.stringify(toDoList);
    console.log(tasksJson);
    //remove data in local storage
    localStorage.clear();
    // add data to local storage
    localStorage.setItem('listTD', tasksJson);

}

let loadPage = () => {
    //lấy chuỗi JSON từ local storage và đỏi thành object
    let object = JSON.parse(localStorage.getItem('listTD'));
    if (object) {
        for (let i = 0; i < object.length; i++) {
            toDoList.addToDo(object[i])
        }
        let htmlTask = getEle('cardTask');
        showToDoList(htmlTask);
    }
}
loadPage();
window.removeTodo = removeTodo;
getEle('addItem').addEventListener("click", () => {
    addToDo();
});

//code of calendar. this one i copy from website. https://www.pigno.se/barn/PIGNOSE-Calendar/
$('.calendar').pignoseCalendar({
    format: 'MM-DD-YYYY',
    theme: 'blue',

});