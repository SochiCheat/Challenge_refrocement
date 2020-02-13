const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector("#list");
const INPUT_HTML = document.querySelector("#input");

const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};
const today = new Date();
DATE_HTML.innerHTML = today.toLocaleString("en-US", options);

// TODO: create array name : todoItems is empty
let todoItems = [];

// TODO: create id with value 0
let id = 0;


document.addEventListener("keyup", event => {
	if (event.result === "Enter") {
    const inputValue = INPUT_HTML.value;

    if (inputValue != null) {
      // 1. add the todo
		
      // 2.  Clear input
      clearInput();
    }
  }
});

function clearInput() {
	INPUT_HTML.value = "";
}

function addTodo(todoName) {
	// TODO: push new valueto array todoItems with name , id, done
	// console array
	// TODO: call updateList function
}

function updateList() {
  let result = "";
  // TODO: loop get value from array 
  let result = "";
  for (let item of todoItems) {
    result +=`
      <i class="fa fa-circle-thin co" job="complete" id=""></i>
      <p class="text">${}</p>
      <i class="fa fa-trash-o dw" job="delete" id=""></i>
    `;
  //  console.log(item);
  LIST_HTML.innerHTML = result;

  }
  // console it.
}