/*
 * ESEMPIO 02.02 - Lettura Asincrona con Callback
 * 
 * Questo esempio mostra come leggere un file in modo ASINCRONO usando readFile()
 * con una funzione di callback.
 * 
 * VANTAGGI:
 * - Non blocca l'esecuzione del programma
 * - Permette ad altre operazioni di procedere mentre il file viene letto
 * - Ideale per applicazioni con I/O intensivo
 * 
 * La callback segue il pattern Error-First: il primo parametro è sempre l'errore
 * (null se non ci sono errori), seguito dai dati richiesti.
 */

const fs = require('fs');

console.log('Inizio lettura file...');

// readFile() è asincrono: il codice continua mentre il file viene letto
fs.readFile('file.txt', 'utf8', (err, data) => {
  // Questa funzione (callback) viene chiamata quando la lettura è completata
  
  if (err) {
    // Gestione errore: file non trovato, permessi insufficienti, ecc.
    console.error('Errore durante la lettura del file:', err.message);
    return; // Importante: esci dalla callback in caso di errore
  }
  
  // Se arriviamo qui, la lettura è andata a buon fine
  console.log('Contenuto del file:');
  console.log(data);
  console.log('Lettura completata');
});

// Questa riga viene eseguita IMMEDIATAMENTE, prima che il file sia letto!
console.log('La lettura è in corso in background...');

// Simula altre operazioni che possono procedere in parallelo
setTimeout(() => {
  console.log('Altre operazioni possono procedere mentre il file viene letto');
}, 100);
