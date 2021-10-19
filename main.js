

let stringa = revString("radaR");

function revString(str) {
    let splString = str.split("");
    //controlliamo se la stringa e stata inserita correttamente 
    console.log(splString);

    let revArray = splString.reverse();
    //controlliamo se la stringa è stata invertita
    console.log(revArray);

    return revArray.join("");

}

//controlliamo se la stringa e stata riassemblata
console.log(`${stringa}`);
