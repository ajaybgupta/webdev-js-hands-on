// let val;

// // Chapter 1
// val = document;
// // Return all the element as part of array
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// // Get all the forms present on the webpage
// val = document.forms;
// val = document.forms[0].id;

// val = document.links;
// val = document.links[0];
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts[2].src;
// val = document.scripts[2].getAttribute('src');


// // val = typeof(document.scripts);
// // We cannot do iteration on it as scripts is an object so we need to convert it to array
// // document.scripts.forEach(function(script){
// //     console.log(script);
// // });


// let scripts = document.scripts
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// console.log(val);

// Chapter 3 - DOM Selectors for Single Element
// In Single Element Selector if the element is present more than once it will select the first one

// Get Element by Id
// let val;
// const taskTitle = document.getElementById("task-title");

// val = taskTitle;
// val = taskTitle.id;
// val = taskTitle.className;
// val = taskTitle.classList;

// // We can change the styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#FFF';
// taskTitle.style.padding = '5px';
// // Use CSS to do the same

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Task';

// // Sometime we need to change the HTML of the element completely
// // We can use innerHTML to achieve the same
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'


// Query Selector - Single Element Selector
// Newer and much more powerful
// We can select the element by anything
// Similar to JQuery
// Id #
// Class .
// val = document.querySelector('#task-title');
// val = document.querySelector('.card-title');
// val = document.querySelector('h5');

// document.querySelector('li').style.color = 'red';
// // We can do nested selector as well
// document.querySelector('ul li').style.color = 'red';
// document.querySelector('li:last-child').style.color = 'blue';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').innerText = 'Hello World';

// // In CSS we can apply some styling based upon even and odd
// // But since querySelector selects only one element so it is assigning the background color to only one cell in it
// document.querySelector('li:nth-child(odd)').style.background = '#333';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



// console.log(val);

// Chapter 4 - DOM Selectors for Mulitple Element

// let items;

// items = document.getElementsByClassName('collection-item');
// console.log(items);

// // To access an element use normally as we have element in array
// console.log(items[0]);
// items[0].style.color = 'red';

// // We can access element in nested manner
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// // We can also do getElementsByTagName

// // If we want to perform some of the array manipulation function we need to convert the object to Array
// // Convert HTML Collection to Array
// let reversedElements = Array.from(listItems).reverse();

// console.log(reversedElements);
// reversedElements.forEach(function(li,index){
//     console.log(li.style.color);
//     li.textContent = `${index} Hello`;
// });


// Query Selector All
// Benefit we do not have to explicitly convert the element to array
// It returns node list on which we can perform all these methods

// let items;
// // returns nodelist
// items = document.querySelectorAll('ul.collection li.collection-item');

// // odd and even element using css
// items = document.querySelectorAll('li:nth-child(odd)');
// items = document.querySelectorAll('li:nth-child(even)');

// console.log(items);

// Chapter 4 - Traversing the DOM
// Move Up and Down - Parent and Children on Specific Node

// let val;

// // . here refers to class and # to id
// const list = document.querySelector('ul.collection');
// // Even if we do not write the first child it will select first child as query selector is single element locator
// // const listItems = document.querySelector('li.collection-item');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// val = list.children; // return HTML Collection
// val = list.childNodes; // returns node list it will have more elements in it 
// // as we have li tags in separate line in it so it considers those elements as text
// val = list.childNodes[0].nodeName; // first element is text
// val = list.childNodes[1].nodeType;
// // Node Type Legend
// // 1 - element
// // 2 - attribute
// // 3 - text node
// // 8 - comment
// // 9 - document itself
// // 10 doctype
// // So child nodes give all the nodes in it
// // And children gives only the children element in it

// list.children[1].textContent = "Hello";
// // children of children
// list.children[2].children[0].id = "test-link"
// val = list.children[2].children[0]

// // first child
// val = list.firstChild; // will give you #text
// val = list.firstElementChild; // will give you element node in it // We need to use this mostly

// // last child
// val = list.lastChild;
// val = list.lastElementChild;

// // Child Element Count
// val = list.childElementCount;

// // Get Parent Node
// val = listItem.parentNode;
// val = listItem.parentElement;

// // Parent of parent
// val = listItem.parentElement.parentElement;

// // Get Next Sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// // Next Sibling of Next Sibling
// val = listItem.nextElementSibling.nextElementSibling;
// const secondNextElementSibling = listItem.nextElementSibling.nextElementSibling;

// // Previous Sibling
// val = secondNextElementSibling.previousElementSibling;

// console.log(val);

// Chapter 5 - Create element and append element to document

// Create Element
// const li = document.createElement('li');

// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title','new-item');

// // Create text node
// const textNode = document.createTextNode('Hello World')
// li.appendChild(textNode);


// // Create new link element
// const link = document.createElement('a');
// link.setAttribute('href','#');
// link.className = 'delete-item secondary-content';

// // Method 1
// // const icon = document.createElement('i');
// // icon.className = 'fa fa-remove';
// // link.appendChild(icon);

// // Method 2
// link.innerHTML = '<i class="fa fa-remove"></i>';

// li.appendChild(link);

// // Append li as child to ul
// const ul = document.querySelector('ul');
// ul.appendChild(li);



// console.log(li);


// Chapter 6 - Replacing Element

// Create Element
// const newHeading = document.createElement('h2');
// // Add an id
// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');

// // We need to traverse to parent and replace the child
// const cardItem = oldHeading.parentElement;

// // Replace Element
// // We need to provide the old Element which needs to be replaced with new Element
// cardItem.replaceChild(newHeading,oldHeading);

