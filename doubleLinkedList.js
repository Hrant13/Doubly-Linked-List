class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        newNode.next = null;
        this.length++;
    }

    print() {
        let cur = this.head;
        while(cur !== null) {
            console.log(cur.value)
            cur = cur.next;
        }
    }

    count() {
        return this.length;
    }

    pop() {
        if(this.head === null) {
            return undefined;
        }
        else if(this.length === 1) {
            let returnValue = this.head.value;
            this.head = null;
            this.tail = null;
            this.length--;
            return returnValue;
        }
        let returnValue = this.head.value;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return returnValue;
    }
      
    unshift(value) {
        if(this.head === null) {
            this.push(value);
        }
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    
    shift() {
        if(this.head === null) {
            return undefined;
        }
        else if (this.length === 1) {
           return  this.pop();
        }
        let returnValue = this.head.value;
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
        return returnValue;
    }

    delete(value) {
        if(this.head === null) {
            return;
        }
        let cur = this.head;
        while(cur !== null) {
            if (cur.value === value) {
                if(cur === this.head){
                    this.shift();
                }
                else if(cur === this.tail){
                    this.pop();
                }
                else {
                    cur.prev.next = cur.next;
                    cur.next.prev = cur.prev;
                    this.length--;
                }
                break;
            }
            cur = cur.next;
        }
    }
};

let node = new DoubleLinkedList;
node.push(1);
node.push(5)
node.push(7);
node.push(5);
node.push(6);
node.delete(7);
node.delete(5);
node.print();
console.log(node.count());



