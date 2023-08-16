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
    this.length++;
    return this;
  }
  pop() {
    // remove the last element from a list
    if (!this.head) return console.log("no node to pop");
    let current = this.head;
    let nextTail = current;

    while (current.next) {
      nextTail = current;
      current = current.next;
    }
    console.log(nextTail);
    console.log(current);
    this.tail = nextTail;
    this.tail.next = null;
    this.length--;
    console.log(this.length);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  shift() {
    if (!this.head) return console.log("no node to shift");
    const firstNode = this.head;
    this.head = firstNode.next;
  }
  traverse() {
    if (!this.head) return console.log("No Node to Traverse");
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
// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();
// newList.pop();
// newList.shift();
// newList.shift();
// newList.shift();
// newList.shift();
// newList.shift();
// newList.shift();
newList.traverse();
// console.log(newList);
