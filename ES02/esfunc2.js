const hoFinito = () => {console.log("Lavoro completato!");};
const nonRiesco = () => {console.log("Non sono capace!");};
const pippo = (callback)=>{
    for(let i=1;i<=10;i++) console.log(i);
    callback()
}
pippo(hoFinito)
pippo(nonRiesco)
