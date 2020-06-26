// The following code demonstrates the Pomodoro technique. Although it seems to work in principle, it never prints the minute count from line 11. What is wrong?

var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes;

function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  minutes = 0;
  pomodoro();
}

pomodoro();

// There are two minutes variables: one initialized on line 6 and the other on line 36. Due to scoping rules, although the inner scoped pomodoro() function could have access to the variable minutes initialized on
// line 6, minutes from line 36 shadows it. The var minutes from line 36 is hoisted to the top of the pomodoro() function and initiallu assigned a default value of undefined, so the while loop beginning on line
// 11 never evaluates to true since (undefined < 25) is false. On line 36, minutes is assigned a value of 0, but then pomodoro() function is called recursively and minutes is initialized anew to a default value
// of undefined.

// The fix would be to make sure that a new minutes variable is not declared on line 36 so that minutes is reassigned a value of 0 and when minutes is initialized on line 6, it could be assigned a value of 0;
