class ListNode {
    constructor( value){
        this.value = value;
        this.next = null;
        this.prev = null;
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

class DoubleLinkedList{
    constructor(node = null){
        this.head = node;
        this.tail = node;
    }

    addToHead(value){
        let node = new ListNode(value)
        if(this.head === null && this.tail === null){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
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
    delete(value){
        let current = this.head
        if(current === null){
          console.log("value not in list")
        }
        
      while(current !== null ){
        if(current.value === value){
            if(current.prev){
                current.prev.next = current.next
            }
            if(current.next){
                current.next.prev = current.prev
            }
            console.log("The following node has been deleted! :", current.value)
            break
        }else{
            current = current.next

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
    printHead(){
        console.log("this is the head :", this.head.value)
    }
}


const list = new DoubleLinkedList()

list.addToHead(1)
list.addToHead(2)
list.addToHead(3)
list.addToHead(4)
list.addToHead(5)
list.addToHead(6)

list.print()
list.delete(5)
list.printHead()
console.log("this is the tail :", list.tail.value)
list.print()