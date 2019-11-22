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

// кладемо в змінну currentDate об"єкт поточної дати
// рік, місяць, день місяця, день тижня, година, хвилина і тд
const currentDate = new Date();

// кладемо в змінну currentMonth порядковий номер поточного місяця
// так як в js місяці починаються з 0, то листопад це 10й місяць
const currentMonth = currentDate.getMonth();

// кладемо в змінну currentMonthName назву поточно місяця
// беремо її по індексу з самописного масиву
const currentMonthName = months[currentMonth];

// так як кількість знів у місяці це по суті дата останнього дня місяця
// 1. ми змінюємо поточний місяць на наступний
currentDate.setMonth(currentMonth + 1);
// 2. встановлюємо число місяць в 0, а так як числа 0 в місяці немає
//    js автоматично встановлює останній день попереднього місяця
currentDate.setDate(0);
// 3. поміщаємо в змінну daysCount поточне число місяця,
//    яке рівне кількості днів у місяці
const daysCount = currentDate.getDate();

// щоб отримати день тижня першого чила місяця
// встановлюємо в нашу дату число 1
currentDate.setDate(1);
// тепер в нашій даті встановлено перше чило поточного місяця
// і беремо з неї порядковий номер дня тижня
const weekDay = currentDate.getDay();

// тут вже словами не описати
// треба диватись на результат в браузері
// і усвідомлювати як ми отримали такий результат
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