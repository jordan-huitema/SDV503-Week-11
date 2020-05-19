# SDV503-Week-11
1.	Write an introduction of JavaScript Data Structure stores and briefly explain each Data structure store. (Provide with your explanation pseudocodes)  

Data structures are just diffrent methods of handeling data in JavaScript, each method had its pros and cons and is used for diffrent reason in diffrent applications. 
These methods include:

Stack:
>The stack data structure is based on a 'LIFO' protocol which stands for "Last In First Out" and essentially means data is stored sequentially in a list with push() and is retrived in order of last entry to first entry with pop().
![ref]:SDV503-Week-11\stackRef.png


Queue:
>The que data structure only allows new data to be accessed once the old data is proccecced, all new data is added at the end of an array and accesses from the the front.

Linked List:
>A linked list functions diffrent from other data types due it its unique way of ordering data, to store new data a linked list will add a node to an array, each node contains information about that next node in the array. To access an entry you must start from the first node (called the head) and get the name or location of the next node and repeat the proccess until you arrive at the desired entry.

Tree:
>A tree is the same as a linked list but instead of each node only containing a link to the next node, in a tree structure each node can contain multiple next node links, this allows the structure to have multiple branches simmilar to a file system on  a PC that sorts types of info or timestamps into diffrent subfolders to be accessed more easily 

Graph:
>A graph is a complex data structure, it is simmilar to linked list and trees but can contain multiple previous and next node extries, this means you can create a web of nodes that can all have multiple links to and form them to other nodes.

Hash Table:
>Hash tables are all about accessing small amounts of data quickly and securly, a has table functions buy getting entry data, hashing it, and then storing it at a position in the memory determin by a hashed key. To retrive data the program will provide a key that once hashed will match the desired entry and the hashing function will provide the location of the data and the key to unhash it.

2.	Explain in details Linked lists:
a.	Introduction to linked lists.

>A linked list is a type of data structure that stores each entry with a link to the next entry in the array, each entry is called a node. To access an entry you must start from the first node (called the head) and get the name or location of the next node and repeat the proccess until you arrive at the desired entry.

b.	What are the advantages and disadvantages of linked lists.

>This type of list is useful because each entry does not have to be sotred in order on a computers menory to be accessed correctly, because each node contains the name of the next, a program can easily find a program can always follow the corrent order

>The downside of linked lists is that they are bulky. because each node stores more than just the data it contains, each entry is larger than it strictly needs to be. The other downside to linked lists is due to their lack of a full index, because each node only contains the info of the prior and next node a program needs to cyle through each node in order if it wants to find the disired node.

c.	Provide Real world examples



d.	Provide pseudocodes, diagrams and executable code. (create a js file for executable code)

>for pseuedocode and executable code see example.js line 1-65

>for diagrams see

3.	Explain in details JavaScript Recursion:
a.	Introduction to Recursion.

>Recrsion is a method in JavaScript that runs a function repeatedly, itterating on it incrementally until it acheives its desired outcome. 

b.	What are the advantages and disadvantages using JavaScript Recursion?

>Recursion is a good way refactor code so it is shorter and simpler.

c. Which data structure stores you can use recursion to access data?

>Recursion is useful when handling data types that need to be cycled through sequentially to find a resired index; this inclues the stack data type due to its last in first out protocol, queue's, linked lists and trees due to their sequestial structure.


d.	 Provide Real world examples



e.	Provide pseudocodes, diagrams and executable code. (create a js file for executable code)

>for pseuedocode and executable code see example.js line 57-end

>for diagrams see

Refrencing:
>uhhhhh
>ill add these later
