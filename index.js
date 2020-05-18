//Factorial
function factorial (num) {
    let total = 1;
    for (let n = num; n > 1; n--) {
        total = total * n;
    }
    return total;
}

console.log(factorial(5));

//recursion counter
function recurCount (count) {
    console.log(count);
    if (count != 0) {
        count = recurCount(count - 1);
    }
    return count;
}
console.log(recurCount(10));

function test (n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * test(n - 1);
}
console.log(test(3));

//console.trace() lists functions run and output of each

//classes
class studentClass {
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
    }
}

let students = new studentClass('Jordan', 12);
console.log(typeof students);
console.log(students);

//linked lists

class Node {                            //This is a node
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {                      //this links each node to create a linked list
    constructor() {                         //each time data is added this makes a new blank node for later use
        this.head = new Node();
    }
    append (item) {                        //adds node to list containing item
        let current = this.head;
        let newNode = new Node(item);
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        return true;
    }
    appendAt (pos, item) {                  //adds new node to list at set position containing item
        let counter = 0;
        let current = this.head;
        let newNode = new Node(item);
        while (current.next !== null) {
            if (counter === pos) {
                newNode.next = current.next;
                current.next = newNode;
                return true;
            }
            current = current.next;
            counter++;
        }
        return false;
    }
    
}

let linkedList = new LinkedList();

