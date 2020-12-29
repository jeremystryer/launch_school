class Controller {
  constructor() {
    this.api = new API();
    this.init();
  }

  init() {
    this.createTemplates();
    // this.populateTemplates();
    this.showAllTodos();
    this.bindEventHandlers();

    // this.crud.showAllTodos();

  }

  createTemplates() {
    this.templates = {};

    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });

    // document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
    //   Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
    // });

    Handlebars.registerHelper("monthAndYearExist", function(month, year) {
      if (month && year) {
        return month + '/' + year;
      } else {
        return "No Due Date";
      }
    });
  }

  bindEventHandlers() {

    let modal = document.querySelector(".modal");
    let form = document.querySelector('form');

    document.addEventListener('click', this.displayForm.bind(this));
    modal.addEventListener('click', this.closeForm);
    document.addEventListener('click', this.evaluateForm.bind(this));
    document.addEventListener('click', this.deleteTodo.bind(this));
  }

  deleteTodo() {
    event.preventDefault();
    let clicked = event.target;
    const getTodoId = (element) => {
      return element.getAttribute('data-id');
    }

    if (clicked.classList.contains('trash')) {
      let todoId = getTodoId(clicked.parentElement);
      this.api.removeTodo(todoId, this.showAllTodos.bind(this));
    }
  }

  evaluateForm() {
    event.preventDefault();
    let clicked = event.target;
    if (clicked.classList.contains('save')) {
      this.saveTodo();
    } else if (clicked.classList.contains('mark_complete')) {
      this.markComplete();
    }
  }

  markComplete() {
    let json = JSON.stringify({completed: true});
    this.api.updateSpecificTodo(this.currentTodoId, json, this.showAllTodos.bind(this));
  }


  saveTodo() {
    event.preventDefault();
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let todoId = document.querySelector('.form_container').getAttribute('data-id');
    let titleValue = document.getElementById('title').value

    let todoInfo = {};

    const validateTitleInput = (value) => {
      if (!value || value.length < 3) {
        alert("You must enter an item name of at least 3 characters");
        return false;
      } else {
        return true;
      }
    }

    formData.forEach(function(value, key) {
      if (value) {
        todoInfo[key] = value;
      }
    });

    let json = JSON.stringify(todoInfo);

    if (todoId) {
      this.api.updateSpecificTodo(todoId, json, this.showAllTodos.bind(this));
    } else {
      this.api.createNewTodo(json, this.showAllTodos.bind(this));
    }
  }

  closeForm() {
    let modal = document.querySelector(".modal");
    if (event.target !== modal ) return;
    $(".modal").fadeOut('7000', function() {
      $(".modal")[0].style.display = 'none';
    });
  }

  showAllTodos() {
    let allTodosSection = document.getElementById("all_todos_section");
    let modal = document.querySelector(".modal");

    const getLastTwoDigits = (todos) => {
      todos.forEach(todo => {
        if (todo.year) {
          todo.year = todo.year.slice(2, 4);
        }
      });
      return todos;
    }

    const populateTemplate = (data) => {
      let dataWithShortYears = getLastTwoDigits(data);
      let numberOfAllTodos = document.querySelectorAll(".number_of_all_todos");
      [...numberOfAllTodos].forEach(span => span.innerText = data.length);
      allTodosSection.innerHTML = this.templates['all_todos_template']({todos: dataWithShortYears});
      dataWithShortYears.forEach(data => {
        if (data.completed) {
          let todo = document.querySelector("[data-id='" + data.id + "']");
          todo.firstElementChild.classList.add('complete');
        }
      });
    }

    this.currentTodoId = null;
    modal.style.display = 'none';
    this.api.retrieveAllTodos(populateTemplate);
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

      let yearOptionIndex;

      function findIndexForYearValue() {
        let yearValue = data.year;
        [...year.options].forEach((option, index) => {
          if (option.innerText === yearValue) {
            yearOptionIndex = index;
          }
        });
      }

      findIndexForYearValue();

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
  removeTodo(id, callback) {
    $.ajax({
      url: "http://localhost:3000/api/todos/" + id,
      method: "DELETE",
    }).done(() => {
      callback();
    });
  }

  resetDatabase() {

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

// class CRUD {
//   constructor() {
//     this.api = new API();
//   }
//
//   showAllTodos() {
//     this.api.retrieveAllTodos();
//   }
// }

class UTILITIES {

}

class UI {

}

document.addEventListener('DOMContentLoaded', () => {
  new Controller();
});
