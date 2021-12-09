const text = 'outside';
function logIt() {
  console.log(text);
  var text = 'inside';
}
logIt();


//   const message = 'The British are coming.';
//   function sayMessage() {
//     alert(message); // Here we have access to message,
//     // even though it's declared outside this function!
//   }

// sayMessage();