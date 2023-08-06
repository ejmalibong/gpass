// Function to handle click events on the div elements
function handleClick(event) {
    // Get the id of the clicked div
    const clickedDivId = event.target.id;
    
    // Log the id to the console (you can perform any other action here)
    console.log('Clicked div id:', clickedDivId);
}

// Add click event listeners to all div elements with ids
const divElements = document.querySelectorAll('div[id]');
divElements.forEach(div => {
    div.addEventListener('click', handleClick);
});