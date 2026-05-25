// Aguarda o carregamento total do DOM antes de executar as ações
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       FUNCIONALIDADE 1: MODO ESCURO (DARK MODE)
       ========================================================================== */
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    
    // Ouvinte de evento de clique para alternar o tema
    btnDarkMode.addEventListener('click', () => {
        // Alterna a classe 'dark-theme' no elemento body
        document.body.classList.toggle('dark-theme');
        
        // Altera o texto e o ícone do botão dinamicamente com base no estado do tema
        if (document.body.classList.contains('dark-theme')) {
            btnDarkMode.textContent = '☀️ Modo Claro';
        } else {
            btnDarkMode.textContent = '🌙 Modo Escuro';