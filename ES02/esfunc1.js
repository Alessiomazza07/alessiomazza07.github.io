let array = [];
const somma = (a,b) => a+b;
const sottrai = (a,b) => a-b;
const moltiplica = (a,b) => a*b;
const dividi = (a,b) => (b!=0) ? a/b : 'Impossibile dividere per 0';
array.push(somma);
array.push(sottrai);
array.push(moltiplica);
array.push(dividi);
let a=10, b=2;
array.forEach(op => {
    console.log(op.name + ": " + op(a,b));
});
