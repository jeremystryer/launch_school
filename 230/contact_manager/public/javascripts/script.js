document.addEventListener('DOMContentLoaded', () => {
  class ContactList {
    constructor() {
      this.init();
    }

    init() {
      $.ajax({
        url: "http://localhost:3000/api/contacts",
        type: "GET",
        dataType: "JSON",
      }).done(allContacts => {
        this.render(allContacts);
      });
    }

    render(contacts) {
      let contactListSection = document.getElementById('contact-list');
      let contactInfoTemplate = document.getElementById('contact-info-template').innerHTML;
      let templateScript = Handlebars.compile(contactInfoTemplate);
      contactListSection.innerHTML = templateScript(contacts);
    }
  }

  new ContactList();
});
