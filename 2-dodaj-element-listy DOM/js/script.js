const addItem = () => {
    let countLi = document.getElementsByClassName('item').length;
    console.log(countLi);
    let liElement = document.createElement('li');
    liElement.innerText = 'Item' + ' ' + (countLi + 1);
    liElement.classList.add('item');
    document.querySelector('ul').appendChild(liElement);
}


let btn = document.getElementById('button');
btn.addEventListener('click', addItem);
// console.log(btn);