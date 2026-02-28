/*
 * ESEMPIO 02.01 - Lettura Sincrona di File
 * 
 * Questo esempio dimostra come leggere un file in modo SINCRONO usando readFileSync().
 * 
 * IMPORTANTE: Le operazioni sincrone BLOCCANO l'esecuzione del programma fino al 
 * completamento dell'operazione. Questo può essere problematico in applicazioni 
 * con molte richieste concorrenti.
 * 
 * QUANDO USARE: 
 * - Script di inizializzazione
 * - Tool da riga di comando
 * - Quando è necessario leggere file all'avvio prima di procedere
 * 
 * QUANDO NON USARE:
 * - Server web con richieste concorrenti
 * - Operazioni su file di grandi dimensioni
 */

const fs = require('fs');

try {
  // readFileSync() legge l'intero file e restituisce il contenuto
  // 'utf8' specifica l'encoding per ottenere una stringa (non un Buffer)
  const data = fs.readFileSync('file.txt', 'utf8');
  
  console.log('Contenuto del file:');
  console.log(data);
  console.log('Lettura completata');
  
} catch (err) {
  // Gestione degli errori: file non trovato, permessi insufficienti, ecc.
  console.error('Errore durante la lettura del file:', err.message);
}

// Questa riga viene eseguita DOPO che il file è stato letto completamente
console.log('Programma terminato');
