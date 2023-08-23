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
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
  }
  unShift(val) {
    // add a new head and point the old one at it's next value, then set that as our new head!
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (!Number.isInteger(index)) throw Error("Index must be an integer");
    if (index < 0) {
      console.error("Negative Index Not Allowed");
      return;
    }
    let indexVal;
    for (let i = 0; i < index; i++) {
      if (!this.head) {
        console.log("index is greater then len of linkList");
        return;
      }
      indexVal = this.head;
      this.head = indexVal.next;
    }
    console.log(indexVal);
  }
  set(index, val) {
    if (!Number.isInteger(index)) throw Error("Index must be an integer");
    if (index < 0) {
      console.error("Negative Index Not Allowed");
      return;
    }
    let newNode = new Node(val);
    let tempNode;
    let currentNode;
    for (let i = 0; i <= index; i++) {
      if (!this.head) {
        console.log("index is greater then len of linkList");
        return;
      }
      currentNode = this.head;
      this.head = currentNode.next;
    }
    tempNode = currentNode;
    currentNode = newNode;
    currentNode.next = tempNode.next;
    tempNode.next = currentNode;
    // console.log(currentNode);
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
// newList.unShift("you");
// newList.unShift("are");
// newList.unShift("how");
// newList.get(-1);
// newList.get(0);
// newList.get(1);
// newList.get(2);
// newList.get(10);
// newList.set(2, "tex");
// newList.traverse();
// console.log(newList);
let l1 = new SinglyLinkedList();
l1.push(2);
l1.push(4);
l1.push(3);
let l2 = new SinglyLinkedList();
l2.push(5);
l2.push(6);
l2.push(4);

var addTwoNumbers = function (l1, l2) {
  console.log(l1.head.next);
};

addTwoNumbers(l1, l2);
