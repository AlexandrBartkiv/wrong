const months = [
    'january',
    'fabruary',
    'martch',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

const days = [
    'sunday',
    'mondey',
    'tuesday',
    'wednesday',
    'thirsday',
    'friday',
    'saturday'
]

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentMonthName = months[currentMonth];

currentDate.setMonth(currentMonth + 1);
currentDate.setDate(0);
const daysCount = currentDate.getDate();

currentDate.setDate(1);
const weekDay = currentDate.getDay();

const daysList = []

for(let i = -weekDay + 1; i <= daysCount; i++) {
    if (i <= 0) {
        daysList.push('');
    }
    else {
        daysList.push(i);
    }
}

const weeksList = [
];

for(let i = 0; i < daysList.length; i++) {
    const arr = weeksList[weeksList.length - 1];
    if (arr && arr.length < 7) {
        arr.push(daysList[i]);
    }
    else {
        weeksList.push([
            daysList[i]
        ])
    }
}

let calendarTable = `
    <table>
        <thead>
            <tr>
                ${
                    days.map(day => `<th>${day}</th>`).join('')
                }
            </tr>
        </thead>
        <tbody>
            ${
                weeksList.map(row => `
                    <tr>
                        ${row.map(char =>`<td>${char}</td>`).join('')}
                    </tr>
                `).join('')
            }
        </tbody>
    </table>
`;

document.querySelector('#app').innerHTML = calendarTable;