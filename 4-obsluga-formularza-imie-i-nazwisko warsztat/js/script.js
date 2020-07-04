console.log('dziala');

const submitForm = (e) => { //2.napisanie funkcji, która będzie obsługiwać zdarzenie
    e.preventDefault(); //4.Zablokuj jego domyślne działanie 
    console.log('Submit Form');
    let fname = document.querySelector('[name="fname"]');
    let lname = document.querySelector('[name="lname"]');

    console.log(`Imię: ${fname.value}, Nazwisko: ${lname.value}`);
}
let form = document.getElementById('form');  //1.ściagniecie formularza do scriptu
form.addEventListener('submit', submitForm); //3.rejestracja zdarzenia, które będzie obsługiwac funkcja
console.log(form);