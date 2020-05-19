//Linked list example
class Node {                        //this class will setup the format for each node (as an object)
    constructor(data) {                 //constructor with a input param named 'data'
        this.data = data;                   //create a data property in the current object and set value as input value
        this.next = null;                   //create a next property in the current object and leave it empty
    }

}
class LinkedList{                   //this class will construct the linked list
    constructor() {                     //constructor with no input, this will be used only when creating the list
        this.head = null;                   //create a head property in the current object and leave it empty
    }
    add (data) {                        //function for adding a new node, input param named 'data'
        let node = new Node(data);          //create a object called 'node' with the Node template and set input data as input param (data)
        if (this.head == null) {            //if current objects head property is empty
            this.head = node;                   //set head property as node object
            return this;                        //return entire object
        }
        var selectedNode = this.head;       //set 'selectedNode' var as current objects head property (this is the first node)
        //this while loop looks at a node and then sets the viewed node as the next node in the chain until it reaches the last node
        while (selectedNode.next) {         //while the selected node's next property has a value
            selectedNode = selectedNode.next;   //set selectedNode var as selectedNode.next and repeat
        }
        selectedNode.next = node;           //once the selected node's next property has no value, set its next property has the added node
    }
}
let linkedList = new LinkedList()   //setting a new object using the linked list class

linkedList.add("node 1")            //adding a new node to the linked list
linkedList.add("node 2")            // ""

console.log(linkedList)

//linked list pseudo code
/*
create node object template {
    create property named data and value as input
    create property named next
}

create linked list object template {
    create property named head

    function add (input data){
        create new node object with input data and use Node template
        if the linked list's head property has no value {
            set head property as new node
            end function
        }
        make a clone of head property
        while cloned heads next property contains a node {
            replace the cloned head with the next node
        }
        when cloned property's next property is empty
            set next property as new node
        end function
    }
}

set a new object as a linked list using linked list template

add new node with a value of "node 1"
add new node with a value of "node 2"

*/

//Recursion example

//this is a counter that counts down from a designated number
//this function will run, print input number, then run itself again inside itself but with a decreased input number until the input is 0
//once one of the ran functions gets an input of 0 it will return 0 to its parent function which will in turn return 0 to its parent function until the entrie chain of functions has ended
function recurCount (count) {               //make function named 'reurCount' with input param names 'count'
    console.log(count);                         //console.log to print current count to console
    if (count != 0) {                           //if the input number (count) doesnt equal 0
        recurCount(count - 1);                      //run a child recurCount func with input of count minus 1
    }
}
recurCount(10);

//recursion pseudo code
/*

function recurCount ( start number ){
    print start number to console
    if (start number is equal to 0) {
        run recurCunt function with a start number 1 lower than current start number 
    }
}

*/
