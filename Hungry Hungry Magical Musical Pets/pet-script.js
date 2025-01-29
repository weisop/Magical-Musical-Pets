/*
    pet-script.js creates functions for the pet customization page, including a slideshow between different pets, a task list 
    that displays events for the current day, music notes for each completed task, and audio output for completing 5 tasks
*/

// shows the first slide when loaded
let slideIndex = 1;
showSlides(slideIndex);

// navigates to next/previous slides
function plusSlides(n) {
  // updates slides
  showSlides(slideIndex += n);
}

// function to jump to specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function to display slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // loops through slides, restarts loop if at the end of slides
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  // hides all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // displays current slide and highlights corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// retrieves stored events from localstorage or initalizes empty array
const eventsArr = JSON.parse(localStorage.getItem("events")) || [];
console.log(eventsArr);
// get container that displays events
const eventsContainer = document.getElementById("events-container");

// get today's date details
const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

// if there are no events, hide event container
if (eventsArr.length === 0) {
    eventsContainer.style.display = "none";
} else {
    // loop through events array to find events scheduled for today
    eventsArr.forEach((eventObj) => {
        if (
            eventObj.day === todayDay &&
            eventObj.month === todayMonth &&
            eventObj.year === todayYear
        ) {
            // if there are events for the day, display event container
            eventsContainer.style.display = "block";
            eventObj.events.forEach((event) => {
                // Create a new div for each event of the day
                const eventDiv = document.createElement("div");
                eventDiv.className = "event";
                eventDiv.innerHTML = `<strong>Task:</strong> ${event.title} <br> <strong>Time:</strong> ${event.time}`;
                // appends the event div to container
                eventsContainer.appendChild(eventDiv);
            });
        }
    });
}



// Get the current note count from localStorage, default to 0
const noteCount = parseInt(localStorage.getItem('noteCount'), 10) || 0;
const notesContainer = document.getElementById("musicnotes-container");
// sets max note count
const noteMax = 5; 

// reference to the audio element
const audio = new Audio('./Images/music.mp3'); 

// handles audio playback
function playMusic() {
    if (audio.paused) {
        audio.play();
    }
}

// Function to show the congratulations popup
function showCongratsPopup() {
  document.getElementById('congrats-popup').style.display = 'flex';
}

// Function to close the congratulations popup
function closeCongratsPopup() {
  document.getElementById('congrats-popup').style.display = 'none';
}

// Check if the noteCount has reached 5 and play the music
if (noteCount === 5) {
  playMusic(); 
  showCongratsPopup(); 
}

// hides note container if total notes is 0 or 5, resets notecount
if (noteCount == 0 || noteCount == 5) {
    notesContainer.style.display = "none";
    localStorage.setItem('noteCount', 0);
// shows notes otherwise
} else {
    notesContainer.style.display = "block";
    for (let i = 0; i < noteCount; i++) {
        console.log("a");
        const noteImg = document.createElement("img");
        noteImg.src = "./Images/MusicNote.png";
        noteImg.className = "note";
        notesContainer.appendChild(noteImg);
    }
}




