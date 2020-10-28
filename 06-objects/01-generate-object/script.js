/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let infomation = {
            firstName : "Sebastien",
            lastName : "Firouzfar",
            age : 2020 - 1993,
            country : "Belgique", 
            city : "Bruxelles"
        }; 
        alert(infomation.firstName+ " "+ infomation.lastName+ " "+infomation.age+ " "+infomation.country+ " "+ infomation.city)
    })
})();
