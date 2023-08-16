class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
  }
}
