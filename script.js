/* function add (a,b) {
     if (typeof a||b !== number ) {
        return 'nieporawny parametr'}
    else return a + b || a || b 
} */

//////////////testy jednostkowe

/* function add (a, b) {
   
    if (!b) {return a}
    else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'zle'
    }
    else if(b) {return a + b }
}


console.log("add  2 + 5 should return 7", add(2,5) === 7);

console.log('if not number should return żle', add('t', 'r') === 'zle' );

console.log(add(5) === 5);
 */


/////////////TDD

function multi(a,b){
    if (!b) {return a}
    else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'zle'
    }
   else return a*b
}

function sub(a,b){
    if (!b) {return a}
    else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'zle'
    }
    else return a-b
}

function div(a,b){
    if (!b) {return a}
    else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'zle'
    }
    else return a/b
}

console.log('multi for 3*3 should return 9', multi(3, 3) === 9);
console.log('multi with one param should return its value', multi(3) === 3);
console.log('multi with a param whish is not number should return "zle', multi('3', 3) === 'zle');


console.log('sub  25-5 should return 20', sub(25,5) === 20);
console.log('sub with one param should return its value', multi(3) === 3);
console.log('sub with a param whish is not number should return "zle', multi('3', 3) === 'zle');


console.log('div 10/5 should return 2', div(10, 5) === 2 )
console.log('div with one param should return its value', multi(3) === 3);
console.log('div with a param whish is not number should return "zle', multi('3', 3) === 'zle');









