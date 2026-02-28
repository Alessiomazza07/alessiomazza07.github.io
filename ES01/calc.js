if(process.argv.length==5){
    let n1=parseFloat(process.argv[2]);
    let n2=parseFloat(process.argv[4]);
    let ris;
    switch(process.argv[3]){
        case 'add':
            ris=n1+n2;
            console.log(n1+'+'+n2+'='+ris);
            break;
        case 'sub':
            ris=n1-n2;
            console.log(n1+'-'+n2+'='+ris);
            break;
        case 'mul':
            ris=n1*n2;
            console.log(n1+'*'+n2+'='+ris);
            break;
        case 'div':
            if(n2!=0){
                ris=n1/n2;
                console.log(n1+'/'+n2+'='+ris);
            }else{
                console.log('Impossibile dividere per zero');
            }
            break;
        default:
            console.log('Operazione non riconosciuta');
    }
}
