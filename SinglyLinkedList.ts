type Nodes<T> = {
    value:T,
    next?:Nodes<T>|null
}

class SinglyLinkedList<T>{
     private head?:Nodes<T>|null;
     private tail?:Nodes<T>|null;
     private length:number;
     constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
     }

     insertAtHead(val:T){
     const newNode = {
            value:val
        } as Nodes<T>
        let cur = this.head
        let temp = this.head?.next
        this.head = newNode
        newNode.next = cur
        this.length++
     }

     insertAtEnd(val:T){
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

        insertAtIndex(value:T, index:number){
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
     headELement():T{
        return this.head?.value as T
     }
}

const s = new SinglyLinkedList();
s.insertAtEnd("AA")
s.insertAtEnd("C")
s.insertAtEnd("B")
s.insertAtHead("R")
s.display()
console.log("************************************");
s.insertAtIndex(10,2)
s.display()