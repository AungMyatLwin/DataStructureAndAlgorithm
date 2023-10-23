import { SinglyList } from "./4_SinglyLinkedList"


const l1 = new SinglyList<number>()

l1.prepend(2)
l1.prepend(4)
l1.prepend(3)
console.log(l1);
let numb = ""
for(let i =0; i<l1.length;i++){
    numb+=l1.get(i)
}
console.log(numb)

const l2 = new SinglyList<number>()

l2.prepend(5)
l2.prepend(6)
l2.prepend(4)
console.log(l2);
let numb2 = ""
for(let i =0; i<l2.length;i++){
    numb2+=l2.get(i)
}
const num1 = Number(numb)
const num2 = Number(numb2)
console.log(num1+num2);

