function addToDoItem(title, details) {
  const todoContainer = document.getElementById('todoContainer');
  const todoItem = document.createElement('div');
  todoItem.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details}</p>
      </div>
    </div>
  `;
  todoContainer.appendChild(todoItem);
}

document.getElementById('btnAdd').addEventListener('click', function() {
  const title = document.getElementById('txtTitle').value;
  const details = document.getElementById('txtDetails').value;
  addToDoItem(title, details);
});

// document.getElementById('btnFIFO').addEventListener('click', function() {
//   const todoItem = document.querySelectorAll('#todoContainer .card');
//   while (todoItem.length > 0) {
//     const firstItem = todoItem.shift();
//     document.getElementById('doneContainer').appendChild(firstItem);
//   }
// });

// document.getElementById('btnFILO').addEventListener('click', function() {
//   const todoItem = document.querySelectorAll('#todoContainer .card');
//   while (todoItem.length > 0) {
//     const lastItem = todoItem.pop();
//     document.getElementById('doneContainer').appendChild(lastItem);
//   }
// });

document.getElementById('btnFIFO').addEventListener('click', function() {
  const todoContainer = document.getElementById('todoContainer');
  const doneContainer = document.getElementById('doneContainer');

  while (todoContainer.children.length > 0) {
    const firstItem = todoContainer.firstElementChild;
    doneContainer.appendChild(firstItem);
  }
});

document.getElementById('btnFILO').addEventListener('click', function() {
  const todoContainer = document.getElementById('todoContainer');
  const doneContainer = document.getElementById('doneContainer');

  while (todoContainer.children.length > 0) {
    const lastItem = todoContainer.lastElementChild;
    doneContainer.appendChild(lastItem);
  }
});

document.getElementById('btnReset').addEventListener('click', function() {
  const todoContainer = document.getElementById('todoContainer');
  const doneContainer = document.getElementById('doneContainer');
  todoContainer.innerHTML = '';
  doneContainer.innerHTML = '';
});