import LinkedList from './linked-list.js';

const list = new LinkedList();
window.list = list; // I think this allows me to actually access the list in the browser console

// First Test
/* list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle") */;


// Test Extra Credit
list.append("1");
list.append("2");
list.append("3");
console.log(list.toString());

console.log(list.size());
list.removeAt(2);
console.log(list.toString());