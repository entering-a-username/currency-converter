const currencyFirstEl = document.getElementById("currency-first") as HTMLDivElement;
const worthFirstEl = document.getElementById("worth-first") as HTMLInputElement;
const currencySecondEl = document.getElementById("currency-second") as HTMLDivElement;
const worthSecondEl = document.getElementById("worth-second") as HTMLInputElement;
const exchangeRateEl = document.getElementById("exchange-rate") as HTMLParagraphElement;


currencyFirstEl.addEventListener("change", updateRate); // not calling, referencing

currencySecondEl.addEventListener("input", updateRate);

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/578e8a6b79dd6ba377656709/latest/${currencyFirstEl.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        
            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
        })

}