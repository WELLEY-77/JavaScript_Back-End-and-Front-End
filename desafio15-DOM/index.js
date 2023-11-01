function addContact() {
    const listContact = document.getElementById('contacts-list')

    const ul = document.createElement('ul')
    ul.className = 'lista'

    const nome = document.createElement('li')
    nome.className = 'nome'
    nome.innerText = 'Nome: '

    const input = document.createElement('input')
    input.type = 'text'
    input.className = 'text1'

    ul.appendChild(document.createElement('br'))

    // telefone
    const telefone = document.createElement('li')
    telefone.className = 'telefone'
    telefone.innerText = 'Telefone: '

    const inputTelefone = document.createElement('input')
    input.type = 'text'
    input.className = 'text2'
    
    nome.appendChild(input)
    telefone.appendChild(inputTelefone)
    ul.append(nome, telefone)

    listContact.append(ul)
}

function removeContact() {
    const contact = document.getElementById('contacts-list')

    const ul = document.getElementsByTagName('ul')

    contact.removeChild(ul[ul.length - 1])
}