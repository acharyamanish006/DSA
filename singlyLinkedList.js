class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }
  pop() {
    // remove the last element from a list
    let popVal = this.tail;
    let current = this.head;

    while (current) {
      if (current.next == popVal) {
        this.tail = current;
        current.next = null;
        return;
      }
      current = current.next;
    }
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

let newList = new SinglyLinkedList();
newList.push("hey");
newList.push("hi");
newList.push("how");
newList.push("are");
newList.push("you");
newList.pop();
newList.pop();
newList.pop();
newList.pop();
newList.pop();
newList.pop();
newList.traverse();
// console.log(newList);
