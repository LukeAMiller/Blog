// // Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const greeting = document.querySelector(".article__header");
console.log(greeting);
greeting.textContent= "Welcome to Luke's blog";


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
const header = document.querySelector(".article__header")
header.classList.add("important")
console.log(header)
// Obtain a reference the element with a class of dashed and remove it.
const remove = document.querySelector(".dashed")
remove.classList.remove("dashed")
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const footer = document.querySelector(".article__footer")
footer.classList.add("goldenrod")