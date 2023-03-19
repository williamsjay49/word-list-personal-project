const formInput = document.querySelector('form input');
const removeBtn = document.querySelector('.display__clear');
const formField = document.querySelector('form');
const listBtn = document.querySelector('ul');
const mainDisplay = document.querySelector('.display');

//Add Items
function onAddItemSubmit(e) {
    e.preventDefault();
    
    const item = formInput.value;
    if (item === '') {
        alert('word is not inputed!');
        return;
    }

    // call the add element to dom function
    addItemToDOM(item);

    //call the addItemToLocalStorage function
    addItemToLocalStorage(item);

    //check and clear display
    checkUi();

    //initialize the input field to empty
    formInput.value = '';
}

function addItemToDOM(item) {
    const newWord = document.createElement('li');
    const createTitle = createTextElement(item);
    const createTitlIcon = createIcon("fa-solid fa-trash-can");

    newWord.className = 'mini-section__padding';
    newWord.appendChild(createTitle);
    newWord.appendChild(createTitlIcon);
    listBtn.appendChild(newWord);
}

function addItemToLocalStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
    //add new item into storage
    itemsFromStorage.push(item);
    
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage () {
    let itemsFromStorage;
    //check if there is any element in the array
    if (localStorage.getItem("items") === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = (JSON.parse(localStorage.getItem("items")));
    }

    return itemsFromStorage;     
}


function displayItems () {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));

    checkUi();
}

function createTextElement(arg) {
    const textElement = document.createElement('h4');
    textElement.appendChild(document.createTextNode(arg));
    return textElement;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickEdit(e) { 
    if (e.target.classList.contains('fa-trash-can')) {
        removeItem(e.target);
    }
    checkUi();
}

// Remove items
function removeItem(item) {
    if (confirm("Are you sure?")) {
    //remove item from DOM
        item.parentElement.remove();

    //remove item from local storage
    removeItemFromStorage(item.previousElementSibling.textContent);
    }
}

function removeItemFromStorage (item) {
    let itemsFromStorage = getItemsFromStorage();    
    res = itemsFromStorage.filter(x => x !== item);
    
    localStorage.setItem('items', JSON.stringify(res));
    console.log(res);

}

// Clear All
function clearAll () {
    while (listBtn.firstChild) {
        listBtn.removeChild(listBtn.firstChild);            
    }

    //remove item from storage
    localStorage.clear();

    checkUi();
}

// check ui

function checkUi() {
    const currentList = document.querySelectorAll('li');
    if (currentList.length === 0) {
        mainDisplay.style.display = "none";
        removeBtn.style.display = "none";
    } else {
        mainDisplay.style.display = "flex";
        removeBtn.style.display = "block";
    }

}

// Update item in the list
function updateItem() {
    const currentList = document.querySelectorAll('li');
    currentList.forEach(e => {
        console.log(e.target.innerHTML);
    })
}



// Initialize elements
function init() {
    formField.addEventListener('submit', onAddItemSubmit);
    listBtn.addEventListener('click', onClickEdit);
    // listBtn.addEventListener('click', updateItem);
    removeBtn.addEventListener('click', clearAll);
    document.addEventListener("DOMContentLoaded", displayItems);

    checkUi();
}

init();
