window.onload = function() {
    const startDate = new Date('2023-01-01T00:00:00'); // Başlangıç tarihi
    const counterElement = document.getElementById('counter');

    function updateCounter() {
        const now = new Date();
        const elapsedTime = now - startDate;

        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        counterElement.innerHTML = `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;
    }

    setInterval(updateCounter, 1000);
}
