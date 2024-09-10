var currencyFirstEl = document.getElementById("currency-first");
var worthFirstEl = document.getElementById("worth-first");
var currencySecondEl = document.getElementById("currency-second");
var worthSecondEl = document.getElementById("worth-second");
var exchangeRateEl = document.getElementById("exchange-rate");
currencyFirstEl.addEventListener("change", updateRate); // not calling, referencing
currencySecondEl.addEventListener("input", updateRate);
updateRate();
function updateRate() {
    fetch("https://v6.exchangerate-api.com/v6/578e8a6b79dd6ba377656709/latest/".concat(currencyFirstEl.value))
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var rate = data.conversion_rates[currencySecondEl.value];
        exchangeRateEl.innerText = "1 ".concat(currencyFirstEl.value, " = ").concat(rate + " " + currencySecondEl.value);
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}
