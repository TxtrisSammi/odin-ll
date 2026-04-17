export default class LinkedList {
    constructor() {
        this.listHead = null;
        this.listTail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.listHead === null) {
            this.listHead = newNode;
            this.listTail = newNode // Best way I can think to do this lol
        } else {
            this.listTail.nextNode = newNode;
            this.listTail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        this.listHead = new Node(value, this.listHead)
        if (this.length === 0) {
            this.listTail = this.listHead;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        if (this.listHead !== null) {
            return this.listHead;
        } else {
            return undefined;
        }
    }

    tail() {
        if (this.listTail !== null) {
            return this.listTail;
        } else {
            return undefined;
        }

    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let temp = this.listHead;
        for (let i = 0; i < index; i++) {
            temp = temp.nextNode;
        }

        return temp.value;
    }

    pop() {
        if (this.listHead !== null) {
            const poppedValue = this.listHead;
            this.listHead = this.listHead.nextNode;
            this.length--;

            return poppedValue;
        } else {
            return undefined;
        }
    }

    contains(value) {
        let temp = this.listHead;

        while (temp !== null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let temp = this.listHead;

        for (let i = 0; i < this.length; i++) {
            if (temp.value === value) {
                return i;
            }
            temp = temp.nextNode;
        }
        return -1; // value not found
    }

    toString() {
        let temp = this.listHead;
        let returnString = '';

        while (temp !== null) {
            returnString += `( ${temp.value} ) -> `;
            temp = temp.nextNode
        }

        returnString += 'null';

        return returnString;
    }

    // Extra Credit
    // I know it said to throw new RangeError for values greater than or equal to 
    // the list length, however, I can just handle it for index equal to list length
    // by using the append function, still throws error for index > length or < 0
    // Extra Credit p2
    insertAt(index, ...values) {
        if (index < 0 || index > this.length) {
            throw RangeError;
        }

        let temp = this.listHead;

        if (index === 0) {
            for (let i = values.length - 1; i >= 0; i--) {
                this.prepend(values[i]);
            }
        } else if (index === this.length) {
            for (const value of values) {
                this.append(value);
            }
        } else {
            for (let i = 0; i < index - 1; i++) {
                temp = temp.nextNode; // gets node 1 before the index
            }

            for (const value of values) {
                const newNode = new Node(value);
                const nextNode = temp.nextNode;

                temp.nextNode = newNode;
                temp = newNode;
                temp.nextNode = nextNode;

                this.length++;
            }
        }
        return;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new RangeError;
        }

        if (index === 0) {
            this.listHead = this.listHead.nextNode;
            if (this.length === 1) {
                this.listTail = this.null; // if index is 0 and length is one (i.e. if list becomes empty)
            }
        } else {
            let temp = this.listHead;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.nextNode;
            }

            temp.nextNode = temp.nextNode.nextNode;

            if (index === this.length - 1) {
                this.listTail = temp;
            }
        }
        this.length--;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}