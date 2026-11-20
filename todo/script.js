console.log("script.js is connected");

// 2. Elements by id
const input = document.getElementById("new-task");
const addButton = document.getElementById("add-button");
const message = document.getElementById("message");
const taskList = document.getElementById("task-list");
const count = document.getElementById("count");
const deleteDoneButton = document.getElementById("delete-done");

console.log(taskList);

/*
    What does getElementById return if the id does not exist?
    It returns null. If the button id has a typo (e.g. "add-buton"),
    the Console shows:
    Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
*/

// Extra: task counter
function updateCount() {
    count.textContent = taskList.children.length;
}

// 3.-7. Adding a task
addButton.addEventListener("click", function () {
    console.log(input.value);

    // 5. Empty task check
    const text = input.value.trim();
    if (text === "") {
        message.textContent = "Enter a task!";
        return;
    } else {
        message.textContent = "";
    }

    // 4. New list item
    const li = document.createElement("li");

    // 7. Text inside a span and a "Delete" button next to it
    const span = document.createElement("span");
    span.textContent = text;
    /*
        Why textContent for user text?
        textContent shows the text exactly as typed.
        With innerHTML the input <b>test</b> becomes bold, because the browser parses it as HTML.
        That way someone could also inject their own code (e.g. <img onerror="...">),
        so textContent is the safe choice for user input.
    */

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // 6. Mark as done (a second click removes the mark, because of toggle)
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    // 7. Delete only this row
    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation(); // so the click does not toggle li before deleting
        li.remove();
        updateCount();
    });
    /*
        What is left after F5? Nothing, the list is empty.
        The tasks only live in the DOM in the browser's memory. After F5 the page
        is loaded again from index.html, where ul is empty, and nothing was saved.
    */

    input.value = "";
    input.focus();
    updateCount();
});

// Extra: Enter works like the button
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});

// Extra: delete all done tasks
deleteDoneButton.addEventListener("click", function () {
    const doneTasks = taskList.querySelectorAll("li.done");
    doneTasks.forEach(function (li) {
        li.remove();
    });
    updateCount();
});