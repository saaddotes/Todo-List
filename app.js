let list = document.getElementById('todo-list');
let todoData = [];

// if (todoData.length == 0) {
//     list.innerHTML = "<div><i class='fa-regular fa-circle-check'></i> You don't have any task yet</div>"
// }


function actionToAdd(id = 'task_input') {
    // Getting value from input field
    let taskInput = document.getElementById(id);
    let taskValue = taskInput.value.trim();

    // Checking if it is not empty
    if (taskValue !== '') {
        // Storing Data as object
        todoData.push({ task: taskValue, checked: false });
        list.innerHTML = "";
        todoData.forEach(addData);
        taskInput.value = "";
    }

};


let tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', tabSwitch);
    console.log(tab.innerHTML);
});


function tabSwitch() {
    let tabs = document.querySelectorAll('.tab');

    let active = document.querySelector('.active')
    if (active.innerHTML === 'All') {
        updateData();
    }
    console.log()
    tabs.forEach(tab => {
        tab.classList.remove('active');

    });

    this.classList.add('active');
    if (this.innerHTML == 'Completed') {
        list.innerHTML = "";
        todoData.forEach((task) => {
            if (task.checked) {
                console.log(task.checked)
                addData(task)
            }
        });
        // list.innerHTML = '<div class="text-center"><i class="fa-solid fa-person-digging"></i>  Still  working on this Section </div>'
    }

    else if (this.innerHTML == 'Pending') {
        list.innerHTML = "";
        todoData.forEach((task) => {
            if (!task.checked) {
                console.log(task.checked)
                addData(task)
            }
        });
        // list.innerHTML = '<div class="text-center"><i class="fa-solid fa-person-digging"></i>  Still  working on this Section </div>'

    }

    else {
        // updateData()

        if (todoData.length == 0) {
            list.innerHTML = "<div><i class='fa-regular fa-circle-check'></i> You don't have any task yet</div>"

        }
        else {
            list.innerHTML = "";
            todoData.forEach(addData);
        }
    }
};


function addData(data) {
    list.innerHTML += `<li class="border rounded d-flex align-items-center justify-content-between p-1 mt-1 item">
                            <span class="d-flex align-items-center gap-2 ">
                                <input class="largerCheckBox " type="checkbox" ${data.checked ? 'checked' : ''}>
                                <span id='value'>${data.task}</span>
                            </span>
                            <span class="d-flex gap-3">
                                <i class="fa-solid fa-trash fs-5" role="button" onclick="removeTask('${data.task}')"></i>
                                <i class="text-primary fa-solid fa-pen fs-5" role="button" onclick="editTask('${data.task}')"></i>
                            </span>
                        </li>`;
};


function removeTask(task) {
    const indexToRemove = todoData.findIndex(item => item.task === task);
    console.log('removing', task, indexToRemove)

    if (indexToRemove !== -1) {
        todoData.splice(indexToRemove, 1);
        list.innerHTML = "";
        todoData.forEach(addData);
    }
};


function updateData() {
    console.log("Working");
    todoData = []
    let allItems = document.querySelectorAll('.item');
    for (let i of allItems) {
        let task = i.querySelector('#value')
        let taskCheck = i.querySelector('input');
        todoData.push
        todoData.push({ task: task.innerHTML, checked: taskCheck.checked });
    }


    // let allItems = document.querySelectorAll('.item');
    // list.innerHTML = '';
    // for (let i of allItems) {
    //     let inputElement = i.querySelector('input');
    //     let val = i.querySelector('#value')
    //     if(inputElement.checked) {
    //         list.innerHTML += i.innerHTML
    //     }
    // }
};


function editTask(value) {
    let editBox = document.querySelector('.editBox')
    editBox.style.display = 'block';
    const indexToEdit = todoData.findIndex(item => item.task === value);
    if (indexToEdit !== -1) {
        console.log("Working")
        todoData.splice(indexToEdit, 1);
        let taskInput = document.querySelector('.editInput');
        console.log(value)
        console.log(taskInput)
        taskInput.value = value
    }
};


function editSave() {
    // todoData.splice(indexToEdit, 1);
    let editBox = document.querySelector('.editBox')
    editBox.style.display = 'none';
    let editInput = document.querySelector('.editInput');
    let taskValue = editInput.value.trim();
    if (taskValue !== '') {
        todoData.push({task: taskValue , checked: false});
        list.innerHTML = "";
        todoData.forEach(addData);
        editInput.value = "";
    }
    // actionToAdd('editInput')
    console.log('EDIT Save')
    // let taskInput = document.getElementById('task_input');
    // taskInput.value = value;
};


function clearAllData() {
    todoData.length = 0
    list.innerHTML = "";
};