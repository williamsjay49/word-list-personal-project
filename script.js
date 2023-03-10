const formInput = document.querySelector('form input');
const removeBtn = document.querySelector('.display__clear');
const formField = document.querySelector('form');
const listBtn = document.querySelector('ul');


//Add Items
function appendWord(e) {
    e.preventDefault();

    const item = formInput.value;
    if (item === '') {
        alert('word is not inputed!');
    } else {
        const newWord = document.createElement('li');
        const createTitle = createTextElement(item);
        const createTitlIcon = createIcon("fa-solid fa-trash-can");
        const mainList = document.querySelector('ul');
    
        newWord.className = 'mini-section__padding';
        newWord.appendChild(createTitle);
        newWord.appendChild(createTitlIcon);
        mainList.appendChild(newWord);
    }

    formInput.value = '';
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

// Remove items
function removeItem(e) {
    if (e.target.classList.contains('fa-trash-can')) {
        e.target.parentElement.remove();
    }
}

// Clear All
function clearAll () {
    while (listBtn.firstChild) {
        listBtn.removeChild(listBtn.firstChild);            
    }
}



// Update item in the list
function updateItem(e) {
    e.target.
}



// Initialize elements
function init() {
    formField.addEventListener('submit', appendWord);
    listBtn.addEventListener('click', removeItem);
    listBtn.addEventListener('click', updateItem);
    removeBtn.addEventListener('click', clearAll);
}

init();
