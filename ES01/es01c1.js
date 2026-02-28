// Il primo elemento è il percorso di Node.js
console.log('Percorso di Node:', process.argv[0]);

// Il secondo elemento è il nome del file script
console.log('Nome dello script:', process.argv[1]);

// Gli argomenti passati dalla riga di comando iniziano dal terzo elemento
console.log('Primo parametro:', process.argv[2]);
console.log('Secondo parametro:', process.argv[3]);
console.log('Terzo parametro:', process.argv[4]);

//Numero totale di argomenti (inclusi percorso node e script)
console.log('Numero totale di argomenti:', process.argv.length);

// Esempio di utilizzo: node parametri.js arg1 arg2 arg3
