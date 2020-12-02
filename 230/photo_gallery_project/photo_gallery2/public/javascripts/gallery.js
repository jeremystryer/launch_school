document.addEventListener('DOMContentLoaded', event => {
  const templates = {};
  let photos;

  document.querySelectorAll("script[type='text/x-handlebars']").forEach(tmpl => {
    templates[tmpl["id"]] = Handlebars.compile(tmpl["innerHTML"]);
  });

   document.querySelectorAll("[data-type=partial]").forEach(tmpl => {
     Handlebars.registerPartial(tmpl["id"], tmpl["innerHTML"]);
   });

  const slideshow = {
    prevSlide: function(e) {
      e.preventDefault();
      let prev = this.currentSlide.previousElementSibling;
      if (!prev) {
        prev = this.lastSlide;
      }
      this.fadeOut(this.currentSlide);
      this.fadeIn(prev);
      this.renderPhotoContent(prev.getAttribute("data-id"));
      this.currentSlide = prev;
    },
    nextSlide: function(e) {
      e.preventDefault();
      let next = this.currentSlide.nextElementSibling;
      if (!next) {
        next = this.firstSlide;
      }
      this.fadeOut(this.currentSlide);
      this.fadeIn(next);
      this.renderPhotoContent(next.getAttribute("data-id"));
      this.currentSlide = next;
    },
    fadeOut: function(slide) {
      slide.classList.add('hide');
      slide.classList.remove('show');
    },
    fadeIn: function(slide) {
      slide.classList.remove('hide');
      slide.classList.add('show');
    },
    renderPhotoContent: function(idx) {
      renderPhotoInformation(Number(idx));
      getCommentsFor(idx);
    },
    bind: function() {
      let prevButton = this.slideshow.querySelector("a.prev");
      let nextButton = this.slideshow.querySelector("a.next");
      prevButton.addEventListener("click", (e) => { this.prevSlide(e) });
      nextButton.addEventListener("click", (e) => { this.nextSlide(e) });
    },
    init: function() {
      this.slideshow = document.querySelector("#slideshow");
      let slides = this.slideshow.querySelectorAll('figure');
      this.firstSlide = slides[0];
      this.lastSlide = slides[slides.length - 1];
      this.currentSlide = this.firstSlide;
      this.bind();
    }
  };

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      getCommentsFor(photos[0].id);
      slideshow.init();
  });

  function renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(idx) {
    let photo = photos.filter(function(item) {
      return item.id === idx;
    })[0];
    let header = document.querySelector("section > header");
    // header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
    header.innerHTML = templates.photo_information(photo);
  }

  function getCommentsFor(idx) {
    fetch("/comments?photo_id=" + idx)
      .then(response => response.json())
      .then(comment_json => {
        let comment_list = document.querySelector("#comments ul");
        // comment_list.insertAdjacentHTML('beforeend', templates.photo_comments({ photo_comments: comment_json }));
        comment_list.innerHTML = templates.photo_comments({ photo_comments: comment_json });
      });
  }
});

// A question about the two functions in the LS solution here.  Both getCommentsFor and renderPhotoInformation  use insertAdjacentHTMLto add values to their respective Handlebars templates, but wouldn’t this cause the photo information and comments for each slide as we click through the slideshow to continue to be tacked onto the page? Wouldn’t we want to use innerHTML instead of insertAdjacentHTML  so that the template is replaced with new values for the current slide?
