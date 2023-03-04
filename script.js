const formInput = document.querySelector('form input');
const addBtn = document.querySelector('.display__clear');


function appendWord(e) {
    e.preventDefault();

    const item = formInput.value;
    console.log(formInput.value);

    const newWord = document.createElement('li');
    newWord.className = 'mini-section__padding';
    
    const createTitle = createTextElement(item);
    newWord.appendChild(createTitle);

    const createTitlIcon = createIcon("fa-solid fa-trash-can");
    newWord.appendChild(createTitlIcon);
    
    const mainList = document.querySelector('ul');
    mainList.appendChild(newWord);

    formInput.value = '';
}

function createTextElement(arg) {
    const textElement = document.createElement('h4');
    textElement.textContent = arg;
    return textElement;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
function init() {
    addBtn.addEventListener('click', appendWord);
}

init();
