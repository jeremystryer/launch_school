$(function() {
  let slides = document.getElementById("slides");

  let idGenerator = (function() {
    let id = 0;

    return function() {
      return id += 1;
    }
  })();

  $.ajax({
    method: "GET",
    url: "/photos",
    dataType: "json",
  })
    .done(function(json) {
      json.forEach(obj => {
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        let figcaption = document.createElement('figcaption');

        figure.setAttribute('data-id', idGenerator());
        image.setAttribute('src', obj.src);
        figcaption.innerText = obj.caption;

        figure.insertAdjacentElement('afterbegin', image);
        figure.insertAdjacentElement('beforeend', figcaption);

        slides.insertAdjacentElement('beforeend', figure);
      });
  });
});