// // Remove Element
// const lis = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

// // We can remove element directly
// lis[0].remove();

// // We can remove the child element
// ul.removeChild(lis[2]);

// // Classes and attribute
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;
// val = link.className;
// val = link.classList;
// // To add class
// link.classList.add('test');

// // Attribute
// val = link.getAttribute('href');
// link.setAttribute('href','http://google.com');
// link.setAttribute('title','Google');
// val = link.hasAttribute('href');
// link.removeAttribute('title');

// console.log(val);

// Chapter 7 - Event Listeners and Event Object
// refer to class clear-tasks
// const clearTasks = document.querySelector('.clear-tasks');
// // Some element have default behavior ex. form - submit, link - load new page
// // if we add href as # it will stop going to new page
// // or if we want to avoid the default behavior we can use event.preventDefault;
// // it won't go to href link even if we click the link
// // Calling event function - Method 1
// // clearTasks.addEventListener('click', function(event){
// //     console.log('Hello World!');
// //     event.preventDefault();
// // });

// // Method 2 - Much better way
// clearTasks.addEventListener('click', onClick);

// function onClick(event){
//     // console.log('Hello World!');
//     let val;
//     val = event;
//     // clientX and clientY - gives where exactly the event was done on the window
//     // other information we can get by the event
//     // most important thing is the target - it gives the element on which the event has occured
//     // Target element
//     val = event.target;
//     val = event.target.className;
//     val = event.target.classList;

//     // event.target.innerText = 'Hello';
//     val = event.type; // click, we can have other type of event as per the requirement

//     // Co-ords relative to window on event
//     val = event.clientY;
//     val = event.clientX;

//     // Co-ords relative to element on event
//     val = event.offsetY;
//     val = event.offsetX;

//     console.log(val);
//     event.preventDefault();
// };


// Chapter 8 - Mouseover event
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');

// const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent);

// dbl click
// clearBtn.addEventListener('dblclick', runEvent);

// mouse down
// clearBtn.addEventListener('mousedown', runEvent);
// clearBtn.addEventListener('mouseup', runEvent);

// works on the same element
// mouse enter
// card.addEventListener('mouseenter', runEvent);

// mouse leave
// card.addEventListener('mouseleave', runEvent);

// works on any child element of the card.
// mouse over
// card.addEventListener('mouseover', runEvent);

// mouse out
// card.addEventListener('mouseout', runEvent);

// mouse move // useful in game
// card.addEventListener('mousemove', runEvent);


// event handler
// function runEvent(event){
//     console.log(`Event type ${event.type}`);
//     console.log(event);
//     const heading = document.querySelector('h5')
//     heading.textContent = `Mouse X ${event.offsetX}, Mouse Y ${event.offsetY}`;
//     // rgb function returns a color which requires three parameter of red, green, blue
//     document.body.style.backgroundColor  = `rgb(${event.offsetX},${event.offsetY},40)`;
//     // document.body.style.backgroundImage = `linear-gradient(red, rgb(${event.offsetX},${event.offsetY},40), rgb(${event.offsetX},${event.offsetY},10))`;
//     event.preventDefault();
// }

// Chapter 9 - Keyboard and input events

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// to clear input
// taskInput.value = '';

// form.addEventListener('submit',runEvent);

// to type keydown and keyup is fired then only the text is written
// if we keep the event on keydown then it takes one previous state value and displays on the screen
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);

// keypress
// taskInput.addEventListener('keypress', runEvent);

// focus
// taskInput.addEventListener('focus', runEvent);

// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input',runEvent);

// change
// select.addEventListener('change',runEvent);

// function runEvent(event){
//     console.log(`Event type ${event.type}`);
//     // console.log(event.target.value);
//     // Get input value
//     // console.log(taskInput.value);
//     // heading.innerText = event.target.value;
//     // To get the key value
//     // event.preventDefault();
// }


// Chapter 10 - Event Bubbling and Delegation

// Event Bubbling
// If we add an event it is transferred to parent element as well

// Event Delegation
// If we perform an event on parent element then we can delegate the event to a particular element


// Event Bubbling
// It will call all the parent element in it
// cardTitle then cardContent then card

// const cardTitle = document.querySelector('.card-title');

// cardTitle.addEventListener('click',function runEvent(event){
//     console.log('Card Title');
// });

// const cardContent = document.querySelector('.card-content');

// cardContent.addEventListener('click', function(event){
//     console.log('Card Content');
// });

// const card = document.querySelector('.card');
// card.addEventListener('click', function(event){
//     console.log('Card');
// });

// Event Delegation Example

// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click',delItem);

// document.body.addEventListener('click',delItem);

// function delItem(event){
//     if(event.target.parentElement.classList.contains('delete-item')){
//         console.log(event.target);
//         event.target.parentElement.parentElement.remove();
//     }
// };


// Chapter 11 - Local and Session Storage
// Local Storage API
// We can store element in String format
// To store Array and Object we can Stringify the JSON and store the value
// let val;

// val = localStorage;

// localStorage.setItem('name','John');

// sessionStorage.setItem('name','Ajay');

// localStorage.removeItem('name');

// val = localStorage.getItem('name');
// console.log(val);

// document.querySelector('form').addEventListener('submit',function(event){
//     const task = document.getElementById('task').value;

//     let tasks;
//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     }else{
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);
//     // Storing the value in local storage
//     localStorage.setItem('tasks',JSON.stringify(tasks));

//     event.preventDefault();
// });


// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task){
//     console.log(task);
// });
