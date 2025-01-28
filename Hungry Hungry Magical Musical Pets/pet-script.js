let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const eventsArr = JSON.parse(localStorage.getItem("events")) || [];
console.log(eventsArr);
const eventsContainer = document.getElementById("events-container");

const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

if (eventsArr.length === 0) {
    eventsContainer.style.display = "none";
} else {
    eventsContainer.style.display = "block";
    // Looping through eventsArr
    eventsArr.forEach((eventObj) => {
        if (
            eventObj.day === todayDay &&
            eventObj.month === todayMonth &&
            eventObj.year === todayYear
        ) {
            eventObj.events.forEach((event) => {
                // Create a new div for each event of the day
                const eventDiv = document.createElement("div");
                eventDiv.className = "event";
                eventDiv.innerHTML = `<strong>Task:</strong> ${event.title} <br> <strong>Time:</strong> ${event.time}`;
                eventsContainer.appendChild(eventDiv);
            });
        }
    });
}



// Get the current note count from localStorage
const noteCount = parseInt(localStorage.getItem('noteCount'), 10) || 0;
const notesContainer = document.getElementById("musicnotes-container");
const noteMax = 5;

// Reference to the audio element
const audio = new Audio('./Images/music.mp3'); // Path to your 15-second audio file

// Function to handle audio playback
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
  playMusic(); // Play the music as soon as noteCount is 5
  showCongratsPopup(); // Show the congratulations popup
}

if (noteCount == 0 || noteCount == 5) {
    notesContainer.style.display = "none";
    localStorage.setItem('noteCount', 0);
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




