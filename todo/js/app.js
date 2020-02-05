const time = new Date();
const dateElement =document.querySelector('#date');
const options = {
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
};
dateElement.innerHTML = time.toLocaleString("en-US",options);


const inputElement = document.querySelector('#input');
const listElement = document.querySelector('#list');

const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const line = "lineThrough";
let list = [];
let id;
let data  = localStorage.getItem("todo");

if (data) {
    list  = JSON.parse(data);
    list.forEach(element => {
        addToDo(element.name, element.id,element.time, element.done, element.trash) ;
        console.log(element)
        
    });
}else{
    id = 0;
    list = [];
}

 document.addEventListener('keydown',event => {
    //  console.log(event.key);
    if (event.key === "Enter") {
        const toDo = inputElement.value;
        const timer = time.getMinutes() + ":" + time.getSeconds();
    if (toDo) {
        addToDo(toDo);
        list.push({
            name: toDo, 
            id: id,
            time: timer,
            done: false,
            trash: false,
        });
        id++;
        localStorage.setItem("todo", JSON.stringify(list));
        console.log(list);
    }

   
    inputElement.value = "";
    }
 });
// const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
// console.log(time.toLocaleString('en-US',options));
dateElement.innerHTML = time.toLocaleString('en-US',options);
function addToDo(todos,id,timer,isDone, trash) {
    const isCheck = isDone ? check : uncheck;
    const isLine = isDone ? line : "";
    if (trash){return} ;
        const result =`
        <li class="item">
            <i class="fa ${isCheck} co" job="complete" id=${id}></i>
                <p class="text ${isLine}"> ${todos}: ${timer}</p>
            <i class="fa fa-trash-o de" job="delete" id=${id}></i>
        </li>
        `;
        listElement.insertAdjacentHTML("beforeend",result);     
    }
// // prees trorong na jab ban trorng ng 
//     document.addEventListener('click', event =>{
//         const element = event.target;
//         const elementJob = element.attributes.job.value;
//         if (elementJob === "complete") {
            
//         }else if(elementJob === "delete"){
//             listElement.removeChild(element.parentNode);
//             list[element.id].trash = true;
            
//         }
//         console.log(elementJob);
//     });