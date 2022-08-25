// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphHearts = document.querySelectorAll(".like-glyph");
function activateHeart (e) {
  const heartLike = e.target;
  mimicServerCall()
  .then(() => {
    if(heartLike.textContent === EMPTY_HEART) {
      heartLike.textContent = FULL_HEART;
    } else {
      heartLike.textContent = EMPTY_HEART;
    }
  })
  .catch(error => {
    let modalError = document.querySelector("#modal");
    modalError.innerText = error;
    setTimeout(() => modalError.className = "hidden", 3000);
  });
}
function eventHeart(glyphHearts){
  for (const heart of glyphHearts) {
      heart.addEventListener('click', activateHeart);
    }
}
eventHeart(glyphHearts);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
