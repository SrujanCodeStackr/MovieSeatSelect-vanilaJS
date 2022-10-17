const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not().occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = +movieSelect.value;


//seat click event
container.addEventListener("click", e => {
    if (e.target.classlist.contains("seat") &&
        !e.target.classlist.contains("occupied")) {
        e.target.classlist.toggle("selected");
        upadateSelectedCount();
    }
});