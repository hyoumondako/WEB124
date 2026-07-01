const books = [
    {title: "How Far the Light Reaches", author: "Sabrina Imbler", pages: 272},
    {title: "The Healing Hippo of Hinode Park", author: "Michiko Aoyama", pages: 242},
    {title: "Pachinko", author: "Min Jin Lee", pages: 496},
    {title: "Loveless", author: "Alice Oseman", pages: 432},
    {title: "Penance", author: "Eliza Clark", pages: 336}
];

books.forEach(function(book) {
    console.log(book); 
})

console.log(document);
console.log(document.body);
console.log(document.body.firstElementChild);
console.log(document.body.children);

console.log(document.body.children[2]);
console.log(document.body.children[2].children[0]);

console.log(document.body.children[2].children[0].parentNode);
console.log(document.body.children[2].children[0].nextElementSibling);

console.log(document.body.children[2].children[0].textContent);
console.log(document.body.children[2].children[0].nodeType);

console.log(document.body.firstElementChild.className);


/*
What is the DOM tree?
-The Document Object Model, which is a structure of objects in an HTML document/page.

What is a node in the DOM?
-It is a part of the tree, like an element, text, or attribute.

What is the difference between a parent and a child node?
-A parent node is the predecessor to one or more child nodes connected to it, whereas a child node proceeds only one parent node. 

What is a sibling node?
-Sibling nodes share the same parent node as other child nodes. 

*/