function loadHTML(url, elementId) {
    fetch(url) // Richiede il contenuto del file
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Errore nel caricamento del componente:', error));
}

// Carica l'header e il footer quando la pagina è pronta
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('NAVBAR.HTML', 'navbar-placeholder');
    loadHTML('FOOTER.HTML', 'footer-placeholder');
});
