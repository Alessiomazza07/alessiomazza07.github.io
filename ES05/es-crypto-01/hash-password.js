// hash-password.js
const crypto = require('crypto');

/**
 * Genera hash SHA-256 di una password
 * @param {string} password - Password da hashare
 * @returns {string} Hash in formato esadecimale
 */
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);  // Aggiungi dati da hashare
  return hash.digest('hex');  // Ottieni hash finale
}

// Test
const password1 = 'mySecretPassword123';
const password2 = 'mySecretPassword123';
const password3 = 'differentPassword';

const hash1 = hashPassword(password1);
const hash2 = hashPassword(password2);
const hash3 = hashPassword(password3);

console.log('Password 1:', password1);
console.log('Hash 1:    ', hash1);
console.log();

console.log('Password 2:', password2);
console.log('Hash 2:    ', hash2);
console.log('Uguali?    ', hash1 === hash2);
console.log();

console.log('Password 3:', password3);
console.log('Hash 3:    ', hash3);
console.log('Diverso?   ', hash1 !== hash3);
