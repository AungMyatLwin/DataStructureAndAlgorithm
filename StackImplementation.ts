
type StackNode<T> = {
    value:T,
    next?: StackNode<T>
}


class StackImpl<T>{
    private head?:StackNode<T>
    private tail?:StackNode<T>
    lenght:number
    constructor(){
        this.lenght = 0;
        this.head = this.tail = undefined
    }

    push(item:T){
        let cur = this.head
        const element = {
            value:item
        } as StackNode<T>
        if(!this.head){
            this.head = this.tail = element
            this.lenght++
        }
        this.head=element
        console.log(cur)
        this.head.next = cur
        this.lenght++  
    }
    pop():T|undefined{
        let cur = this.head
        if(!this.head){
            return undefined
        }
        this.head = this.head?.next
        return cur?.value
    }

    peek():T|undefined{
        return this.head?.value
    }

    toArray(){
       let cur =  this.head
       let ar:T[]=[];
       while(cur){
        ar.push(cur.value)
        cur = cur.next
       }
       console.log(ar)
    }
}


const s = new StackImpl();
s.push(3);
s.push(6);
s.push(6);
s.toArray();
s.pop();
s.toArray();
console.log(s.peek())