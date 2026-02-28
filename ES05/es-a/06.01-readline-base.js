/*
 * Esempio 06.01 - Readline Base
 * 
 * Dimostra l'uso base del modulo readline per input utente.
 * 
 * Concetti dimostrati:
 * - Creazione interfaccia readline
 * - Uso di question() per input semplice
 * - Callback nidificati per domande sequenziali
 * - Gestione evento 'close'
 * - Chiusura corretta dell'interfaccia
 * 
 * Nota: Questo esempio mostra il pattern callback tradizionale.
 * Per un approccio più moderno, vedi 06.02-readline-promises.js
 */

const readline = require('readline');

/**
 * Crea l'interfaccia readline che connette stdin/stdout
 * - input: da dove leggere (tastiera)
 * - output: dove scrivere (console)
 */
const rl = readline.createInterface({
  input: process.stdin,   // Stream di input (tastiera)
  output: process.stdout  // Stream di output (console)
});

console.log('=== ESEMPIO BASE READLINE ===\n');

/**
 * question() fa una domanda e attende la risposta
 * Parametri:
 * - domanda: stringa da mostrare
 * - callback: funzione chiamata con la risposta
 * 
 * NOTA: question() è asincrono ma usa callback (no Promise)
 */
rl.question('Come ti chiami? ', (nome) => {
  // Questa funzione viene eseguita quando l'utente preme INVIO
  console.log(`Ciao, ${nome}!`);
  
  /**
   * Problema: domande sequenziali creano "callback hell"
   * Ogni domanda deve essere dentro la callback precedente
   * Per evitare questo, vedi l'esempio 06.02 con Promises
   */
  rl.question('Quanti anni hai? ', (eta) => {
    console.log(`${nome} ha ${eta} anni.`);
    
    /**
     * IMPORTANTE: Sempre chiudere l'interfaccia readline
     * altrimenti il programma rimarrà in attesa
     */
    rl.close();
  });
});

/**
 * Evento 'close' viene emesso quando:
 * - rl.close() viene chiamato
 * - Utente preme Ctrl+D (Unix) o Ctrl+Z seguito da INVIO (Windows)
 * - Lo stream di input termina
 */
rl.on('close', () => {
  console.log('\nInterfaccia chiusa. Arrivederci!');
  process.exit(0);  // Termina il processo Node.js
});
