const movies = [
    "Barbie,comedy,6,user1@email.com",
    "Lawrence of Arabia,epic,10,user2@email.com",
    "Dracula,horror,8,user3@email.com",
    "North by Northwest,drama,7",
    "Toy Story,animation,8,user5@email.com"
];

function Movie(title, genre, rating, reviewEmail) { 
  this.title = title;
  this.genre = genre;
  this.rating = rating;
  this.reviewEmail = reviewEmail;
  this.id = Symbol();

  this.getSummary = function() { 
    return this.title + " is a " + this.genre + " movie with a rating of " + this.rating + ".";
  }

  this.isHighlyRated = function() { 
    if (this.rating >= 8) {
        return true;
    }
    else {
        return false;
    }    
  }

  this.getReviewEmail = function() {
    return this.reviewEmail || "none";
  }

  this.getID = function () {
    return this.id;
  }

}

const parsedMovies = [];
movies.forEach(function(movieString) {
    try{
    const movieParts = movieString.split(",");
    const movie = new Movie(movieParts[0], movieParts[1], movieParts[2], movieParts[3]);
    parsedMovies.push(movie);
    }
    catch (error) {
        console.log("Error: "+ error);
    }
})

parsedMovies.forEach(function(movie) {
    console.log(movie.getSummary()); 
})

const highlyRatedMovies = parsedMovies.filter(function(movie) {
    return movie.isHighlyRated();
})

highlyRatedMovies.forEach(function(movie) {
    console.log(movie.title)
})

const emailCheck = /@.*\./;
parsedMovies.forEach(function(movie){
    console.log(emailCheck.test(movie.reviewEmail) + ": " + movie.reviewEmail)
});

parsedMovies.sort(function(movieA, movieB) {
    return movieB.rating - movieA.rating;
});
console.log(parsedMovies[0].title + " is the highest rated movie with a rating of " + parsedMovies[0].rating) + ".";
/* sorts parsedMovies array from highest to lowest and displays the highest rated movie title with the score.

/*
- What are array methods, and how did you use them in this assignment?
Array methods allow you to manipulate arrays; here, I split array objects at each "," and filtered them based on object values.

- What does your regular expression check for?
It checks if there is an @ symbol and a period in the email.

- How does try/catch help prevent errors in your program?
It prevents crashes by telling Javascript how to react to problematic codes, generating an error instead of crashing the program altogether.
*/