// index.js

import "./styles/styles.css";

import templateImage from "./webpack-template.png";
 


function greetings() {
    const image = document.createElement("img");
    image.src = templateImage;
    const textElement = document.createElement('p')
    textElement.innerText = 'This is a basic webpack template project.'   
    document.body.append(image, textElement);
}

greetings()