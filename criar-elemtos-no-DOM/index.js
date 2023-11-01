function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-class'
    newLi.innerText = 'novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input-text'

    newLi.appendChild(newInput)
    ul.appendChild(newLi)

    console.log('<li> criado ')
}