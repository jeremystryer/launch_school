// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim';
team[scrumMaster] = 'Alice';
team[developer] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(team);

// console.log(`----{ ${company.name} }----`);
// console.log(`CEO: ${company.team[ceo]}`);
// console.log(`Scrum master: ${company.team[scrumMaster]}`);
// console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// Keys in JavaScript objects are always string. On lines 24 - 26, we're assigning key, value pairs. The variables ceo, scrumMaster, and developer all reference objects, which are then converted to strings when assigned as keys within the team object. The default conversion for an object (ceo, srumMaster, and developer) to a string is "[object Object]". Since "[object Object]" is used as the key for assigning all 3 roles, the value of 'Alice' overrides the value of 'Kim' and the value of undefined overrides of the value of 'Alice'.

// On lines 35 and 36, when we try to reference the keys ceo and scrumMaster, they do not exist since the keys are "[object Object]". When a key does not exist within an object, referencing the keys returns a value of undefined.

// Since objects cannot be used as keys within objects, the variables ceo, scrumMaster, and developer on lines 24 - 26 need to be changed to strings.

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

// Alternatively, dot notation can be used for assignment:

team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

// Also, on lines 37 - 38, variables ceo and scrumMaster need to either be written as strings or using dot notation.
