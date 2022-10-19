export class ToDoList {
    constructor() {
        this.toDoList = [];
    }
    addToDo(toDo) {
        this.toDoList.push(toDo)
    }
    renderToDo() {
        let content = '';
        let htmlStatus = '';
        content = this.toDoList.reduceRight((preValue, item, index) => {
            if (item.taskStatus === 'Done') {
                htmlStatus = '<button class="bootstrap-green-button-pressed-1">Done</button>';
            } else {
                htmlStatus = '<button class="bootstrap-red-button-normal-1 mr-3">Pending </button>';
            }
            preValue += `
            <div class="col-12 col-lg-3 my-4 my-lg-0">
                            <div class="card">
                                <div class="card-body rectangle-1 ">
                                    <h5 class="card-title">Task name: <span class='text-dark ml-2'>${item.taskName} </span></h5>
                                    <p class="card-text">Assigned person:<span class='text-dark ml-2'>${item.personDo}</span> 
                                    </p>
                                    <p class="card-text">Description: <span class='text-dark ml-2'>${item.taskDescription}</span>
                                    </p>
                                    <select id="status">
                                    <option value="Pending">Pending</option>
                                    <option value="Done">Done</option>
                                    </select>
                                    <hr>
                                  
                                    <div class="card-day">
                                        <span>${item.dueDay}</span><i class="fa fa-calendar-week"></i>
                                        <button class='delete' id='delete' data-index=${index} onclick="removeTodo(event)" >delete</button>

                                    </div>
                                </div>

                            </div>
                        </div>
            `;
            return preValue;
        }, '');
        // console.log(content);
        return content;
    }
    deleteToDo(index) {
        this.toDoList.splice(index, 1);
    }
}