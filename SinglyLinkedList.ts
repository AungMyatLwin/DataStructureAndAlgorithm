type Nodes<T> = {
    value:T,
    next?:Nodes<T>|null
}

class SinglyLinkedList<T>{
     head?:Nodes<T>|null;
     tail?:Nodes<T>|null;
     length:number;
     constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
     }

     insertAtHead(val:number){
     const newNode = {
            value:val
        } as Nodes<T>
        let cur = this.head
        let temp = this.head?.next
        this.head = newNode
        newNode.next = cur
        this.length++
     }

     insertAtEnd(val:number){
         const newNode = {
             value:val as T,
            } as Nodes<T>
            let cur = this.head;
            
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
                return;
            }
            this.length++
            
           
            console.log(cur)
            for(let i =0; i<this.length-1; i++){
                console.log(i)
                cur = cur!.next;
            }
            cur!.next = newNode
            this.tail = newNode
        }

        insertAtIndex(value:number, index:number){
            let cur = this.head
            const newNode = {
                value:value
            } as Nodes<T>

            for(let i = 0;i<index-1; i++){
                cur=cur!.next
            }
            let temp = cur?.next
            newNode.next = temp
            cur!.next = newNode
            this.length++
            console.log(cur)
        }
        
        display(){
        let cur = this.head
       for(let i = 0; i<=this.length;i++){
        console.log(cur?.value, i, this.tail)
        cur = cur?.next
       }
     }
}

const s = new SinglyLinkedList();
s.insertAtEnd(4)
s.insertAtEnd(2)
s.insertAtEnd(3)
s.insertAtHead(7)
s.display()
console.log("************************************");
s.insertAtIndex(10,2)
s.display()