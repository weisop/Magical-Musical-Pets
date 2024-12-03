const monthYear = document.getElementById("month-year");
const daysContainer = document.getElementById("days");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const renderCalendar = (month, year) => {
    const firstDay = new Date(year, month).getDay(); // Sunday-based index
    const offset = (firstDay === 0 ? 6 : firstDay - 1); // Shift to Monday start
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update month and year display
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthYear.textContent = `${monthNames[month]} ${year}`;

    // Clear previous days
    daysContainer.innerHTML = "";

    // Add empty spaces for days before the first day of the month
    for (let i = 0; i < offset; i++) {
        const emptyDiv = document.createElement("div");
        daysContainer.appendChild(emptyDiv);
    }

    // Add days with boxes and numbers
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement("div");
        const dayNumber = document.createElement("span");
        dayNumber.textContent = day;

        // Highlight the current day number
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayNumber.classList.add("current-day");
        }

        dayDiv.appendChild(dayNumber);
        daysContainer.appendChild(dayDiv);
    }
};

// Handle month navigation
prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initial render
renderCalendar(currentMonth, currentYear);

// Get elements for sidebar and hamburger icon
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// Toggle the sidebar (active state) and its expanded size
menuToggle.addEventListener("click", () => {
    // Toggle active state to show/hide the sidebar
    sidebar.classList.toggle("active");
    
    // Toggle expanded state to resize the sidebar
    if (sidebar.classList.contains("active")) {
        sidebar.classList.add("expanded"); // Add expanded size when active
    } else {
        sidebar.classList.remove("expanded"); // Remove expanded size when inactive
    }
});

// Example navigation links (add your own functionality)
document.getElementById("calendar-link").addEventListener("click", () => {
    alert("Navigate to Calendar"); // Replace with actual navigation logic
    sidebar.classList.remove("active");
    sidebar.classList.add("hidden");
});

document.getElementById("pet-customization-link").addEventListener("click", () => {
    alert("Navigate to Pet Customization"); // Replace with actual navigation logic
    sidebar.classList.remove("active");
    sidebar.classList.add("hidden");
});






