console.log("My code is running");

//This is where we're going to store out items list
const to_do = [
  {
    task: "Celery",
    completion: 0
  },
  {
    task: "Chicken",
    completion: 0
  },
  {
    task: "Pork",
    completion: 0
  },
  {
    task: "Beef",
    completion: 0
  }
];

// console.log(to_do);

// Creates new item in to_do list
const addToList = newItem => {
    let taskObject = {task: newItem, completion: 0};
    console.log(taskObject);
    to_do.push(taskObject);
    console.log(to_do);
    populateList(taskObject);
}

// Function to populate list
const populateList = ({task, completion}) => {
    let listElement = document.createElement('li');
    let listContainer = document.querySelector('ol');
    listContainer.appendChild(listElement);
    listElement.innerHTML = `<input type="checkbox">${task}`;
}

//Create a for... loop to initialize to_do list
to_do.forEach((task) => {
    populateList(task);
})

//Make button clickable

const button = document.querySelector('#add');
button.addEventListener('click', onButtonClick);
const task = document.querySelector('#task');
let textField = ""
task.addEventListener('input', (eventObject) => {
  textField = eventObject.target.value;
});

// Adds alert pop up when button is clicked
function onButtonClick(){
    addToList(textField);
    alert(`${textField} Added to list`);
}
