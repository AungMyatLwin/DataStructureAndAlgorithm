type Nodes<T> = {
    value:T,
    next?:Nodes<T>|null
}

export class SinglyLinkedList<T>{
     private head?:Nodes<T>|null;
     private tail?:Nodes<T>|null;
     private length:number;
     constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
     }

     headELement():T{
        return this.head?.value as T
     }
     tailElement():T{
        return this.tail?.value as T
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
            
            for(let i =0; i<this.length-1; i++){
                cur = cur!.next;
            }
            cur!.next = newNode
            this.tail = newNode
        }
        

        deleteAtHead():void{
            let poppedValue = this.head?.value;
            let cur = this.head?.next
            this.head = cur
            this.length--
            console.log(poppedValue)
        }

        deleteAtTail():void{
            let cur = this.head
            for(let i = 0; i<this.length-1;i++){
                cur=cur?.next                
            }
            cur!.next = null
            this.tail = cur
            this.length--
        }

        deleteAtIndex(index:number){
            
            let cur = this.head
       
            for(let i = 0; i<index-2;i++){
                cur = cur?.next
            }
            cur!.next = cur!.next?.next
            this.length--
        
        }

        display(){
            let arr:T[] = []
        let cur = this.head
       for(let i = 0; i<=this.length;i++){
        arr.push(cur?.value as T)
        cur = cur?.next
       }
       console.log(arr, "this.head:", this.head?.value, "this.tail:", this.tail?.value)
     }
    
}

// const s = new SinglyLinkedList();
// s.insertAtEnd("AA")
// s.insertAtEnd("C")
// s.insertAtEnd("BF")
// s.insertAtEnd("BE")
// s.insertAtEnd("BG")
// s.insertAtHead("R")

// s.display()
// console.log("************************************");
// s.insertAtIndex(10,2)
// s.display()
// console.log("************************************");
// s.deleteAtHead()
// s.deleteAtTail()
// s.display()
// console.log("************************************");
// s.insertAtEnd("End")
// s.display()
// s.deleteAtIndex(3)
// s.display()
