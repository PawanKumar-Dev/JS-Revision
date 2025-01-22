// We can create HTML elements with all attributes using pure JS. Then attach them to existing webpage.
const div = document.createElement("div")


// id, className, style are common attributes that can be attached directly.
div.className = "myDivClass"
div.id = "myId"
div.style.backgroundColor = "red"
div.style.color = "white"
div.textContent = "This is new Div"


// For more attributes use "setAttributes" method
div.setAttribute("title", "My div title")


// Lastly append this 
document.body.appendChild(div)
