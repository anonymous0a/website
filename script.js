// Example: Change the text of the heading when clicked
const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', () => {
    mainHeading.textContent = 'You clicked the heading!';
});
