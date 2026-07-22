const funFacts= [
    "The blue-ringed octopus lives for about 2-3 years on average.",
    "The moray eel is the top predator of the blue-ringed octopus.",
    "Despite their striking pattern, blue-ringed octopuses can still camoflauge like their other cephalopod relatives."
];

const octoInfo = {
    subSpecies: 4,
    lifespan: "2-3 years",
    size: "12-20cm",
    conservationStatus: "LC - Least Concern"
}

document.getElementById("octoInfoDisplay").innerHTML = "Number of subspecies: " + octoInfo.subSpecies + "<br>" + "Lifespan: " + octoInfo.lifespan + "<br>" + "Size: " + octoInfo.size + "<br>" + "Conservation Status: " + octoInfo.conservationStatus;

const factButton = document.getElementById("factButton");
factButton.onclick = function() {
    console.log("The button was clicked.");
    document.querySelector("#factDisplay").textContent = funFacts[Math.floor(Math.random() * funFacts.length)];
}

const form = document.forms["siteForm"];
form.name.addEventListener("focus", function(event) {
    console.log("The name field was selected.");
});

const factDiv = document.querySelector("#funFacts");
factDiv.onclick = function() {
    console.log("The div was clicked.");
 /* The child element of div, button, was clicked, so the event is first handled via the onclick function (above) and then bubbles up to the parent, the div. */
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("#output").textContent = form.name.value + " says: " + form.comment.value;

    localStorage.setItem("name", form.name.value);
    const retrievedName = localStorage.getItem("name");
    console.log("Retrieved name: " + retrievedName);

    localStorage.setItem("comment", form.comment.value);
    const retrievedComment = localStorage.getItem("comment");
    console.log("Retrieved comment: " + retrievedComment);

});

document.getElementById("bom").innerHTML = "Your screen width is " + screen.width + ". The language of the browser is " + navigator.language + ".";



/* Part 9: Reflection      
- Which JavaScript feature was easiest for you to use?
I found the DOM and searching to be the easiest! It was easy for me to visualize how the document is structured and it was also rather intuitive to find elements with querySelectors and getElements. 

- Which JavaScript feature was most challenging?
I think I'm still having issues discerning the difference between/when to use Arrays vs. Objects. It's kind of hard to explain what I don't get about them--I understand the structural differences, but I just need to see more examples of when to use them and when not to use the other. I think with time and practice I'll understand their usage better!

- How did you use events in your project?
I used them mostly for when elements are clicked, like buttons and (focusing on) text fields.

- How did you use storage in your project?
When a user comments on the page, localStorage retrieves the name and comment they entered. It will keep the comment and name even if the tab/window is closed. I think this would be the best option for a comment section on a real site, because other users will be able to see previous comments from other sessions. (I can only assume that's how that works!)

*/