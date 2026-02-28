/*
 * ESEMPIO 03.01 - Server HTTP Base
 * 
 * Questo esempio mostra come creare un server HTTP semplice usando il modulo http di Node.js.
 * 
 * CONCETTI CHIAVE:
 * - http.createServer(): Crea un'istanza del server
 * - Request object (req): Contiene informazioni sulla richiesta del client
 * - Response object (res): Usato per inviare la risposta al client
 * - Status code: Codice di stato HTTP (200 = OK, 404 = Not Found, 500 = Error, ecc.)
 * - Headers: Metadati della risposta (Content-Type, Cache-Control, ecc.)
 * 
 * QUANDO USARE:
 * - Prototipazione rapida di un server web
 * - Microservizi semplici
 * - API REST minimali
 * - Learning e testing
 * 
 * NOTA: Per applicazioni production, considera framework come Express.js
 */

const http = require('http');

// ============================================
// ESEMPIO 1: SERVER HTTP MINIMALE
// ============================================

console.log('=== SERVER HTTP MINIMALE ===\n');

/**
 * Crea un server HTTP che risponde a tutte le richieste
 * 
 * La callback viene eseguita per ogni richiesta ricevuta
 * @param {http.IncomingMessage} req - Oggetto richiesta
 * @param {http.ServerResponse} res - Oggetto risposta
 */
const server = http.createServer((req, res) => {
  // Imposta status code 200 (OK)
  res.statusCode = 200;
  
  // Imposta il tipo di contenuto della risposta
  // text/html indica che la risposta è HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Invia il corpo della risposta e chiude la connessione
  res.end('<h1>Hello, World!</h1><p>Benvenuto sul server HTTP base</p>');
});

// ============================================
// AVVIO SERVER
// ============================================

const PORT = 3001;
//const HOST = 'localhost'; // Ascolta solo su localhost (non accessibile da rete esterna)
const HOST = '0.0.0.0'; // Ascolta su tutte le interfacce di rete (accessibile da rete esterna)

/**
 * Avvia il server sulla porta specificata
 * La callback viene eseguita quando il server è pronto
 */
server.listen(PORT, HOST, () => {
  console.log(`✓ Server HTTP in esecuzione su http://${HOST}:${PORT}/`);
  console.log('\nPremi Ctrl+C per fermare il server');
  console.log(`\n📝 Apri il browser e visita https://w4s-3001.filippobilardo.it/\n`);
});

// ============================================
// GESTIONE EVENTI SERVER
// ============================================

/**
 * Evento 'connection': Emesso quando una nuova connessione TCP viene stabilita
 */
server.on('connection', (socket) => {
  console.log(`🔌 Nuova connessione TCP da ${socket.remoteAddress}:${socket.remotePort}`);
});

/**
 * Evento 'request': Emesso per ogni richiesta HTTP ricevuta
 * (alternativa a passare callback in createServer)
 */
server.on('request', (req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`📥 [${timestamp}] ${req.method} ${req.url} da ${req.socket.remoteAddress}`);
});

/**
 * Evento 'error': Gestisce errori del server
 */
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Errore: La porta ${PORT} è già in uso`);
    console.error('   Prova a chiudere l\'altra applicazione o usa una porta diversa');
  } else {
    console.error(`❌ Errore server: ${err.message}`);
  }
  process.exit(1);
});

/**
 * Evento 'close': Emesso quando il server viene chiuso
 */
server.on('close', () => {
  console.log('\n🛑 Server HTTP chiuso');
});

// ============================================
// GRACEFUL SHUTDOWN
// ============================================

/**
 * Gestisce la chiusura ordinata del server
 * Questo permette di completare le richieste in corso prima di terminare
 */
process.on('SIGINT', () => {
  console.log('\n\n⏳ Ricevuto SIGINT, chiusura in corso...');
  
  // Smette di accettare nuove connessioni
  server.close(() => {
    console.log('✓ Tutte le connessioni chiuse');
    process.exit(0);
  });
  
  // Timeout di sicurezza: forza la chiusura dopo 10 secondi
  setTimeout(() => {
    console.error('❌ Timeout: forzo la chiusura del server');
    process.exit(1);
  }, 10000);
});

// ============================================
// INFORMAZIONI UTILI
// ============================================

console.log('ℹ️  INFORMAZIONI:');
console.log('   - Ogni richiesta HTTP è indipendente (stateless)');
console.log('   - Il server può gestire migliaia di richieste concorrenti');
console.log('   - res.end() DEVE essere chiamato per completare la risposta');
console.log('   - Se non chiami res.end(), il client rimarrà in attesa\n');
