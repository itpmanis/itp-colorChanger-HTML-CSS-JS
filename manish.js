// NotdeList: nodelist vanako array jastai ho tara array haina


const buttons = document.querySelectorAll(".button");
// javascript ma yuta constant variable button name ko banako .
// querySelectorAll le class ko name button vako sabai lai select garxa.
// Returns a NodeList containing all button elements
const body = document.querySelector("body");
// ya ni same js ma yuta body name ko constant variable banako
// Returns the first  element with the class "body"


buttons.forEach((button) => {
  // sabai button haruli loop lako
  // console.log("Hi btn :", button);
  button.addEventListener("click", (e) => {
    // button haru ma click gare paxi e ko event listner call huncha
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "teal") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
