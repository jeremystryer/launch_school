class API {
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
      callback(json);
    });
  }
}

class App {
  constructor() {
    this.api = new API();
    this.init();
  }

  init() {
    this.createTemplates();
    this.bindEventHandlers();
    this.showAllContacts();
  }

  createTemplates() {
    this.templates = {};

    document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
      this.templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
    });
  }

  bindEventHandlers() {
    let editBtn = document.querySelector('.edit');
    let deleteBtns = document.querySelectorAll('.delete');
    let cancelBtn = document.querySelectorAll(".cancel");
    let searchField = document.getElementById('search-field');
    let addContactBtn = document.getElementById('add-contact-button');

    searchField.addEventListener('keyup', this.search);
    addContactBtn.addEventListener('click', this.displayNewContactForm);
    document.addEventListener('click', this.displayEditContactForm.bind(this));
    document.addEventListener('click', this.cancel);
    document.addEventListener('click', this.submit.bind(this));
    document.addEventListener('click', this.deleteContact.bind(this));
    document.addEventListener('click', this.filterByTag.bind(this));
  }

  filterByTag() {
    if (event.target.classList.contains('tag')) {
      event.preventDefault();
      let tags = document.getElementsByClassName('tag');

      [...tags].filter(tag => {
        let ul = tag.parentElement.parentElement;
        if (this.containsMatchingTag(ul, event.target.innerText)) {
          tag.parentElement.parentElement.parentElement.style.display = 'inline-block';
        } else {
          tag.parentElement.parentElement.parentElement.style.display = 'none';
        }
      })
    }
  }

  containsMatchingTag(node, tagContent) {
    return [...node.children].some(listItem => listItem.innerText === tagContent);
  }

  search() {
    let searchField = document.getElementById('search-field');
    let searchedName = searchField.value;
    let contactNames = document.getElementsByClassName('full-name');

    let matches = ([...contactNames].filter(name => {
      let regex = new RegExp('^' + searchedName, "i");
      return name.innerText.match(regex);
    }));

    [...contactNames].forEach(name => {
      if (!matches.includes(name)) {
        name.parentElement.style.display = 'none';
      } else {
        name.parentElement.style.display = 'inline-block';
      }
    });
  }

  displayNewContactForm() {
    let newContactForm = document.getElementById('new-contact-form').innerHTML;
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal-content");
    this.currentId = null;
    modalContent.innerHTML = newContactForm;
    modal.style.display = 'block';
  }

  submit() {
    if (event.target.classList.contains('submit')) {
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

      if (this.currentId) {
        this.api.updateSelectedContact(this.currentId, json, this.init.bind(this));
      } else {
        this.api.createNewContact(json, this.init.bind(this));
      }
    }
  }

  dataWithParsedTags(contactsData) {
    contactsData.forEach(data => {
      let tagsArr = [];
      let tags = data.tags.split(',');

      tags.forEach(tag => {
        tagsArr.push(tag.trim());
      });

      data.tags = tagsArr;
    });

    return contactsData;
  }

  showAllContacts() {
    let modal = document.querySelector(".modal");
    let contactListSection = document.getElementById('contact-list');
    let populateTemplate = (data) => {
      let newData = this.dataWithParsedTags(data);
      contactListSection.innerHTML = this.templates['contacts-template']({contacts: newData});
    }

    modal.style.display = "none";
    this.api.getAllContacts(populateTemplate);
  }

  cancel() {
    if (event.target.classList.contains('cancel')) {
      let modal = document.querySelector(".modal");
      modal.style.display = "none";
    }
  }

  deleteContact() {
    event.preventDefault();

    if (event.target.classList.contains('delete')) {
      let parentContactDiv = event.target.parentElement;
      let contactId = parentContactDiv.getAttribute('data-contact-id');
      let deleteConfirmation = window.confirm("Do you want to delete the contact?");

      if (deleteConfirmation) {
        this.api.deleteSelectedContact(this.showAllContacts.bind(this), contactId);
      }
    }
  }

  displayEditContactForm() {
    event.preventDefault();
    if (event.target.classList.contains('edit')) {
      let parentContactDiv = event.target.parentElement;
      let contactId = parentContactDiv.getAttribute('data-contact-id');
      this.currentId = contactId;
      this.showSelectedContact(contactId);
    }
  }

  showSelectedContact(contact) {
    let modal = document.querySelector(".modal");
    let modalContent = document.querySelector(".modal-content");

    function fillInEditContactForm(contact) {
      let editContactSection = document.getElementById("edit-contact");
      let editContactInfoTemplate = document.getElementById('edit-contact-info-template').innerHTML;
      let templateScript = Handlebars.compile(editContactInfoTemplate);
      modalContent.innerHTML = templateScript(contact);
      modal.style.display = "block";
    }

    this.currentId = contact;
    this.api.getSelectedContact(fillInEditContactForm, this.currentId);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
