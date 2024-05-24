document.getElementById('menuToggle').addEventListener('change', function () {
    const navbar = document.getElementById("navbar");
    const iconopen = document.getElementById("open");
    const iconclose = document.getElementById("close");
    navbar.classList.toggle('open', this.checked);
    iconclose.classList.toggle('open', !this.checked);
    iconopen.classList.toggle('open', this.checked);
});