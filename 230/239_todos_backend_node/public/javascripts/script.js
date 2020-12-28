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

    document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
      Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
    });

  }

  bindEventHandlers() {
    let addTodoBtn = document.querySelector('.add_todo');
    let modal = document.querySelector(".modal");
    let form = document.querySelector('form');

    addTodoBtn.addEventListener('click', this.displayNewTodoForm);
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
      this.saveNewTodo();
    } else if (clicked.classList.contains('mark_complete')) {
      console.log("mark complete");
    }
  }

  saveNewTodo() {
    event.preventDefault();
    let form = document.querySelector('form');
    let formData = new FormData(form);
    let titleValue = document.getElementById('title').value
    let object = {};

    const validateInput = (value) => {
      if (!value || value.length < 3) {
        alert("You must enter an item name of at least 3 characters");
        return false;
      } else {
        return true;
      }
    }

    if (!validateInput(titleValue)) return;

    formData.forEach(function(value, key) {
      if (value) {
        object[key] = value;
      }
    });

    let json = JSON.stringify(object);
    this.api.createNewTodo(json, this.showAllTodos.bind(this));
  }

  displayNewTodoForm() {
    let newTodoForm = document.getElementById('new_todo_form_section').innerHTML;
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal_content");
    modalContent.innerHTML = newTodoForm;

    $(".modal").fadeIn('7000', function() {
      modal.style.display = 'block';
    });
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

    let populateTemplate = (data) => {
      allTodosSection.innerHTML = this.templates['all_todos_template']({todos: data});
    }

    modal.style.display = 'none';
    this.api.retrieveAllTodos(populateTemplate);
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
      url: 'http://localhost:3000/api/todos',
      method: 'GET',
    }).done((jsonTodos) => {
      callback(jsonTodos);
    });
  }

  retrieveSpecificTodo() {

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

  updateSpecificTodo() {

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
