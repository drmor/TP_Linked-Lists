class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new Node(value, null);
    }
  }
  prepend(value) {
    this.head = new Node(value, this.head);
  }
  size() {
    let num = 0;
    if (this.head == null) {
      console.log(num);
    } else {
      let current = this.head;
      while (current) {
        num += 1;
        current = current.next;
      }
      console.log('size of list is ' + num);
    }
  }
  getHead() {
    const current = this.head;
    if (this.head == null) {
      console.log('head: undefined');
    } else {
      console.log('head: ' + current.value);
    }
  }
  tail() {
    if (this.head == null) {
      console.log('tail: undefined');
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      console.log('the tail is ' + current.value);
    }
  }
  at(index) {
    let current = this.head;
    let count = 0;
    if (index < 0) console.log(`index ${index} is undefined`);
    while (current !== null) {
      if (count === index) {
        return console.log(`index ${index} is ${current.value}`);
      }
      count++;
      current = current.next;
    }
    return console.log(`index ${index} is out of bounds`);
  }
  pop() {
    if (this.head !== null) this.head = this.head.next;
    console.log('removed the head, new list is ');
    this.toString();
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log(true);
        return;
      }
      current = current.next;
    }
    return console.log(false);
  }
  findIndex(value) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return console.log(`inserted ${value} has index ${index}`);
      }
      index++;
      current = current.next;
    }
    return console.log(`value ${value} undefined`);
  }
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.value;
      if (current.next) {
        result += ' -> ';
      }
      current = current.next;
    }
    console.log(result);
  }
}
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(40);
list.append(50);
list.toString();
list.size();
list.getHead();
list.tail();
list.at(4);
list.pop();
list.contains(50);
list.contains(40);
list.findIndex(40);
list.findIndex(50);
