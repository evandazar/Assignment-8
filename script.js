// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.
let textGet = document.getElementById("name");
let bgColorGet = document.getElementById("background-color");
let txtColorGet = document.getElementById("foreground-color");
let myForm = document.querySelector("form");
let headingGet = document.getElementById("greeting");
let body = document.querySelector("body");
const writeTextInput = event => {
    event.preventDefault();

    let textContents = textGet.value;
    let colorContents = colorGet.value;

    console.log("the text is " + textContents);
    console.log("the color is " + colorContents);
    localStorage.setItem("name",textContents);
    let myText = localStorage.getItem("textInput");
    localStorage.setItem("colorInput", colorContents);
};

/*const changeGreeting = event => {
    event.preventDefault();

}*/

const changeName = event => {
    event.preventDefault();

    let nameContents = textGet.value;

    console.log("the name is " + nameContents);
    localStorage.setItem("name", nameContents);
    headingGet.textContent = "greeting " + nameContents;
}

const changeFG = event => {
    event.preventDefault();
    let txtColorContents = txtColorGet.value;
    localStorage.setItem("foreground-color", txtColorContents);
    body.style.color = txtColorContents;
};
const changeBG = event => {
    event.preventDefault();
    let bgColorContents = bgColorGet.value;
    localStorage.setItem("background-color", bgColorContents);
    body.style.backgroundColor = bgColorContents;
};

/*const applySettings = event => {
    event.preventDefault();
    changeBG;
    changeFG;
}*/

myForm.addEventListener("submit", changeBG);
myForm.addEventListener("submit", changeFG);
myForm.addEventListener("submit", changeName);


/*let myColor = localStorage.getItem("background-color");
if (myColor != null)
{
    alert(myColor);
    let body = document.querySelector("body");
    body.style
}*/