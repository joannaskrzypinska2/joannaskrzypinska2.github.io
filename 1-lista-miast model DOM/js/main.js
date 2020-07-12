let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

let list = document.createElement('ol');

cities.forEach(city => {
    let liElement = document.createElement('li');
    liElement.class = 'city';
    liElement.innerText = city;
    list.appendChild(liElement);
}
    )

    document.body.appendChild(list);