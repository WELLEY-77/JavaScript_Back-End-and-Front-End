import { Component } from "./Component.js"

export class Form extends Component {
    constructor(parent, opitions) {
        super('form', parent, opitions)
    }

    addChildren(...children) {
        children.forEach(child => {
            this.getElement().appendChild(child.getElement())
        });
    }
}