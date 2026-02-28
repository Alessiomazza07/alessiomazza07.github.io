/**
 * Esempio 02 - UDP Echo Server e Client
 * 
 * Dimostrazione di:
 * - Differenza tra TCP e UDP
 * - Server UDP (connectionless)
 * - Client UDP
 * - Invio datagrammi
 * 
 * Uso:
 *   node 02-udp-echo.js server
 *   node 02-udp-echo.js client
 */

const dgram = require('dgram');
const readline = require('readline');

const PORT = 3001;
const HOST = 'localhost';

// ============================================
// SERVER UDP
// ============================================
function startServer() {
    const server = dgram.createSocket('udp4');
    
    server.on('listening', () => {
        const address = server.address();
        console.log(`🚀 Server UDP in ascolto su ${address.address}:${address.port}`);
        console.log('In attesa di datagrammi...\n');
    });
    
    server.on('message', (msg, rinfo) => {
        const message = msg.toString().trim();
        console.log(`📩 Ricevuto da ${rinfo.address}:${rinfo.port}: ${message}`);
        
        // Echo: rimanda lo stesso messaggio
        const response = Buffer.from('ECHO: ' + message);
        server.send(response, rinfo.port, rinfo.address, (err) => {
            if (err) {
                console.error('❌ Errore invio:', err.message);
            }
        });
    });
    
    server.on('error', (err) => {
        console.error('❌ Errore server:', err.message);
        server.close();
    });
    
    server.bind(PORT, HOST);
}

// ============================================
// CLIENT UDP
// ============================================
function startClient() {
    const client = dgram.createSocket('udp4');
    
    console.log(`📡 Client UDP pronto per inviare a ${HOST}:${PORT}\n`);
    console.log('Digita un messaggio e premi INVIO (o "exit" per uscire):\n');
    
    client.on('message', (msg, rinfo) => {
        const response = msg.toString().trim();
        console.log('📩', response);
        process.stdout.write('> ');
    });
    
    client.on('error', (err) => {
        console.error('❌ Errore client:', err.message);
        client.close();
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
            console.log('👋 Chiusura client...');
            client.close();
            rl.close();
            process.exit(0);
            return;
        }
        
        if (message.length > 0) {
            const buffer = Buffer.from(message);
            client.send(buffer, PORT, HOST, (err) => {
                if (err) {
                    console.error('❌ Errore invio:', err.message);
                }
            });
        }
        
        rl.prompt();
    });
    
    rl.on('SIGINT', () => {
        console.log('\n👋 Interruzione...');
        client.close();
        rl.close();
        process.exit(0);
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
    console.log('  node 02-udp-echo.js server');
    console.log('  node 02-udp-echo.js client');
    process.exit(1);
}
