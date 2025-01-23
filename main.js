const weight = document.querySelector("#weight");
const hours = document.querySelector("#hours");
const btn = document.querySelector("#btn");
const frist = document.querySelector("#frist");
const secons = document.querySelector("#secons");
const third = document.querySelector("#third");
const forth = document.querySelector("#forth");

btn.onclick = (e) => {
    e.preventDefault();
    const PersonalReqire =
        1.3 * 24 * weight.value + 8.5 * hours.value * weight.value;
    const carbohydrate = ((57 / 100) * PersonalReqire) / 4;
    const fats = ((30 / 100) * PersonalReqire) / 9;
    const protein = ((13 / 100) * PersonalReqire) / 4;
    frist.innerHTML = Math.round(PersonalReqire);
    second.innerHTML = Math.round(carbohydrate);
    third.innerHTML = Math.round(fats);
    forth.innerHTML = Math.round(protein);
};
