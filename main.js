

let stringaIniziale = prompt(revString(""));

function revString(str) {
    let splString = str.split("");
    //controlliamo se la stringa e stata inserita correttamente 
    //console.log(splString);

    let revArray = splString.reverse();
    //controlliamo se la stringa è stata invertita
    //console.log(revArray);

    return revArray.join("");

}

//controlliamo se la stringa e stata riassemblata


let stringaFinale = revString(stringaIniziale);
//console.log(`${stringaFinale}`);

if (stringaFinale && stringaIniziale) {
    document.querySelector(".text").innerHTML = `La parola inserita è ${stringaIniziale} ed è stata cambiabiata correttamente in ${stringaFinale}`;
} else stringaFinale || stringaIniziale; {
    document.querySelector(".text").innerHTML = `Spiacente la parola inserita è ${stringaIniziale} , voltandola non combaciano ${stringaFinale}`;
}