class API {
  constructor() {
    // this.init();
  }

  getAllContacts(callback) {
    $.ajax({
      url: "http://localhost:3000/api/contacts",
      method: "GET",
      dataType: "JSON",
    }).done(json => {
      callback(json);
    });
  }

  getSelectedContact(callback, id) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/" + id,
      method: "GET",
      dataType: "JSON",
    }).done(json => {
      callback(json);
    });
  }

  updateSelectedContact(id, data, callback) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/" + id,
      method: "PUT",
      data: data,
      contentType: "application/json",
    }).done(() => {
      callback();
    });
  }

  deleteSelectedContact(callback, id) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/" + id,
      method: "DELETE",
    }).done(() => {
      callback();
    })
  }

  createNewContact(data, callback) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/",
      method: "POST",
      data: data,
      contentType: "application/json",
    }).done((json) => {
      callback();
    });
  }
}

class App {
  constructor() {
    this.api = new API();
    this.init();
  }

  init() {
    this.api.getAllContacts(this.showAllContacts.bind(this));
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
  }

  showAllContacts(contacts) {
    let contactListSection = document.getElementById('contact-list');
    let contactInfoTemplate = document.getElementById('contact-info-template').innerHTML;
    let templateScript = Handlebars.compile(contactInfoTemplate);
    contactListSection.innerHTML = templateScript(contacts);
    this.addEventListeners();
  }

  addEventListeners() {
    let editBtns = document.querySelectorAll('.edit');
    let deleteBtns = document.querySelectorAll('.delete');
    let addContactBtn = document.getElementById('add-contact-button');
    let searchField = document.getElementById('search-field');
    let searchBtn = document.getElementById('search-button');

    searchBtn.addEventListener('click', event => {
      let searchValue = document.getElementById('search-field').value;
      let contacts = document.querySelectorAll('.contact');

    });

    addContactBtn.addEventListener('click', event=> {
      let newContactForm = document.getElementById('new-contact-form').innerHTML;
      let modal = document.querySelector(".modal");
      let modalContent = document.querySelector(".modal-content");

      modalContent.innerHTML = newContactForm;
      modal.style.display = "block";

      let submitBtn = document.querySelector(".submit");
      let cancelBtn = document.querySelector(".cancel");

      cancelBtn.addEventListener('click', event => {
        modal.style.display = "none";
      });

      submitBtn.addEventListener('click', event => {
        event.preventDefault();
        let form = document.querySelector('form');
        let formData = new FormData(form);
        let object = {};

        formData.forEach(function(value, key) {
          if (value) {
            object[key] = value;
          }
        });

        let json = JSON.stringify(object);

        this.api.createNewContact(json, this.init.bind(this));
      });
    });

    document.addEventListener('click', event => {
      event.preventDefault();
      if ([...editBtns].includes(event.target)) {
        let parentContactDiv = event.target.parentElement;
        let contactId = parentContactDiv.getAttribute('data-contact-id');
        this.api.getSelectedContact(this.showSelectedContact.bind(this), contactId);
      }
    });

    document.addEventListener('click', event => {
      event.preventDefault();
      if ([...deleteBtns].includes(event.target)) {
        let parentContactDiv = event.target.parentElement;
        let contactId = parentContactDiv.getAttribute('data-contact-id');
        let deleteConfirmation = window.confirm("Do you want to delete the contact?");

        if (deleteConfirmation) {
          this.api.deleteSelectedContact(this.init.bind(this), contactId);
        }
      }
    });
  }

  showSelectedContact(contact) {
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal-content");
    let editContactSection = document.getElementById("edit-contact");
    let editContactInfoTemplate = document.getElementById('edit-contact-info-template').innerHTML;
    let templateScript = Handlebars.compile(editContactInfoTemplate);

    this.currentId = contact.id;

    modalContent.innerHTML = templateScript(contact);
    modal.style.display = "block";

    let submitBtn = document.querySelector(".submit");
    let cancelBtn = document.querySelector(".cancel");

    cancelBtn.addEventListener('click', event => {
      modal.style.display = "none";
    });

    submitBtn.addEventListener('click', event => {
      event.preventDefault();
      let form = document.querySelector('form');
      let formData = new FormData(form);
      let object = {};

      formData.forEach(function(value, key) {
        if (value) {
          object[key] = value;
        }
      });

      let json = JSON.stringify(object);

      this.api.updateSelectedContact(this.currentId, json, this.init.bind(this));
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
