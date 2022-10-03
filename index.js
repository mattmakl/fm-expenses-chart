import data from "./data.json" assert {type: 'json'};

const maxSpend = Math.max(...data.map(day=>day.amount))

data.forEach(day => {
document.querySelector(".chart").innerHTML += `
    <div class="day-container">
        <div class="day-amount">$${day.amount}</div>
        <div class="${day.amount===maxSpend?"day-bar highest":"day-bar"}" style="height:${day.amount/maxSpend*80}%"></div>
        <p class="day-name">${day.day}</p>
    </div>
    `
})


