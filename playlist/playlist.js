console.log(document.getElementById("bgLink"));
console.log(document.querySelector("p"));

const button = document.querySelector("button");
button.onclick = function() {
    console.log("The button was clicked.");
    document.querySelector("h2").textContent = "Interactive Classical Music Playlist"
    document.querySelector("p").textContent = "Click a title in the list and see it in the console."
}

const div = document.querySelector("div");
div.onclick = function() {
    console.log("The div was clicked.")
}

const ul = document.querySelector("ul");
ul.addEventListener("click", function(event){
    const liText = event.target.textContent;
    console.log(liText);
});

const bgLink = document.getElementById("bgLink");
bgLink.addEventListener("click", function(event){
    event.preventDefault();
    console.log("The default action was prevented.");
});


/*
What is the difference between getElementById() and querySelector()?
If an element has an id in the HTML, you can call it by the id instead of using querySelector, which selects the element. 

What is event bubbling?
When an event is triggered on a child element, it propogates or "bubbles" up to its parent elements in the DOM.

What is event delegation?
It is used to handle events by attaching to a parent element (like ul instead of li) instead of attaching multiple listeners to child elements.

Why would someone want to use preventDefault()?
You can use it to stop the default action of an event from occurring, like submitting a form or following a link. 
*/