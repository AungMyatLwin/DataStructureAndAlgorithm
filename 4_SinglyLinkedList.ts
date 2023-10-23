
type LinkedListNode<T> = {
    value:T,
    next?:LinkedListNode<T>
}

export class SinglyList<T> {
    public length: number;
    private head?:LinkedListNode<T>
    private tail?: LinkedListNode<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    prepend(item: T): void {
        const node = {
            value:item
        } as LinkedListNode<T>
        this.length++
        if(!this.head){
            this.head = this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length || idx < 0) {
            return;
        }
        const node = { value: item } as LinkedListNode<T>;
        this.length++;
        if (idx === 0) {
            if (!this.head) {
                this.tail = node;
            }
            node.next = this.head;
            this.head = node;
            return;
        }
        let cur = this.head;
        for (let i = 0; i < idx - 1; i++) {
            cur = cur?.next;
        }
        node.next = cur?.next;
        cur!.next = node;
        if (idx === this.length - 1) {
            this.tail = node;
        }
    }
    
    append(item: T): void {
        const node = {
            value:item
        } as LinkedListNode<T>
        this.length++
        if(!this.tail){
            this.tail = this.head = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
        
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined; // Empty list, item not found.
        }
    
        if (this.head.value === item) {
            const removedValue = this.head.value;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = undefined;
            }
    
            return removedValue;
        }
    
        let prev = this.head;
        let cur = this.head.next;
    
        while (cur) {
            if (cur.value === item) {
                prev.next = cur.next;
                this.length--;
                if (!cur.next) {
                    this.tail = prev;
                }
                return cur.value;
            }
            prev = cur;
            cur = cur.next;
        }
        return undefined; // Item not found in the list.
    }
    get(idx: number): T | undefined {
        if(idx >= this.length || idx<0){
            return undefined
        }
        let cur = this.head
        for(let i = 0; i<idx; i++){
            cur=cur?.next
        }
        return cur?.value
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length || idx < 0) {
            return undefined;
        }
         if (idx === 0) {
            this.length--;
            const removedValue = this.head?.value;
            this.head = this.head?.next;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return removedValue;
        }
        let cur = this.head;
        for (let i = 0; i < idx - 1; i++) {
            cur = cur?.next;
        }
        const removedNode = cur?.next;
        cur!.next = cur!.next?.next;
        this.length--;
        if (idx === this.length) {
            this.tail = cur;
        }
        return removedNode?.value;
    }
}

