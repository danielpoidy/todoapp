// Nav menu toggle on mobile device

const burger = document.querySelector('.burger')

const nav = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-links-appear')
})

// Task adding to the main page

const task = document.querySelector('.task-input')

const myform = document.getElementById('myform')

const tasksArray = []

function addNewTask () {
  const taskArea = document.querySelector('.tasks-appearing-area')

  const item = document.createElement('div')
  item.classList.add('container')
  taskArea.append(item)

  const p = document.createElement('div')
  p.innerHTML = task.value
  p.classList.add('taskdisplay')
  item.append(p)

  const editInput = document.createElement('input')
  editInput.classList.add('edit-input')
  editInput.classList.add('task-input') // a revoir   
  editInput.style.border = 'rgba(255, 116, 116, .4) .2px solid'
  editInput.classList.add('hide')
  editInput.name = 'edit-input'
  editInput.type = 'text'
  editInput.value = task.value
  item.append(editInput)

  const updateBtn = document.createElement('button')
  updateBtn.textContent = 'Update'
  updateBtn.classList.add('edit-button')
  updateBtn.classList.add('update-btn') // A revoir
  updateBtn.classList.add('hide')
  updateBtn.type = 'button'
  item.append(updateBtn)

  const editButton = document.createElement('button')
  editButton.textContent = 'edit'
  editButton.classList.add('edit-button')
  item.append(editButton)

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'delete'
  deleteButton.classList.add('delete-button')
  item.append(deleteButton)

  task.value = ''

  editButton.addEventListener('click', function () {
    // Getting index of the task element we want to update
    const indexModif = tasksArray.indexOf(p.innerHTML)

    p.classList.add('hide')
    editInput.classList.remove('hide')
    updateBtn.classList.remove('hide')
    updateBtn.addEventListener('click', function () {
      editInput.classList.add('hide')
      updateBtn.classList.add('hide')
      p.classList.remove('hide')
      p.innerHTML = editInput.value

      // Updating the new task in the task array
      tasksArray[indexModif] = editInput.value
    })
  })

  // Task deleting
  deleteButton.addEventListener('click', function () {
    item.parentNode.removeChild(item)

    // Remove task from the tasks array
    const index = tasksArray.indexOf(p.innerHTML)
    tasksArray.splice(index, 1)
    console.log(tasksArray)
  })

  // Adding new task to the tasks array
  tasksArray.push(p.innerHTML)
  console.log(tasksArray)
}

myform.addEventListener('submit', (event) => {
  event.preventDefault()

  addNewTask()
})