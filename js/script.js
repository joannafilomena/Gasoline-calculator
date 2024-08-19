const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const distance = document.querySelector(".form__distance");
    const consumption = document.querySelector(".form__consumption");
    const price = document.querySelector(".form__price");
    const result = document.querySelector(".form__result");
    let sum = (consumption.value * (distance.value / 100)) * price.value;
    result.innerText = sum;
});

