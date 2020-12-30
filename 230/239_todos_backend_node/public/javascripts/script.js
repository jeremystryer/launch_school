class Controller {
  constructor() {
    this.api = new API();
    this.utilities = new UTILITIES();
    this.init();
  }

  init() {
    this.createTemplates();
    this.showAllTodos();
    this.bindEventHandlers();
  }

  createTemplates() {
    this.templates = {};

    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });

    Handlebars.registerHelper("monthAndYearExist", function(month, year) {
      if (month && year) {
        return month + '/' + year;
      } else {
        return "No Due Date";
      }
    });

    document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
      Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
    });
  }

  bindEventHandlers() {
    let modal = document.querySelector(".modal");
    let allTodosSidebarTitle = document.getElementById("all_todos_sidebar_title");
    let resetBtn = document.getElementById("reset");

    document.addEventListener('click', this.displayForm.bind(this));
    modal.addEventListener('click', this.closeFormWhenClickingOut);
    document.addEventListener('click', this.evaluateForm.bind(this));
    document.addEventListener('click', this.deleteTodo.bind(this));
    document.addEventListener('click', this.toggleComplete.bind(this));
    document.addEventListener('click', this.showSelectedTodos.bind(this));
    // allTodosSidebarTitle.addEventListener('click', this.displayAllTodos);
    allTodosSidebarTitle.addEventListener('click', this.showAllTodos.bind(this));
    resetBtn.addEventListener('click', this.reset.bind(this));
    document.addEventListener('click', this.showSelectedDeletedTodos.bind(this));
  }

  reset() {
    let confirm = window.confirm("Are you sure that you want to delete all todos? This cannot be undone.")

    if (confirm) {
      this.api.resetDatabase(this.showAllTodos.bind(this));
    }
  }

  displayAllTodos() {
    let allTodos = document.querySelectorAll(".todo_info");
    let category = document.getElementById("category");
    category.innerText = "All Todos";

    [...allTodos].forEach(todo => {
      todo.parentElement.style.display = 'block';
    });
  }

  showSelectedDeletedTodos() {
    let clicked = event.target;
    let allTodos = document.querySelectorAll(".todo_info");
    let category = document.getElementById("category");
    let count = document.getElementById("count");

    if (clicked.classList.contains("sidebar_completed_date")) {

      [...allTodos].forEach(todo => {
        let todoDate = todo.textContent.trim().split('-')[1].trim();
        let clickedDate = clicked.firstElementChild.textContent;

        if (todoDate !== clickedDate || !todo.classList.contains("complete")) {
          todo.parentElement.style.display = 'none';
        } else {
          todo.parentElement.style.display = 'block';
        }
      });

      category.innerText = clicked.children[0].innerText;;
      count.innerText = clicked.children[1].innerText;
    } else if (clicked.parentElement.classList.contains("sidebar_completed_date")) {
      [...allTodos].forEach(todo => {

        let todoDate = todo.textContent.trim().split('-')[1].trim();
        let clickedDate = clicked.parentElement.firstElementChild.textContent;

        if (todoDate !== clickedDate || !todo.classList.contains("complete")) {
          todo.parentElement.style.display = 'none';
        } else {
          todo.parentElement.style.display = 'block';
        }
      });


      if (clicked.classList.contains("todos_count_per_date")) {
        category.innerText = clicked.previousElementSibling.innerText;
        count.innerText = clicked.innerText;
      } else {
        category.innerText = clicked.innerText;
        count.innerText = clicked.nextElementSibling.innerText;
      }
    }
  }

  showSelectedTodos() {
    let clicked = event.target;
    let allTodos = document.querySelectorAll(".todo_info");
    let category = document.getElementById("category");
    let count = document.getElementById("count");

    if (clicked.classList.contains("sidebar_list_date")) {
      [...allTodos].forEach(todo => {
        let todoDate = todo.textContent.trim().split('-')[1].trim();
        let clickedDate = clicked.firstElementChild.textContent;

        if (todoDate !== clickedDate) {
          todo.parentElement.style.display = 'none';
        } else {
          todo.parentElement.style.display = 'block';
        }
      });
      category.innerText = clicked.children[0].innerText;;
      count.innerText = clicked.children[1].innerText;

    } else if (clicked.parentElement.classList.contains("sidebar_list_date")) {
      [...allTodos].forEach(todo => {
        let todoDate = todo.textContent.trim().split('-')[1].trim();
        let clickedDate = clicked.parentElement.firstElementChild.textContent;

        if (todoDate !== clickedDate) {
          todo.parentElement.style.display = 'none';
        } else {
          todo.parentElement.style.display = 'block';
        }
      });

      if (clicked.classList.contains("todos_count_per_date")) {
        category.innerText = clicked.previousElementSibling.innerText;
        count.innerText = clicked.innerText;
      } else {
        category.innerText = clicked.innerText;
        count.innerText = clicked.nextElementSibling.innerText;
      }
    }
  }

  deleteTodo() {
    event.preventDefault();
    let clicked = event.target;

    const getTodoId = (element) => {
      return element.getAttribute('data-id');
    }

    // if (clicked.classList.contains('trash')) {
    //   let todoId = getTodoId(clicked.parentElement);
    //
    //   const removeTodoFromPage = (id) => {
    //     let todo = document.querySelector("[data-id='" + id + "']");
    //     todo.remove();
    //   }


    if (clicked.classList.contains('trash')) {
      // this.api.destroyTodo(todoId, removeTodoFromPage);
      let todoId = getTodoId(clicked.parentElement);
      this.api.destroyTodo(todoId, this.showAllTodos.bind(this));
    }
  }

  // organizeTodos() {
  //   let completedTodos;
  //   let incompleteTodos;
  //   let todosSection = document.getElementById("todos_section");
  //   let allTodos;
  //
  //   let todos = document.querySelectorAll(".todo_info");
  //
  //   todos =  this.utilities.separateIncompleteAndCompleteTodos(todos);
  //   incompleteTodos = todos[0];
  //   completedTodos = todos[1];
  //
  //   completedTodos = this.utilities.sortTodos(completedTodos);
  //   allTodos = completedTodos.concat(incompleteTodos);
  //
  //   // todosSection.innerHTML = '';
  //   [...allTodos].forEach(todo => {
  //     // todosSection.append(todo);
  //     // todosSection.insertAdjacentElement('afterbegin', todo);
  //   });
  // }

  showAllTodos() {
    let category = document.getElementById("category");
    let todosSection = document.getElementById("todos_section");
    let modal = document.querySelector(".modal");


    category.innerText = "All Todos";

    const populateTemplates = (data) => {
      let completedTodos;
      let incompleteTodos;

      let dataWithShortYears = this.utilities.getLastTwoDigits(data);
      let numberOfAllTodos = document.querySelectorAll(".number_of_all_todos");
      [...numberOfAllTodos].forEach(span => span.innerText = data.length);

      let todos = this.utilities.separateIncompleteAndCompleteTodos(dataWithShortYears);
      incompleteTodos = todos[0];
      completedTodos = todos[1];
      completedTodos = this.utilities.sortTodos(completedTodos);

      dataWithShortYears = incompleteTodos.concat(completedTodos);
      todosSection.innerHTML = this.templates['all_todos_template']({todos: dataWithShortYears});

      dataWithShortYears.forEach(data => {
        if (data.completed) {
          let todo = document.querySelector("[data-id='" + data.id + "']");
          todo.firstElementChild.classList.add('complete');
          todo.firstElementChild.firstElementChild.checked = true;
        }
      });

      let count = document.getElementById('count');
      count.innerText = data.length;
      this.showSidebarContent(data);
    }


    this.currentTodoId = null;
    modal.style.display = 'none';
    this.api.retrieveAllTodos(populateTemplates);
  }

  showSidebarContent(data) {
    let todosByDates = [];

    data.forEach(d => {
      let month = d.month;
      let year = d.year;
      let date;

      if (month === '' || year === '') {
        date = "No Due Date";
      } else {
        date = month + "/" + year;
      }

      let obj = {};
      obj[date] = d;
      todosByDates.push(obj);
    });

    let todosCountByDate = {};
    todosByDates.forEach(todo => {
      let keys = Object.keys(todosCountByDate);
      for (let prop in todo) {
        if (keys.includes(prop)) {
          todosCountByDate[prop] += 1;
        } else {
          todosCountByDate[prop] = 1;
        }
      }
    });

    let todosByDateSection = document.getElementById("todos_by_date");
    let temp = document.getElementById("temp");
    todosByDateSection.innerHTML = '';
    let completedTodosSection = document.getElementById("completed_todos_section");
    let todosByCompletion = document.getElementById("todos_by_completion");
    let allTodosSideBarCount = document.getElementById("all_todos_sidebar_count");

    allTodosSideBarCount.innerText = document.querySelectorAll(".todo_info").length;

    for (let prop in todosCountByDate) {
      let li = document.createElement("li");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      li.classList.add("sidebar_list_date");

      li.appendChild(p1);
      p1.classList.add('todos_date')
      li.appendChild(p2);
      p2.classList.add('todos_count_per_date')
      p1.appendChild(document.createTextNode(prop));
      p2.appendChild(document.createTextNode(todosCountByDate[prop]));
      todosByDateSection.insertAdjacentElement("beforeend", li);
    }

    let allTodos = document.querySelectorAll(".todo_info");
    let completedTodosByDate = {};

    for (let prop in todosCountByDate) {
      let matchingTodos = ([...allTodos].filter(todo => {
        let date = todo.textContent.trim().split('-')[1].trim();
        if (date === prop) {
          if (todo.classList.contains("complete")) {
            if (completedTodosByDate[prop]) {
              completedTodosByDate[prop] += 1
            } else {
              completedTodosByDate[prop] = 1
            }
          }
        }
      }));

      todosByCompletion.innerHTML = '';

      for (let prop in completedTodosByDate) {
        let li = document.createElement("li");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        li.classList.add("sidebar_completed_date");

        li.appendChild(p1);
        p1.classList.add('todos_date')
        p1.classList.add('completed_todo');
        li.appendChild(p2);
        p2.classList.add('todos_count_per_date')
        // p2.classList.add('completed_todo');
        p1.appendChild(document.createTextNode(prop));
        p2.appendChild(document.createTextNode(completedTodosByDate[prop]));
        todosByCompletion.insertAdjacentElement("beforeend", li);
      }
    }

  }

  evaluateForm() {
    event.preventDefault();
    let clicked = event.target;
    if (clicked.classList.contains('save')) {
      this.saveTodo();
    } else if (clicked.classList.contains('mark_complete')) {
      if (this.currentTodoId) {
        this.markComplete();
      } else {
        alert("You cannot mark a new todo as complete.")
      }
    }
  }

  toggleComplete() {
    let clicked = event.target;
    let complete;
    let json;

    if (clicked.classList.contains('checkbox') || clicked.classList.contains('todo_info')) {
      complete = !clicked.closest('div.todo_info').classList.contains('complete');
      this.currentTodoId = clicked.closest('li').getAttribute('data-id');
      json = this.utilities.convertToJson({completed: complete});

      function showUpdatedTodo() {
        let todo = document.querySelector("[data-id='" + this.currentTodoId + "']");
        let todoInfo = todo.firstElementChild;
        todoInfo.classList.toggle('complete');
        if (todoInfo.classList.contains('complete')) {
          todoInfo.firstElementChild.checked = true;
        } else {
          todoInfo.firstElementChild.checked = false;
        }
      }

      this.api.updateSpecificTodo(this.currentTodoId, json, this.showAllTodos.bind(this));
    }
  }

  markComplete() {
    let json = JSON.stringify({completed: true});
    this.api.updateSpecificTodo(this.currentTodoId, json, this.closeFormAfterSaving.bind(this));
  }

  saveTodo() {
    event.preventDefault();
    let form = document.querySelector('form');
    let data = new FormData(form);
    let todoId = document.querySelector('.form_container').getAttribute('data-id');
    let titleValue = document.getElementById('title').value

    if (this.utilities.validateInput(titleValue) === false) {
      return;
    }

    let json = this.utilities.processForm(data);

    if (todoId) {
      this.api.updateSpecificTodo(todoId, json, this.closeFormAfterSaving.bind(this));
    } else {
      this.api.createNewTodo(json, this.showAllTodos.bind(this));
    }
  }

  closeFormAfterSaving() {
    let modal = document.querySelector('.modal');
    modal.style.display = "none";
  }

  closeFormWhenClickingOut() {
    let modal = document.querySelector(".modal");
    if (event.target !== modal ) return;
    $(".modal").fadeOut('7000', function() {
      $(".modal")[0].style.display = 'none';
    });
  }

  displayForm() {
    let clicked = event.target;
    let addTodoBtn = document.querySelector('.add_todo');
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal_content");

    const populateFormWithTodoInfo = (data) => {
      modalContent.innerHTML = this.templates['form_template'](data);
      let day = document.getElementById('day');
      let month = document.getElementById('month');
      let year = document.getElementById('year');

      let dayOptionIndex = parseInt(data.day, 10) || '';
      let monthOptionIndex = parseInt(data.month, 10) || '';
      let yearOptionIndex = this.utilities.findIndex(data);

      if (dayOptionIndex) {
        day.options[dayOptionIndex].selected = true;
      }

      if (monthOptionIndex) {
        month.options[monthOptionIndex].selected = true;
      }

      if (yearOptionIndex) {
        year.options[yearOptionIndex].selected = true;
      }

      $(".modal").fadeIn('7000', function() {
        modal.style.display = 'block';
      });
    }

    if (clicked === addTodoBtn) {
      modalContent.innerHTML = this.templates['form_template']({});
      $(".modal").fadeIn('7000', function() {
        modal.style.display = 'block';
      });
    } else if (clicked.classList.contains('todo_text')) {
      this.currentTodoId = clicked.parentElement.parentElement.getAttribute("data-id");
      this.api.retrieveSpecificTodo(this.currentTodoId, populateFormWithTodoInfo);
    }
  }
}

