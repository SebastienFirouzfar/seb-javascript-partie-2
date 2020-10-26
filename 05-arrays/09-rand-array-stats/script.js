/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function(){
    let tableau = []
    // genérer des nombres random
    for (let i=0; i<10;i++){
        tableau.push(Math.floor(Math.random()*100+1));
    }

    //générer l'affichage dans la page web 
    for (let j=1;j<11;j++){
        document.getElementById("n-"+j).innerHTML=tableau[j-1];
    } 

    document.getElementById("min").innerHTML=Math.min(...tableau);
    document.getElementById("max").innerHTML=Math.max(...tableau);
    let sum = tableau.reduce(function(a, b) { return a + b; }, 0);
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("average").innerHTML=sum/tableau.length;

    })

})();
