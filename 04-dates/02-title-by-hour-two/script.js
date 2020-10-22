/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let x = []
    var heure = new Date().getHours(); 
    var minute = new Date().getMinutes(); 

    if (heure === 17 && minute === 30) {
        x = "hello"
    } else {
        x = "Good evening"
    }
    document.getElementById("target").innerHTML = (x)

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
