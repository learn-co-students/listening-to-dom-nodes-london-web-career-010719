// using this file is optional
// you can also load the code snippets in using your browser's console
const mainEl = document.querySelector('main')
mainEl.addEventListener('click',() => {
  alert('I was clicked!')
})

const inputEl = document.querySelector('input')
inputEl.addEventListener('keydown',(e) =>{
  alert('stop that')
})

let divs = document.querySelectorAll('div');

function bubble(e) {
  e.stopPropagation();
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

//
