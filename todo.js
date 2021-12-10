showTasks();

function myfunc() {

    let inputValue = document.getElementById("box").value; //taking input from user
    let getlstorage = localStorage.getItem("NewToDo"); //getting localstorage 
    if (getlstorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getlstorage);
    }
    if (inputValue === "") {
        alert("Don't enter empty values!");
    } else {
        listArr.push(inputValue);
    }
    localStorage.setItem("NewToDo", JSON.stringify(listArr));
    showTasks();
}

function showTasks() {
    let getlstorage = localStorage.getItem("NewToDo");
    if (getlstorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getlstorage);
    }
    const pendingnumb = document.querySelector(".pendingnum");
    pendingnumb.textContent = listArr.length; //updating no. of pending tasks
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element}<span id="trash" onclick="deleteTasks(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    document.querySelector(".list").innerHTML = newLiTag; //adding li tag in ul tag
    document.getElementById("box").value = ""; //making input field empty after adding the task
}

function deleteTasks(index) { //function for trash 
    let getlstorage = localStorage.getItem("NewToDo");
    listArr = JSON.parse(getlstorage);
    listArr.splice(index, 1); //deletes or removes the particular task 

    //updating local storage after deleting
    localStorage.setItem("NewToDo", JSON.stringify(listArr));
    showTasks();
}

function deleteall() { //function for remove all button
    listArr = [];
    //updating local storage
    localStorage.setItem("NewToDo", JSON.stringify(listArr));
    showTasks();
}
