// loader.js

// Funzione che attende che il documento sia completamente caricato
document.addEventListener('DOMContentLoaded', function() {
    // 1. Iniziamo a recuperare il contenuto del file 'navbar.html'
    fetch('navbar.html')
        // 2. Quando la risposta arriva, leggiamo il contenuto come testo
        .then(response => {
            // Se la richiesta non è andata a buon fine (es. file non trovato)
            if (!response.ok) {
                console.error('Errore di rete o file non trovato. Stato:', response.status);
                throw new Error('Errore nel caricamento di navbar.html');
            }
            return response.text();
        })
        // 3. Una volta ottenuto il codice HTML come testo
        .then(html => {
            // Troviamo l'elemento segnaposto (placeholder) nel documento
            const placeholder = document.getElementById('navbar-placeholder');
            
            if (placeholder) {
                // Inseriamo il codice HTML della navbar all'interno del placeholder
                placeholder.innerHTML = html;
            } else {
                console.error('Elemento #navbar-placeholder non trovato nel body.');
            }
        })
        // 4. Gestione degli errori
        .catch(error => {
            console.error('Non è stato possibile caricare la Navbar:', error);
        });
});