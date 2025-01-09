const datesContainer = document.getElementById('dates');
const currentMonth = document.getElementById('currentMonth');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function renderCalendar() {
  datesContainer.innerHTML = "";
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  currentMonth.textContent = `${months[month]} ${year}`;

  for (let i = 0; i < firstDay; i++) {
    datesContainer.innerHTML += `<div class="empty"></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const dateElement = document.createElement('div');
    dateElement.textContent = i;
    datesContainer.appendChild(dateElement);

    // GSAP animation
    gsap.fromTo(dateElement, 
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, delay: i * 0.05 }
    );
  }
}

prevMonthBtn.addEventListener('click', () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

// Initial render
renderCalendar();
