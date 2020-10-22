/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    for (let indice = 0; indice <= 50; indice++) {
        if (indice % 3 == 1) {
            alert(indice+" buzz"); 
        } else if (indice % 5 == 0) {
            alert(indice+" fizzbuzz"); 
        }else{
            alert(indice+" fizz"); 
        }
    }
    // your code here
})();
