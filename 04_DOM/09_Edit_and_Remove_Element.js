// Let's see two main methods to create and append element in JS
function addLang(lang) {
  const li = document.createElement("li")
  li.innerHTML = `${lang}`
  document.querySelector(".language").appendChild(li)
}

addLang("PHP")


// More optimized way to create and append element
function addLangTwo(lang) {
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(lang))
  document.querySelector(".language").appendChild(li)
}

addLangTwo("Wordpress")


// We can replace/edit data with replaceChild() method
const secondChild = document.querySelector(".language li:nth-child(2)")
const newLi = document.createElement("li")
newLi.textContent = "CodeIgniter"
secondChild.replaceWith(newLi)


// We can use simpler method of innerHTML/outerHTML
const firstChild = document.querySelector(".language li:nth-child(1)")
firstChild.innerHTML = "<li>Python</li>"


// We can delete element by using remove() method
const thirdElement = document.querySelector(".language li:nth-child(3)")
thirdElement.remove()
