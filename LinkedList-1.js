// Creating Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// creating Linked List class
class LinkedList {
  //calling constructor with VALUE
  constructor(value) {
    const newNode = new Node(value); // creating new Node for linked list
    this.head = newNode; // assigning newNode to head
    this.tail = this.head; // assigning newNode to tail
    this.length = 1; // Making length to 1
  }

  // creating push method in Linked List class
  push(value) {
    //Push method is used to add new Node at the tail of linked list
    const newNode = new Node(value); //creating new Node for Push method
    if (!this.head) {
      //Checking if any node is available,
      this.head = newNode; // if no node, assign head and tail to new Node
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //Connecting tail node to new node
      this.tail = newNode; // assigning tail to new Node
    }
    this.length++; // increase the length of linked list
    return this; // Return the linked list
  }

  // Creating POP() method in Linked List
  pop() {
    // This method removes node from the end of node(from tail side)
    if (!this.head) return undefined; //if no node is available, it return undefined
    let temp = this.head; //Creating 2 variables called temp and pre and assign it to head node
    let pre = this.head;

    // this condition is checking till (temp.next===null)
    while (temp.next) {
      pre = temp; //pre is assigned with current temp value
      temp = temp.next; // temp is moving one node ahead of pre and checking if temp is null
    }
    this.tail = pre; //assign tail to pre node
    this.tail.next = null; //remove connections from last node by assigning null to tail.next node
    this.length--; // decrement the length
    if (this.length === 0) {
      // check if length is 0, remove head and tail
      this.head = null;
      this.tail = null;
    }
    return temp; // returning removed node
  }

  // creating unshift method
  // this method add new node before current head node
  unshift(value) {
    const newNode = new Node(value); // creating new node
    // checking if linked list is empty, if yes
    if (!this.head) {
      this.head = newNode; // assign head to new node
      this.tail = newNode; //assign tail to new node
    } else {
      // if linked list has one or more nodes
      newNode.next = this.head; // connecting newNode next value to head node
      this.head = newNode; // moving head to new Node
    }
    this.length++; //increase the length of linked list
    return this; //return linked list
  }

  // creating shift method
  // this method removes a node from start of linked list
  shift() {
    if (!this.head) return undefined; //check if linked list is empty, if yes return undefined
    let temp = this.head; //assign a new variable to head node
    this.head = this.head.next; //Moving head to the 2nd node
    temp.next = null; //Assigning null to first node and this is called removing connection from nodes
    this.length--; //Decrement the length of Linked List

    // check if there is node in linked list
    if (this.length === 0) {
      this.tail = null; // assing tail node to null
    }
    return temp; // return removed node
  }

  //creating GET method in linked list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // creating set method
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // creating insert method
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index >= this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
}

const myLinkedList = new LinkedList(5);
myLinkedList.push(10);
myLinkedList.push(15);
myLinkedList.push(20);
myLinkedList.push(25);
myLinkedList.set(1, 6);
myLinkedList.insert(0, 7);
// myLinkedList.pop();
// myLinkedList.unshift(1);
// myLinkedList.shift();
// myLinkedList.shift();
// myLinkedList.shift();
// myLinkedList.shift();
console.log(myLinkedList); // 5 -> 10 -> 15 -> 20 -> 25  -- Linked list
// console.log("This is get method ", myLinkedList.get(1));
