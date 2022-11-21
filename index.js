// Write your code in this file!
const currentUser = 'Faith Kimani';
let welcomeMessage = "Welcome to Flatbook, "

//Using string concatenation
 welcomeMessage = 'Welcome to Flatbook, ' + currentUser;

// using template literals
welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

//Changing to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//slicing
const firstInitial = currentUser.slice(0,1);
// const restOfName = currentUser.slice
const shortGreeting = `Welcome, ${firstInitial}!`;

