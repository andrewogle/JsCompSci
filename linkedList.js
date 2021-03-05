class ListNode {
    constructor( value){
        this.value = value;
        this.next = null;
    }

    getValue(){
        return this.value;
    }

    getNext(){
        return this.next;
    }
    setNext(newNext){
        this.next = newNext;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    }

    addToHead(value){
        let node = new ListNode(value)
        if(this.head === null){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    contains(value){
        if(this.head === null){
            return false
        }
        let current = this.head;

        while(current !== null){
            if (current.getValue() === value){
                return true
            }else{
                current = current.getNext
            }
        }
    }
    print(){
        let currentNode = this.head
        console.log(currentNode.getValue())
        while(currentNode.next !== null){
            currentNode = currentNode.next
            console.log(currentNode.getValue())
        }
    }
}

const list = new LinkedList()

list.addToHead(1)
list.addToHead(2)
list.addToHead(3)
list.addToHead(4)
list.addToHead(5)
list.addToHead(7)

list.print()