console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// Generate HTML Elements

let article = document.createElement("article");
let paragraph = document.createElement("p");
let footer = document.createElement("footer");
let userName = document.createElement("span");
let anotherLikeButton = document.createElement("button");

// Adding Classes and Content
article.classList.add("post");

paragraph.classList.add("post__content");
paragraph.textContent =
  "I am just another paragraph looking to be loved. Yes...?";

footer.classList.add("post__footer");

userName.classList.add("post__username");
userName.textContent = "@pleaseLoveMe";

anotherLikeButton.classList.add("post__button");
anotherLikeButton.textContent = "♥ Like";
anotherLikeButton.addEventListener("click", handleLikeButtonClick);

// Appending Elements
footer.append(userName, anotherLikeButton);
article.append(paragraph, footer);

document.body.append(article);
