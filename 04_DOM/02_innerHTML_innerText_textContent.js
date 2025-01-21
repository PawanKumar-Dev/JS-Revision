/* When we try to access content in b/w our html elements we have 3 main methods:
    1.textContent
    2.innerText
    3.innerHTML
*/

const titleTwo = document.getElementById("titleTwo").innerHTML
console.log(titleTwo)
// Returns: 'Content inside an H2 element<span style="display: none;">Hidden Text with css</span>'
// When using innerHTML, whole text with html content get fetched.

const titleThree = document.getElementById("titleTwo").innerText
console.log(titleThree)
// Returns: 'Content inside an H2 element'
// When innerText is used. Then only text visible is fetched.

const titleFour = document.getElementById("titleTwo").textContent
console.log(titleFour)
// Returns: 'Content inside an H2 elementHidden Text with css'
// When textContent is used, then even you css hidden text is fetched.