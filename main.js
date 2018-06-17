//Variable Declaration 
//Kada deklarisemo varijablu sa var mozemo joj pristupiti bilo gdje, 
//Dok kada deklarisemo varijablu sa let kljucnom rijeclju mozemo joj pristupiti, 
//samo u bloku gdje je deklarisana.
var number = 13;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finaly' + i);
}
doSomething();
