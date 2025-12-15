function loadHTML(url, elementId) {
    const cacheBuster = new Date().getTime();
    const urlWithBuster = `${url}?v=${cacheBuster}`;
    fetch(urlWithBuster) // Richiede il contenuto del file
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
