const modal = document.getElementById('call-modal');
const modalTitle = document.getElementById('modal-title');
const modalMsg = document.getElementById('modal-msg');
const closeModal = document.getElementById('close-modal');


let pendingName = "";
let pendingNumber ="";



// heart icon
const hearts = document.querySelectorAll('.heart-btn');
const count = document.getElementById('heart-count')

hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        count.textContent = parseInt(count.textContent) + 1;
        heart.classList.toggle('fa-solid')
        heart.classList.toggle('fa-regular')
    });
});

// coin add

let coins = 100
function updateCoin () {
    document.getElementById('coin-box').textContent = coins;
}

const callButtons = document.querySelectorAll('.call-btn')
const historyList = document.getElementById('history-list')

callButtons.forEach(button => {
    button.addEventListener('click', function () {

        const title = this.getAttribute("data-title");
        const name = this.getAttribute("data-name");
        const number = this.getAttribute('data-number')

    if (coins < 20) {
       modalTitle.textContent = "Not Enough Coins"
       modalMsg.textContent = "You need minimum 20 coins to make a call."
       modal.classList.remove("hidden");
       return;
        
    }
    // temp
    pendingName = name;
    pendingNumber = number;

    // open model
     modalTitle.textContent = title;
    modalMsg.textContent = `Calling ${name} at ${number}`;
        modal.classList.remove("hidden");
    
       
    });
});

// close modal
closeModal.addEventListener("click", () => {
    if (pendingName !== "" && pendingNumber !== "") {
        // coin

    coins -= 20;
    updateCoin();

    // history
    const li = document.createElement("li");
    li.className = "p-2 bg-gray-100 rounded";
    li.textContent = `${pendingName} - ${pendingNumber}`;
    historyList.appendChild(li);

    pendingName = "";
    pendingNumber ="";

    }
    modal.classList.add("hidden");
})

 

// clear history

document.getElementById('clear-history').addEventListener('click', () => {
    historyList.innerHTML = "";
});