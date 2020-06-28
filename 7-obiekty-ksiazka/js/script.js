// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke"
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.ksiazkaTytul = tytul;
        this.ksiazkaAutor = autor;
        this.ksiazkaPrzeczytana = przeczytana;
        // pola obiektów (klasy) --> ksiazkaAutor
        // parametr --> autor

    }

    // napisz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana."
    opiszKsiazke() {
        if (this.ksiazkaPrzeczytana) {
            return 'Książka ma tytuł ' + this.ksiazkaTytul + ', autorem jest ' + this.ksiazkaAutor + ' i została przeczytana.';
        } else {
            return 'Książka ma tytuł ' + this.ksiazkaTytul + ', autorem jest ' + this.ksiazkaAutor + ' i nie została przeczytana.';
        }
    }
}

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana
let pierwszaKsiazka = new Ksiazka('Empezar de Nuevo', 'Cristina Baixauli', false);
let drugaKsiazka = new Ksiazka('Blondynka na językach', 'Beata Pawlikowska', false);
let trzeciaKsiazka = new Ksiazka('Zwykły człowiek', 'Paul Rusesabagina', true);

console.log(pierwszaKsiazka.ksiazkaTytul);
// Dopisanie metody do 3 instancji
pierwszaKsiazka.opiszKsiazke();
drugaKsiazka.opiszKsiazke();
trzeciaKsiazka.opiszKsiazke();

// stwórz nową tablicę globalną i dodaj do niej te 3 książki
let tablicaKsiazki = [pierwszaKsiazka, drugaKsiazka, trzeciaKsiazka];

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy)
function iloscPrzeczytanych(tablicaKsiazki) {
    let suma = 0;

    for (let i = 0; i < tablicaKsiazki.length; i++) {
        if (tablicaKsiazki[i].ksiazkaPrzeczytana) {
            suma += 1;
        }
        console.log(tablicaKsiazki[i].opiszKsiazke());
    }
    console.log('Ilość przeczytanych książek wynosi: ' + suma);
}

//wywołanie funkcji
iloscPrzeczytanych(tablicaKsiazki);
