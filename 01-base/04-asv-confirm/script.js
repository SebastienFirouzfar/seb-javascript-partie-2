/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let confirmer = " ";
    let confirmation = false;
    let age = prompt("Quel age avez-vous? ");
    let sexe = prompt("Quel est votre sexe ? ");
    let ville = prompt("Vous vivez dans quelle ville ?");
    confirmer = window.prompt(age+ " "+sexe+ " "+ ville+ " est-ce bien ça  ? "); 
    while (confirmer != "oui") {
        age = prompt("Quel age avez-vous? ");
        sexe = prompt("Quel est votre sexe ? ");
        ville = prompt("Vous vivez dans quelle ville ?");
        confirmer =  window.prompt(age+ " "+sexe+ " "+ ville+ " est-ce bien ça ? " );
        if(confirmer == "oui"){
            confirmation = true; 
        }
    }



    // your code here

})();
