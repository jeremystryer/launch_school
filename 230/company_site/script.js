$(function() {
  let $team = $("#team");
  let $modal = $(".modal");
  let $closeBtn = $(".closeBtn");

  $team.on("click", function(e) {
    let $clicked = e.target;
    if ($clicked.nodeName !== "IMG" && $clicked.nodeName !== "A") return;

    event.preventDefault();

    $modal.css('display', 'block');
  });

  $modal.on("click", function(e) {
    let $clicked = e.target;

    if ($clicked === $closeBtn[0] || $clicked === this) {
      $modal.css('display', 'none');
    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   let $teamMember = $("img");
//
//   $teamMember.on("click", function() {
//     event.preventDefault();
//     console.log($teamMember);
//   });
// });
