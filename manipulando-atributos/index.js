const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', ()=> {
    input.value = input.value == '' ? 'ola mundo' : ''
     
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

// Mudar o type

document.getElementById('type').addEventListener('click', ()=> {
    // input.type = input.type == 'text' ? 'radio' :  'text'
    input.setAttribute('type', 'radio')
})

// mudar o placeholder

document.getElementById('placeholder').addEventListener('click', ()=> {
    input.placeholder = 'Digite algo'
})

// desabilitar/abilitar

document.getElementById('disable').addEventListener('click', ()=> {
    // input.setAttribute('disabled', !input.disabled)
    input.disabled = input.disabled == true ? false : true
})

// mostrar data

document.getElementById('data').addEventListener('click', ()=> {
    const data = input.dataset.dataSomethingElse
    console.log(`O valor do atributo data-something-else é ${data}`)
    input.dataset.dataSomethingElse = 'Algum outro valor'
    console.log(`O valor do atributo data-something-else agora é : ${input.dataset.dataSomethingElse}`)
})