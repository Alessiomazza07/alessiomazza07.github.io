// JavaScript di esempio
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript caricato correttamente!');
    
    // Aggiunge data e ora corrente
    const now = new Date();
    const timeString = now.toLocaleString('it-IT');
    
    const footer = document.querySelector('body');
    if (footer) {
        const timeDiv = document.createElement('div');
        timeDiv.innerHTML = '<hr><small>Pagina caricata il: ' + timeString + '</small>';
        footer.appendChild(timeDiv);
    }
});
