// Get all the elements with the class "my-element"
const myElements = document.querySelectorAll('.my-element');

// Loop through each element and add an event listener for a click event
myElements.forEach((element) => {
  element.addEventListener('click', () => {
    // Do something when the element is clicked
    console.log(`The ${element.tagName} was clicked!`);
  });
});
