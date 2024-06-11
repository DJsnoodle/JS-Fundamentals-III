console.log("My code is running");

//This is where we're going to store out items list
const to_do = [
//   { task: "Celery", completion: 0, taskID: 0, removed: 0 },
//   { task: "Chicken", completion: 1, taskID: 1, removed: 1},
//   { task: "Pork", completion: 0, taskID: 2, removed: 1 },
//   { task: "Beef", completion: 0, taskID: 3, removed: 0 }
];

// console.log(to_do);

// Creates new item in to_do list
const addToList = newItem => {
    let taskObject = {task: newItem, completion: 0, taskID: to_do.length, remove: 0};
    to_do.push(taskObject);
    populateList(taskObject);
}

// Function to populate list
const populateList = ({task, completion, taskID, removed}) => {
    if (!removed){
      let listElement = document.createElement('li');
      listElement.id = `task${taskID}`;
      listElement.classList.add("tasks");
      let listContainer = document.querySelector('ol');
      //Adds list item to ordered list
      listContainer.appendChild(listElement);
      if (completion){
        listElement.innerHTML = `<input type="checkbox" class="checked" name="task${taskID}" checked/><strike>#${task}     </strike><input type="button" class="remove" value="remove" name="task${taskID}" />`;
      } else {
        listElement.innerHTML = `<input type="checkbox" class="checked" name="task${taskID}" />${task}      <input type="button" value="remove" class="remove" name="task${taskID}" />`;
      }

      //Add event listener to remove button
      listElement.querySelector('.remove').addEventListener('click', () =>{
        removeButtonClick(taskID);
      });

      // Add event listener to checkbox
      listElement.querySelector('.checked').addEventListener('click', ()=>{
        strikeThrough(taskID);
      })

    }
}


//Create a for... loop to initialize to_do list
to_do.forEach((task) => {
    populateList(task);
});

//Make button clickable
const button = document.querySelector('#add');
button.addEventListener('click', onButtonClick);
const task = document.querySelector('#task');
const taskInput = document.querySelector('#task'); 
let textField = ""
task.addEventListener('input', (eventObject) => {
  textField = eventObject.target.value;
});

// Adds alert pop up when button is clicked
function onButtonClick(){
    addToList(textField);
    taskInput.value = ''; // Reset the input field after adding
}

// // Remove the list item
function removeButtonClick(taskID) {
    let itemRemoved = document.getElementById(`task${taskID}`);
    itemRemoved.remove();
}
// Adds functin that gives text 'strikethrough' when checkbox is checked
function strikeThrough(taskID) {
  let strikeThrough = document.getElementById(`task${taskID}`);
  let checked = to_do[taskID].completion;
  if (checked){
    to_do[taskID].completion = 0;
    strikeThrough.classList.remove('strikeThrough');
    // Removes strikethrough when checkbox is unchecked
  } else {
    to_do[taskID].completion = 1;
    strikeThrough.classList.add('strikeThrough');
  }
}

function toggleCompletion(taskID) {
    const checkbox = document.querySelector(`#task${taskID} input[type="checked"]`);
    const taskSpan = document.querySelector(`#task${taskID} span`);
  
    if (checkbox.checked) {
      taskSpan.classList.add('completed');
    } else {
      taskSpan.classList.remove('completed');
    }
  }
  
