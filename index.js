/*
1 meter =  feet
1 liter =  gallon
1 kilogram = 2.204 pound
*/

// Variables
const rates = {
    mf_rate: 3.281,
    lg_rate: 0.264,
    kp_rate: 2.204
}

const units = [
    ["feet", "meters"],
    ["gallons", "liters"],
    ["pounds", "kilos"]
]

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")


let measures = []

// Functions
function generateStr(number, metricUnit, convertion1, imperiaUnit, convertion2) {
    let phrase = `${number} ${metricUnit} = ${convertion1} ${imperiaUnit} | ${number} ${imperiaUnit} = ${convertion2} ${metricUnit}`
    return phrase
}

function convert(number, rate) {
    let metricToImperial = (number * rate).toFixed(3)
    let imperialToMetric = (number / rate).toFixed(3)

    let measures = {
        mToI: `${metricToImperial}`,
        iToM: `${imperialToMetric}`
    }

    return measures
}


// Events
convertBtn.addEventListener("click", function() {
    let inputValue = Number(inputEl.value)
    for (let rate in rates) {
        measures.push(convert(inputValue, rates[rate]))
    }

    for (let i=0; i<3; i++) {
        const metricImperialEl = document.getElementById(`metricImperial${i+1}`)
        metricImperialEl.textContent = generateStr(inputValue, units[i][1], measures[i].mToI, units[i][0], measures[i].iToM)
    }
})

inputEl.addEventListener("click", function() {
    inputEl.value = ''
    measures = []
})