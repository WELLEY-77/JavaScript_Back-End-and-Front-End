import { Component } from "./Component.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";

const title = new Component('las', 'qww', {textContent:'Ola mundo'})
console.log(title)
title.render()

title.tag = 'h3'

title.build().render()

const form = new Form('body')

const label = Label('Nome', form, {hmlFor: 'nameIput'})
const input = Input(form, {id: 'nameIput', name: 'name'})

form.render()
label.render()

form.addChildren(input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de nascimento', form, {htmlfor:'brithday'}),
    new Input(form, {id:'brytdayklm', name:'britday'})
)

