type QueueNode<T> = {
    value:T,
    next?:QueueNode<T>
}

export class Queue<T>{
    private head?:QueueNode<T>;
    private tail?:QueueNode<T>;
    length:number;
    constructor(){
        this.head=this.tail = undefined
        this.length=0
    }
    enqueue(item:T){
        const node = {
            value:item
        } as QueueNode<T>
        this.length++
        if(!this.tail){
            this.tail=this.head = node   
        }
        this.tail!.next = node
        this.tail = node
    }
    deque():T|undefined{
        if(!this.head){
            return undefined
        }
        this.length--
        const head = this.head
        this.head = this.head.next
        head.next = undefined
        return head.value
    }    
    peek():T|undefined{
        return this.head?.value
    }
}


const q = new Queue<number>()
q.enqueue(3)
q.enqueue(2)
q.enqueue(2)
q.deque()
console.log(q.peek())
console.log(q)