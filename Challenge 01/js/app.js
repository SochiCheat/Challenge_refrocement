const DATE_HTML = document.querySelector("#date");
const LIST_HTML = document.querySelector('#input');
const INPUT_HTML = document.querySelector('#list');


const CHECK_STYLE = "fa-check-circle";
const UNCHECK_STYLE = "fa-circle-thin";
const LINE_THOUGH_STYLE = "lineThrough";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const TODAY = new Date();
DATE_HTML.innerHTML = TODAY.toLocaleString('en-US',options);
console.log(TODAY);
