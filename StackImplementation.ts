
type StackNode<T> = {
    value:T,
    prev?: StackNode<T>
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
        const node = {
            value:item
        } as StackNode<T>
        this.lenght++
        if(!this.head){
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
    }
    pop():T|undefined{
        this.lenght = Math.max(0, this.lenght-1)
        if(this.lenght===0){
            const cur = this.head
            this.head = undefined
            return cur?.value
        }
        const cur = this.head as StackNode<T>
        this.head = cur.prev
        return cur.value
    }

    peek():T|undefined{
        return this.head?.value
    }

    toArray(){
       let cur =  this.head
       let ar:T[]=[];
       while(cur){
        ar.push(cur.value)
        cur = cur.prev
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