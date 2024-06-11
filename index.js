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
let textField = ""
task.addEventListener('input', (eventObject) => {
  textField = eventObject.target.value;
});

// Adds alert pop up when button is clicked
function onButtonClick(){
    addToList(textField);
}

// // Remove the list item
function removeButtonClick(taskID) {
    let itemRemoved = document.getElementById(`task${taskID}`);
    itemRemoved.remove();
}

function strikeThrough(taskID){
  let strikeElement = document.createElement('s');
  strikeElement.id = `strike${taskID}`;
  listItem = document.getElementById(`task${taskID}`);
  strikeElement.innerHTML = listItem.innerHTML;
  console.log(strikeElement + listItem.innerHTML);
  listItem.innerHTML = strikeElement;
}

// let listElement = document.createElement('s'); <s></s>
//       listElement.id = `strike${taskID}`;
// listitem = document.getElementById()
// listitem.innertext.strike()
// function removeButtonClick(){
//     let itemRemoved = document.getElementById(this.name);
//     console.log(itemRemoved);
//     itemRemoved.innerHTML = null;
//     itemRemoved.remove();
// }


// const contentString = "Hello, world";
// document.body.innerHTML = contentString.strike();