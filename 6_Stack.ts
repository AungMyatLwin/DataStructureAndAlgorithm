type StackNode<T> = {
    value:T,
    prev?:StackNode<T>
}


class Stack<T>{
    private head?:StackNode<T>
    length:number;
    constructor(){
        this.head = undefined
        this.length =0
    }

    push(item:T):void{
        const node = {
            value:item
        } as StackNode<T>
        this.length++
        if(!this.head){
            this.head = node
            return
        }
        node.prev = this.head
        this.head = node
    }
    pop():T|undefined{
        this.length = Math.max(0, this.length-1)
        if(this.length===0){
            const cur = this.head
            this.head = undefined
            return cur?.value
        }
        const head = this.head 
        this.head = head?.prev
        return head?.value
    }
    peek():T|undefined{
        return this.head?.value
    }
}