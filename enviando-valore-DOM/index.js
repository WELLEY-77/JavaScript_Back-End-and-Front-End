function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        window.alert(`Usuario ${username} registrado!`)
    }else {
        window.alert(`As senhas não são iguais`)
    }
}