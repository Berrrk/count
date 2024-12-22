window.onload = function() {
    const startDate = new Date('2024-12-22T22:41:00'); // Başlangıç tarihi
    const counterElement = document.getElementById('counter');

    function updateCounter() {
        const now = new Date();
        const elapsedTime = now - startDate;

        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        counterElement.innerHTML = `${days} Gün <br> ${hours} Saat <br> ${minutes} Dakika <br> ${seconds} Saniye <br>`;
    }

    setInterval(updateCounter, 1000);
}
