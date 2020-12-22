class API {
  constructor() {
    // this.init();
  }

  getAllContacts(callback) {
    $.ajax({
      url: "http://localhost:3000/api/contacts",
      type: "GET",
      dataType: "JSON",
    }).done(json => {
      callback(json);
    });
  }

  getSelectedContact(callback, id) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/" + id,
      type: "GET",
      dataType: "JSON",
    }).done(json => {
      callback(json);
    });
  }

  updateSelectedContact(id, data) {
    $.ajax({
      url: "http://localhost:3000/api/contacts/" + id,
      type: "PUT",
      data: data,
      contentType: "application/json",
    });
  }
}

// class Contact {
//   constructor() {
//
//   }
//
//   addEventListeners() {
//
//   }
// }

class ContactList {
  constructor() {
    this.api = new API();
    // this.contact = new Contact();
    this.init();
  }

  init() {
    this.api.getAllContacts(this.showAllContacts.bind(this));
  }

  showAllContacts(contacts) {
    let contactListSection = document.getElementById('contact-list');
    let contactInfoTemplate = document.getElementById('contact-info-template').innerHTML;
    let templateScript = Handlebars.compile(contactInfoTemplate);
    contactListSection.innerHTML = templateScript(contacts);
    this.addEventListeners();
  }

  addEventListeners() {
    let editBtns = document.getElementsByClassName('edit');
    let deleteBtns = document.getElementsByClassName('delete');

    document.addEventListener('click', event => {
      event.preventDefault();
      if ([...editBtns].includes(event.target)) {
        let selectedLink = event.target;
        let parentContactDiv = event.target.parentElement;
        let contactId = parentContactDiv.getAttribute('data-contact-id');
        this.api.getSelectedContact(this.showSelectedContact.bind(this), contactId);
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

      // let fullName = document.getElementById("full-name").value;
      // let email = document.getElementById("full-name").value;
      // let phoneNumber = document.getElementById("full-name").value;
      let formData = new FormData(form);
      let object = {};

      formData.forEach(function(value, key) {
        if (value) {
          object[key] = value;
        }
      });

      let json = JSON.stringify(object);

      this.api.updateSelectedContact(this.currentId, json);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ContactList();
});
