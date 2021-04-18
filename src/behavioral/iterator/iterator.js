class Iterator {
    getNext() {

    }
    hasMore() {

    }
}

class List1 extends Iterator {
    constructor() {
        super();

        this.list = [];
    }
}

class List2 extends Iterator {
    constructor() {
        super();

        this.list = {};
    }
}
