/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    var selectDay = document.getElementById("dob-day").value;
    var selectMonth = document.getElementById("dob-month").value;
    var selectYear = document.getElementById("dob-year").value;
    var calculYear = 2020 - selectYear;
    document.getElementById("run").addEventListener("click", function () {
        alert("Jours "+selectDay + "  " + " Moins "+selectMonth + "  " + " age  "+calculYear)
        // your code here
    })

})();
