/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //La méthode addEventListener() attache un gestionnaire d'événements à l'élément spécifié.
    //tag.setAttribute("id", "myID") est équivalent au code HTML <tag id="myID"> 
    document.getElementById("red").addEventListener("click", function(){
        document.body.setAttribute("style", "background-color : red"); 
    })

    document.getElementById("green").addEventListener("click", function(){
        document.body.setAttribute("style", "background-color : green"); 
    })

    document.getElementById("yellow").addEventListener("click", function(){
        document.body.setAttribute("style", "background-color : yellow"); 
    })

    document.getElementById("blue").addEventListener("click", function(){
        document.body.setAttribute("style", "background-color : blue"); 
    })
    // your code here
})();