class API {
  destroyTodo(id, callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos/" + id,
      method: "DELETE",
    }).done(() => {
      callback(id);
    });
  }

  resetDatabase(callback) {
    $.ajax({
      url: "http://localhost:3000/api/reset",
      method: "GET",
    }).done(() => {
      callback();
    });
  }

  retrieveAllTodos(callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos",
      method: "GET",
    }).done((jsonTodos) => {
      callback(jsonTodos);
    });
  }

  retrieveSpecificTodo(id, callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos/" + id,
      method: "GET"
    }).done(jsonTodo => {
      callback(jsonTodo);
    });
  }

  createNewTodo(data, callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos",
      method: "POST",
      data: data,
      contentType: "application/json",
    }).done(json => {
      callback(json);
    });
  }

  updateSpecificTodo(id, data, callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos/" + id,
      method: "PUT",
      data: data,
      contentType: "application/json",
    }).done(callback);
  }
}

class UTILITIES {
  getLastTwoDigits(todos) {
    todos.forEach(todo => {
      if (todo.year) {
        todo.year = todo.year.slice(2, 4);
      }
    });
    return todos;
  }

  sortTodos(todos) {
    todos.sort((todo1, todo2) => {
      if (todo1.title < todo2.title) {
        return -1;
      } else if (todo1.title > todo2.title) {
        return 1;
      } else {
        return 0;
      }
    });
    return todos;
  }

  separateIncompleteAndCompleteTodos(todos) {
    let completedTodos = [];
    let incompleteTodos = [];

    [...todos].forEach(todo => {

      // if (todo.classList.contains('complete')) {
      if (todo.completed) {
        completedTodos.push(todo);
      } else {
        incompleteTodos.push(todo);
      }
    });

    return [incompleteTodos, completedTodos];
  }

  validateInput(value) {
    if (!value || value.length < 3) {
      alert("You must enter an item name of at least 3 characters");
      return false;
    } else {
      return true;
    }
  }

  processForm(data) {
    let todoInfo = {};
    data.forEach((value, key) => {
      if (value) {
        todoInfo[key] = value;
      }
    });
    return this.convertToJson(todoInfo);
  }

  findIndex(data) {
    let yearValue = data.year;
    let yearIndex;

    [...year.options].forEach((option, index) => {
      if (option.innerText === yearValue) {
        yearIndex = index;
      }
    });
    return yearIndex;
  }

  convertToJson(status) {
    return JSON.stringify(status);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Controller();
});
