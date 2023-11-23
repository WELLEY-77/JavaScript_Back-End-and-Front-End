function useLigthTheme() {
    document.body.style.backgroundColor = '#f1f5f9'
    document.body.style.color = '#212529'
}
// Feito com uma funçao fora do evento
document.getElementById('ligthBtn').addEventListener('click', useLigthTheme)


// Feito com uma funçao anonima para testar mais meus conhecimentos
document.getElementById('darkBtn').addEventListener('click', () => {
    document.body.style.backgroundColor = '#212529'
    document.body.style.color = '#f1f5f9'
})

// Alterando o botao de escuro/claro com uma função anonima
document.getElementById('switchBtn').addEventListener('click', () => {
    document.body.classList.toggle('isLigth')
    document.body.classList.toggle('isDark')
})