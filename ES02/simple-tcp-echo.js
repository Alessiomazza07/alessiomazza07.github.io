/**
 * Esempio 01 - Simple TCP Echo Server e Client
 * 
 * Dimostrazione base di:
 * - Creazione server TCP
 * - Connessione client TCP
 * - Echo pattern (server rimanda ciò che riceve)
 * - Gestione eventi base
 * 
 * Uso:
 *   node 01-simple-tcp-echo.js server
 *   node 01-simple-tcp-echo.js client
 */

const net = require('net');
const readline = require('readline');

const PORT = 3000;
const HOST = 'localhost';

// ============================================
// SERVER
// ============================================
function startServer() {
    const server = net.createServer((socket) => {
        console.log('✅ Client connesso:', socket.remoteAddress + ':' + socket.remotePort);
        
        // Echo: rimanda tutto ciò che riceve
        socket.on('data', (data) => {
            const message = data.toString().trim();
            console.log('📩 Ricevuto:', message);
            
            // Rimanda lo stesso messaggio
            socket.write('ECHO: ' + message + '\n');
        });
        
        socket.on('end', () => {
            console.log('❌ Client disconnesso');
        });
        
        socket.on('error', (err) => {
            console.error('❌ Errore socket:', err.message);
        });
    });
    
    server.listen(PORT, HOST, () => {
        console.log(`🚀 Server TCP in ascolto su ${HOST}:${PORT}`);
        console.log('In attesa di connessioni...\n');
    });
    
    server.on('error', (err) => {
        console.error('❌ Errore server:', err.message);
        process.exit(1);
    });
}

// ============================================
// CLIENT
// ============================================
function startClient() {
    const socket = net.connect({ port: PORT, host: HOST });
    
    socket.on('connect', () => {
        console.log(`✅ Connesso al server ${HOST}:${PORT}\n`);
        console.log('Digita un messaggio e premi INVIO (o "exit" per uscire):\n');
    });
    
    socket.on('data', (data) => {
        const response = data.toString().trim();
        console.log('📩', response);
        process.stdout.write('> ');
    });
    
    socket.on('end', () => {
        console.log('\n❌ Connessione chiusa dal server');
        process.exit(0);
    });
    
    socket.on('error', (err) => {
        console.error('❌ Errore:', err.message);
        process.exit(1);
    });
    
    // Interfaccia readline per input utente
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '> '
    });
    
    rl.prompt();
    
    rl.on('line', (line) => {
        const message = line.trim();
        
        if (message.toLowerCase() === 'exit') {
            console.log('👋 Chiusura connessione...');
            socket.end();
            rl.close();
            return;
        }
        
        if (message.length > 0) {
            socket.write(message + '\n');
        }
        
        rl.prompt();
    });
    
    rl.on('SIGINT', () => {
        console.log('\n👋 Interruzione...');
        socket.end();
        rl.close();
    });
}

// ============================================
// MAIN
// ============================================
const mode = process.argv[2];

if (mode === 'server') {
    startServer();
} else if (mode === 'client') {
    startClient();
} else {
    console.log('Uso:');
    console.log('  node 01-simple-tcp-echo.js server');
    console.log('  node 01-simple-tcp-echo.js client');
    process.exit(1);
}
