I believe that I have managed to complete all requirements.

I thought that the first two-thirds of this project where I focused on the main part of the page, all todos, and API requests went pretty well. I chose to do the HTML and CSS myself, as I thought that it would help me become familiar with how I’d want the JS to interact with the page, but I began to spend too much time on it early on.

Things got messy when I started on the sidebar. I had been entirely focused on working with all todos that I wasn’t sure how to go about organizing todos into dates. I had expected to use Handlebars templates, but I couldn’t come up with a data structure to organize the todos by date accordingly. My idea was to have an array of todo objects whose keys would be the due date and value would be the todo object. The problem was that I couldn’t figure out how to reference the key (which would be different for many of the todos, since it was a distinct due date) within a Handlebars template. I began to read up on @key in the Handlebars documentation, but as I was concerned about time, I ended up going with DOM manipulation to render the sidebar content. This became a very involved and time-consuming approach.

At one point, I created a Utilities object/class to extract logic. I did this when working on the first two-thirds of the project. If I had more time, I would leverage it more so that I could extract logic for the sidebar portion of the JS file as well. Everything related to the sidebar could use some heavy refactoring.

Because of the way that I am replacing the innerText of the title on the main page when interacting with the todo (toggling or deleting it), you can notice the rapid change of text in the title and count.

I told myself that I would focus on getting everything to work (no matter how ugly or repetitive the code) and then spend a great deal of time on refactoring afterwards, but I got caught up in just getting all functionality to work and never got around to refactoring.

In the end, I am not thrilled with the code and feel that I made things more difficult on myself but not taking a bird’s eye view of the design from the outset, but I am glad that I was able to work my way through all of the mini-challenges to get a functional application.
