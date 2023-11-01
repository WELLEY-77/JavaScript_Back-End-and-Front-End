function show() {
    const elemnt1 = document.getElementById('contact-list')
    console.log(elemnt1)
    
    const classElemnt = document.getElementsByClassName('contact-input')
    console.log(classElemnt)
    
    const nameElement = document.getElementsByName('contact3')
    console.log(nameElement)
    
    const queryAllElement = document.querySelectorAll('li')
    console.log(queryAllElement)
    
    const queryElement = document.querySelector('#contact-list > li > label')
    console.log(queryElement)
}