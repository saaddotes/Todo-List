let list = document.getElementById('todo-list');
const todoData = [];

// if (todoData.length == 0) {
//     list.innerHTML = "<div><i class='fa-regular fa-circle-check'></i> You don't have any task yet</div>"
// }


function actionToAdd(id = 'task_input') {
    let taskInput = document.getElementById(id);
    let taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        todoData.push(taskValue);
        list.innerHTML = "";
        todoData.forEach(addData);
        taskInput.value = "";
    }


}


var tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', tabSwitch);
    console.log(tab.innerHTML);
});

function tabSwitch() {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');

    });

    this.classList.add('active');
    if (this.innerHTML == 'Completed') {
        list.innerHTML = '<div class="text-center"><i class="fa-solid fa-person-digging"></i>  Still  working on this Section </div>'
    }

    else if (this.innerHTML == 'Pending') {
        list.innerHTML = '<div class="text-center"><i class="fa-solid fa-person-digging"></i>  Still  working on this Section </div>'

    }

    else {

        if (todoData.length == 0) {
            list.innerHTML = "<div><i class='fa-regular fa-circle-check'></i> You don't have any task yet</div>"

        }
        else {
            list.innerHTML = "";
            todoData.forEach(addData);
        }
    }
}


function addData(value) {
    list.innerHTML += `<li class="border rounded d-flex align-items-center justify-content-between p-1 mt-1">
                            <span class="d-flex align-items-center gap-2">
                                <input class="largerCheckBox" type="checkbox"><span>${value}</span>
                            </span>
                            <span class="d-flex gap-3">
                                <i class="fa-solid fa-trash fs-5" role="button" onclick="removeTask('${value}')"></i>
                                <i class="text-primary fa-solid fa-pen fs-5" role="button" onclick="editTask('${value}')"></i>
                            </span>
                        </li>`;


}

function removeTask(value) {
    const indexToRemove = todoData.indexOf(value);
    if (indexToRemove !== -1) {
        todoData.splice(indexToRemove, 1);
        list.innerHTML = "";
        todoData.forEach(addData);
    }
}

function editTask(value) {
    let editBox = document.querySelector('.editBox')
    editBox.style.display = 'block';
    const indexToEdit = todoData.indexOf(value);
    if (indexToEdit !== -1) {
        console.log("Working")
        todoData.splice(indexToEdit, 1);
        let taskInput = document.querySelector('.editInput');
        console.log(value)
        console.log(taskInput)
        taskInput.value = value
    }
}

function editSave() {

    // todoData.splice(indexToEdit, 1);
    let editBox = document.querySelector('.editBox')
    editBox.style.display = 'none';
    let editInput = document.querySelector('.editInput');
    let taskValue = editInput.value.trim();
    if (taskValue !== '') {
        todoData.push(taskValue);
        list.innerHTML = "";
        todoData.forEach(addData);
        editInput.value = "";
    }
    // actionToAdd('editInput')
    console.log('EDIT Save')
    // let taskInput = document.getElementById('task_input');
    // taskInput.value = value;
}

function clearAllData() {
    todoData.length = 0
    list.innerHTML = "";
}