console.log(location.href);
console.log(navigator.language);
console.log(navigator.onLine);
console.log(screen.width);
console.log(screen.height); 
console.log(window.innerWidth); 
console.log(window.innerHeight); 

document.forms["siteForm"];

const form = document.forms["siteForm"];
form.elements;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.querySelector("div").textContent = form.username.value + "'s favorite site is " + form.favsite.value;

    let url = new URL(form.favsite.value);
    console.log(url);
    console.log(url.protocol);
    console.log(url.hostname);
    console.log(url.pathname);

    localStorage.setItem("username", form.username.value);
    const retrievedUsername = localStorage.getItem("username");
    console.log("Retrieved username: " + retrievedUsername);

    sessionStorage.setItem("favSite", form.favsite.value);
    const retrievedSite = sessionStorage.getItem("favSite");
    console.log("Retrieved website: " + retrievedSite);


});

form.username.addEventListener("focus", function(event) {
    console.log("The username field was selected.");
});
form.username.addEventListener("blur", function(event) {
    console.log("The username field was left.");
});

const backButton = document.getElementById("back");

backButton.addEventListener("click", function(event) {
    history.back();
    console.log("The back button was clicked.")
});

const fwdButton = document.getElementById("forward");

fwdButton.addEventListener("click", function(event) {
    history.forward();
    console.log("The forward button was clicked.")
});

/* What is the difference between localStorage and sessionStorage?
localStorage persists across across browser sessions, whereas sessionStorage is only for the current browser sessions and clears when the tab is closed.

What information can the Navigator object provide?
It can provide information about the user's browser, like platform or language. 

What happens when an input field receives focus?
It becomes the active element and is ready to accept user input, like in a text field.

Why might a website use a URL object? 
You can create and parse URLs instead of slicing strings. This keeps the URL in stable, readable pieces for manipulation.
*/