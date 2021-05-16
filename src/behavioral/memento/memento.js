class EditorMemento {
    constructor(content) {
        this._content = content
    }

    getContent() {
        return this._content
    }
}

class Editor {
    constructor() {
        this._content = ''
    }

    type(words) {
        this._content = this._content + ' ' + words
    }

    getContent() {
        return this._content
    }

    save() {
        return new EditorMemento(this._content)
    }

    restore(memento) {
        this._content = memento.getContent()
    }
}
