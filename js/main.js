

const listItems = document.querySelectorAll('.showcase .menu li a');

function selectListItem(e){
    unselectItem();
    this.classList.add('selected-page');
}

function unselectItem(){
    listItems.forEach(item => item.classList.remove('selected-page'));
}
listItems.forEach(item => item.addEventListener('click',selectListItem));