function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value 

    const confirmation = confirm(`Deseja adicionar o jogador: ${name}, posição: ${position}`)

    if(confirmation) {
        const teamList = document.getElementById('team-list')

        const player = document.createElement('li')
        player.id = 'player' + number
        player.innerText = `Jogador: ${name} | Posição: ${position} | Número: ${number} `

        teamList.appendChild(player)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player' + number)

    const confirmation = confirm(`Deseja remover o jogador ${playerToRemove.innerText} ?`)

    if (confirmation) {
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ''
    }
}