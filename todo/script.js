console.log("script.js ir pieslēgts");

// 2. Elements by id
const ievade = document.getElementById("jauns");
const poga = document.getElementById("pievienot");
const zina = document.getElementById("zina");
const saraksts = document.getElementById("saraksts");
const skaits = document.getElementById("skaits");
const dzestIzdaritos = document.getElementById("dzest-izdaritos");

console.log(saraksts);

/*
    What does getElementById return if the id does not exist?
    It returns null. If the button id has a typo (e.g. "pievienott"),
    the Console shows:
    Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
*/

// Extra: task counter
function atjaunotSkaitu() {
    skaits.textContent = saraksts.children.length;
}

// 3.-7. Adding a task
poga.addEventListener("click", function () {
    console.log(ievade.value);

    // 5. Empty task check
    const teksts = ievade.value.trim();
    if (teksts === "") {
        zina.textContent = "Ieraksti uzdevumu!";
        return;
    } else {
        zina.textContent = "";
    }

    // 4. New list item
    const li = document.createElement("li");

    // 7. Text inside a span and a "Dzēst" button next to it
    const span = document.createElement("span");
    span.textContent = teksts;
    /*
        Why textContent for user text?
        textContent shows the text exactly as typed.
        With innerHTML the input <b>tests</b> becomes bold, because the browser parses it as HTML.
        That way someone could also inject their own code (e.g. <img onerror="...">),
        so textContent is the safe choice for user input.
    */

    const dzest = document.createElement("button");
    dzest.textContent = "Dzēst";

    li.appendChild(span);
    li.appendChild(dzest);
    saraksts.appendChild(li);

    // 6. Mark as done (a second click removes the mark, because of toggle)
    li.addEventListener("click", function () {
        li.classList.toggle("izdarits");
    });

    // 7. Delete only this row
    dzest.addEventListener("click", function (event) {
        event.stopPropagation(); // so the click does not toggle li before deleting
        li.remove();
        atjaunotSkaitu();
    });
    /*
        What is left after F5? Nothing, the list is empty.
        The tasks only live in the DOM in the browser's memory. After F5 the page
        is loaded again from index.html, where ul is empty, and nothing was saved.
    */

    ievade.value = "";
    ievade.focus();
    atjaunotSkaitu();
});

// Extra: Enter works like the button
ievade.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        poga.click();
    }
});

// Extra: delete all done tasks
dzestIzdaritos.addEventListener("click", function () {
    const izdaritie = saraksts.querySelectorAll("li.izdarits");
    izdaritie.forEach(function (li) {
        li.remove();
    });
    atjaunotSkaitu();
});