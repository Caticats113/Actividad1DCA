import getRandomFruitsName from 'random-fruits-name'
console.log(getRandomFruitsName()) // Apple - English is default language

var random_name = require('node-random-name');
console.log(random_name()); // -> "Brittny Kraska"

const text = document.getElementById('text');

function generate(){
    let name = random_name();
    let fruit = getRandomFruitsName();

    text.innerHTML = name + "'s favourite fruit is " + fruit;
    console.log("hola")
}

