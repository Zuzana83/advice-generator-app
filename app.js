const diceBtn = document.getElementById("dice-btn");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");

const API_URL = "https://api.adviceslip.com/advice";

function displayAdvice(content) {
    const {id, advice } = content.slip;

    adviceNum.textContent = id;
    adviceText.textContent = `"${advice}"`;
};

const fetchAdvice = async () => {
    const random = Math.floor(Math.random() * 220);
    // console.log(random);

    const res = await fetch(`${API_URL}/${random}`);
    const data = await res.json();

    // console.log(data);

    displayAdvice(data);
};

diceBtn.addEventListener("click", fetchAdvice);

window.addEventListener("DOMContentLoaded", fetchAdvice);


//METHOD #2
// diceBtn.addEventListener("click", async() => {
//     try {
//         const response = await fetch(API_URL);
//         const data = await response.json();

//         console.log(data);

//         displayAdvice(data);

//     } catch (error) {
//         console.log(error);  
//     }
// })


// METHOD #3
// const getAdvice = async() => {
//     const response = await fetch(API_URL);
//     const data = await response.json();

//     return data;
// }

// const showAdvice = async() => {
//     const advice = await getAdvice();

//     displayAdvice(advice);
// }

// diceBtn.addEventListener("click", showAdvice);
// window.addEventListener("DOMContentloaded", showAdvice);

