/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
     document.getElementById("run").addEventListener("click", function () {
         let year = document.getElementById("year").value;
        if(year === "2020"){
            alert("vendredi 13 mars 2020 et vendredi 13 novembre 2020")
        }if(year === "2021"){
            alert("vendredi 13 août 2021"); 
        } if(year === "2022"){
            alert("vendredi 13 mai 2022"); 
        }
     })

    // your code here

})();
