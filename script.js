document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const options = { weekday: 'long' };
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
    }

    updateTime();
    setInterval(updateTime, 1000);
});
