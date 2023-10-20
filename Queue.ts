type QueNode<T> = {
    value:T,
    next?:QueNode<T>;
}

export class QueueDSA<T>{
    private head?:QueNode<T>;
    private tail?:QueNode<T>;
    length:number;
    constructor(){
        this.head= this.tail =undefined
        this.length = 0;
    }
    enqueue(item:T){
        const enque = {
            value:item
        } as QueNode<T>
        this.length++
        if(!this.tail){
            this.tail = this.head = enque 
        }
        this.tail.next = enque
        this.tail = enque
    }
    deque():T|undefined{
        if(!this.head){
            return undefined
        }
        this.length--;
        const headElement = this.head
        this.head =this.head.next
        headElement.next=undefined
        if(this.length===0){
            this.tail = undefined
        }
        return headElement.value
    }
    peek():T|undefined{
        return this.head?.value
    }
}


const s = new QueueDSA()
s.enqueue(19)
s.enqueue(29)
s.deque()
console.log(s.peek())