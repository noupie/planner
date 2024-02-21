const todoList = [
  {name: 'Study German',
  urgency: 'urgent and important'},
  {name: 'Practice Coding',
  urgency: 'urgent and important'}
];

renderTodoList();

function renderTodoList (){

  let todoListHTML = '';

  for (let i=0; i < todoList.length; i++){
    const todoObject = todoList[i];
    const {name, urgency} = todoObject;
    const html = `<div> ${name}</div>
    <div>${urgency}</div> 
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      " class="delete-todo-button" >Delete</button> 
      `
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML

  const theButton =  document.querySelector('.add');
  theButton.onclick=function (){
    const inputElement = document.querySelector('.js-name-input');
    const name =  inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const urgency = dateInputElement.value;

    todoList.push({name: name,
      urgency: urgency,}); 
   
    inputElement.value = '';
    renderTodoList();
  }
}

//looping through an array

const weekly = [
  {dayname: 'monday',
   task: 'Code the BMI'
}, {
  dayname: 'tuesday',
  task: 'Practice UI'
},{
  dayname: 'wednesday',
  task:'Code Project'
}, {
  dayname: 'thursday',
  task: 'Code Store'
}, {
  dayname: 'friday',
  task: 'Code Game'
}, {
  dayname: 'saturday',
  task: 'Code Landing Page'
},{
  dayname: 'sunday',
  task: 'Code Portfolio'
}
];

for (let i=0; i<weekly.length; i++){
const weeklyTasks = weekly[i];
const {dayname, task}=  weeklyTasks;

  let thedayTask = ''; 
let theButton = document.querySelector(`.js-add-task${i}`);
theButton.onclick=
function(){
  thedayTask= document.querySelector(`.${dayname}Task`).value;
  document.querySelector(`.day${i}`).innerHTML = `<div class="weekday ${dayname}">${dayname}</div>
  <div class="style-task" >
   ${thedayTask}
  </div>
  <div></div>`;
}
}

//habit name

let habit ='';
document.querySelector('.saveHabit').onclick=function(){
  habit = document.querySelector('.yourHabit').value;
  document.querySelector('.challenge').innerHTML=habit;
}
/*below the habit days html generated*/



let habitDayHTML = '';

for (let i=1; i<32; i++){
  habitDayHTML += `<div>day ${i} </div> <input type="checkbox" />`
}

document.querySelector('.column').innerHTML = habitDayHTML;



