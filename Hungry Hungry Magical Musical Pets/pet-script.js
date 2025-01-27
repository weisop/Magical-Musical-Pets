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

if (eventsArr.length === 0) {
    eventsContainer.style.display = "none";
}
else {
    eventsContainer.style.display = "block";
    // Looping through eventsArr
    eventsArr.forEach((eventObj) => {
        eventObj.events.forEach((event) => {
            // Creating new div for e.a event 
            const eventDiv = document.createElement("div");
            eventDiv.className = "event";
            eventDiv.innerHTML = `<strong>Task:</strong> ${event.title} <br> <strong>Time:</strong> ${event.time}`;
            eventsContainer.appendChild(eventDiv);
        });
    });
}

const noteCount = parseInt(localStorage.getItem('noteCount'), 10) || 0;
const notesContainer = document.getElementById("musicnotes-container");
const noteMax = 5;

if (noteCount == 0 || noteCount == 5) {
    notesContainer.style.display = "none";
    localStorage.setItem('noteCount', 0);
    
}
else {
    notesContainer.style.display = "block";
    for (let i = 0; i < noteCount; i++) {
        console.log("a");
        const noteImg= document.createElement("img");
        noteImg.src = "./Images/MusicNote.png";
        noteImg.className = "note";
        notesContainer.appendChild(noteImg);
    }
}

