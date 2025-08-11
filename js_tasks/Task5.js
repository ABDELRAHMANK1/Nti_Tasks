let items = [];
        
const newItemInput = document.getElementById('newItem');
const updateIndexInput = document.getElementById('updateIndex');
const updateValueInput = document.getElementById('updateValue');
const deleteIndexInput = document.getElementById('deleteIndex');
const itemsList = document.getElementById('itemsList');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const deleteBtn = document.getElementById('deleteBtn');
const refreshBtn = document.getElementById('refreshBtn');


function displayItems() {
    itemsList.innerHTML = '';
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>
                <span class="index">[${index}]</span>
                <span>${item}</span>
            </span>

        `;
        itemsList.appendChild(listItem);
    });
}


function addItem() {
    const value = newItemInput.value.trim();
    if (value) {
        items.push(value);
        newItemInput.value = '';
        displayItems();
    }
}


function updateItem() {
    const index = parseInt(updateIndexInput.value);
    const value = updateValueInput.value.trim();
    
    if (!isNaN(index) && index >= 0 && index < items.length && value) {
        items[index] = value;
        updateIndexInput.value = '';
        updateValueInput.value = '';
        displayItems();
    }
}


function handleUpdatePrompt(index) {
    updateIndexInput.value = index;
    updateValueInput.value = items[index];
    updateValueInput.focus();
}


function deleteItem() {
    const index = parseInt(deleteIndexInput.value);
    
    if (!isNaN(index) && index >= 0 && index < items.length) {
        items.splice(index, 1);
        deleteIndexInput.value = '';
        displayItems();
    }
}

// Event Listeners
addBtn.addEventListener('click', addItem);
updateBtn.addEventListener('click', updateItem);
deleteBtn.addEventListener('click', deleteItem);
refreshBtn.addEventListener('click', displayItems);


newItemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});

updateValueInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') updateItem();
});

deleteIndexInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') deleteItem();
});

displayItems();