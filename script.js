// Initialize arrays
const allNames = [];
const availableNames = [];

// Get DOM elements
const nameInput = document.getElementById('dataInput');
const addButton = document.getElementById('addBtn');
const selectedNameSpan = document.getElementById('selectedName');
const allNamesListDiv = document.getElementById('allNamesList');

// Add click event listener to the add button
addButton.addEventListener('click', addName);

// Function to add a name
function addName() {
    const name = nameInput.value.trim();
    if (name !== '') {
        allNames.push(name);
        availableNames.push(name);
        nameInput.value = ''; // Clear the input field
        
        // Update the list of all names
        updateAllNamesList();
    } else {
        alert('Please enter a name');
    }
}

// Optional: Add name when Enter key is pressed
nameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addName();
    }
});
// Function to update the list of all names
function updateAllNamesList() {
    allNamesListDiv.innerHTML = '<h3>All Names:</h3>';
    const ul = document.createElement('ul');
    allNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    });
    allNamesListDiv.appendChild(ul);
}