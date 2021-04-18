class Command {
    execute() {

    }
}

class SimpleCommand extends Command {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }

    execute() {
        console.log('Executing SimpleCommand ' + (this.x + this.y));
    }
}

class Invoker {
    setOnBefore(onBefore) {
        this.onBefore = onBefore;
    }

    setOnAfter(onAfter) {
        this.onAfter = onAfter;
    }

    click() {

        if (this.isCommand(this.onBefore)) {
            console.log('onBefore');
            this.onBefore.execute();
        }

        console.log('onClick business logics...');

        // Execute command
        if (this.isCommand(this.onAfter)) {
            console.log('onAfter');
            this.onAfter.execute();
        }
    }

    isCommand(obj = {}) {
        return !!obj.execute;
    }
}

////////////////////

const invoker = new Invoker();

invoker.setOnBefore(new SimpleCommand(1, 2));
invoker.setOnAfter(new SimpleCommand(3, 4));

invoker.click();