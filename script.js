const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' da tag <html>
    document.documentElement.classList.toggle('dark-mode');
});