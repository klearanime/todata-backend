/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getPriority = function(todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isHighPriority = function(todo) {
  if (todo.priority >= 2) {
    return true
  } else {
    return false
  }
}

const isNotComplete = function(todo) {
  if (!todo.complete) {
    return todo
  }
}q

const isLowPriority = function(todo) {
  if (todo.priority <= 1) {
  return true
  } else {
    return false
  }
}

/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function(todo) {
  return todo.map(getTodoName)
}

const priorities = function(todo) {
  return todo.map(getPriority)
}

const namesAndPriorities = function(todo) {
  if (todo.priority === 1) {
    return todo.filter(getTodoName) + ' - Low'
  } else if (todo.priority === 2) {
    return todo.filter(getTodoName) + ' - High'
  }
}

const justComplete = function(todo) {
  return todo.filter(isComplete)
}
  

const priority2Only = function(todo) {
    return todo.filter(isHighPriority)
}

const priority1Only = function(todo) {
    return todo.filter(isLowPriority)
}

const justNotComplete = function(todo) {
    return todo.filter(isNotComplete)
}


// Our code below

if (typeof getTodoName === 'undefined') {
  getTodoName = undefined;
}

if (typeof getPriority === 'undefined') {
  getPriority = undefined;
}

if (typeof isComplete === 'undefined') {
  isComplete = undefined;
}

if (typeof isHighPriority === 'undefined') {
  isHighPriority = undefined;
}

if (typeof names === 'undefined') {
  names = undefined;
}

if (typeof priorities === 'undefined') {
  priorities = undefined;
}

if (typeof namesAndPriorities === 'undefined') {
  namesAndPriorities = undefined;
}

if (typeof justComplete === 'undefined') {
  justComplete = undefined;
}

if (typeof priority2Only === 'undefined') {
  priority2Only = undefined;
}

if (typeof priority1Only === 'undefined') {
  priority1Only = undefined;
}

if (typeof justNotComplete === 'undefined') {
  justNotComplete = undefined;
}



module.exports = {
  getTodoName,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  priorities,
  namesAndPriorities,
  justComplete,
  priority2Only,
  priority1Only,
  justNotComplete,
}
