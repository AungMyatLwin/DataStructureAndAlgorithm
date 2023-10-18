type QNode<T> = {
  value:T,
  next?:QNode<T> | null,
}
class MyLinkedList<T extends number> {
  private length: number;
  private head?:QNode<T> | null;
  private tail?:QNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1; // Return -1 for out-of-bounds indices.
    }
  
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current?.next;
    }
  
    return current?.value as T;
  }

  addAtHead(val: number): void {
    const node ={ value:val } as QNode<T>
    this.length++
    let current = this.head
    this.head = node
    node.next = current
    this.tailRebase(current)
  }

  tailRebase(cur?:QNode<T> | null){

    // setting tail
    while(cur){
      if(cur.next === undefined){
        this.tail = cur
      }
     cur= cur.next
  }
}

  addAtTail(val: number): void {
    const tailNode = {
      value:val
    } as QNode<T>;

    this.length++;

    if (!this.head) {
      // If the list is empty, the new node becomes both the head and tail.
      this.head = tailNode;
      this.tail = tailNode;
      return;
  }

    let cur = this.head
    while (cur.next) {
      cur = cur.next;
  }

      cur.next= tailNode
      this.tail = tailNode
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;

    if (index === 0) {
        this.addAtHead(val);
        return;
    } else if (index === this.length) {
        this.addAtTail(val);
        return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current?.next;
    }

    this.length++;
    let temp = current?.next;
    const newNode = {
        value: val,
        next: temp
    } as QNode<T>;

    current!.next = newNode;
  }

    deleteAtIndex(index: number): void {
      if (index < 0 || index >= this.length) return;
  
      if (index === 0) {
          this.head = this.head?.next;
          this.length--;
          return;
      }
  
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
          current = current?.next;
      }
  
      if (current?.next) {
          current.next = current.next?.next;
          this.length--;
      }
  }
}