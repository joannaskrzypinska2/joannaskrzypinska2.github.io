const setBackground = () => {
    console.log('Click :)');
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    console.log(p1);
    console.log(p2);

    p1.classList.add('bgr-red');
    p2.classList.add('bgr-yellow');
}

let button = document.getElementById('btnBackground');

button.addEventListener('click', setBackground);
