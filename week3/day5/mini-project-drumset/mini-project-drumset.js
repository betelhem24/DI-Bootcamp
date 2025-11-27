// 1. SELECT ALL DRUM BUTTONS
const drums = document.querySelectorAll(".drum");

// 2. ADD CLICK EVENT TO EACH BUTTON
drums.forEach(drum => {
  drum.addEventListener("click", function() {
    const key = this.dataset.key;  // get the key of clicked button
    playSound(key);                 // play corresponding sound
    buttonAnimation(key);           // add click animation
  });
});

// 3. ADD KEYBOARD EVENT
document.addEventListener("keydown", function(event) {
  const key = event.key.toLowerCase(); // get pressed key
  playSound(key);                       // play sound if exists
  buttonAnimation(key);                 // animate button if exists
});

// 4. FUNCTION TO PLAY SOUND
function playSound(key) {
  const audio = document.getElementById(key); // get audio element by id
  if (audio) {                               // check if audio exists
    audio.currentTime = 0;                   // reset to start
    audio.play();                             // play sound
  }
}

// 5. FUNCTION TO ANIMATE BUTTON
function buttonAnimation(key) {
  const button = document.querySelector(`.drum[data-key="${key}"]`);
  if (button) {
    button.classList.add("active");          // add active class
    setTimeout(() => {
      button.classList.remove("active");    // remove after 100ms
    }, 100);
  }
}
