const copyButtons = document.querySelectorAll(".copy-btn")

const modal = document.getElementById('call-modal');

const modalTitle = document.getElementById('modal-title');
const modalMsg = document.getElementById('modal-msg');
const closeModal = document.getElementById('close-modal');
const copyCount = document.getElementById("copy-count");

let totalCopy = 0;
let pendingTitle = "";
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
// copy btn
copyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btn = e.target.closest(".copy-btn");

        const number = btn.dataset.number || "";
        const title = btn.dataset.title || "";

        navigator.clipboard.writeText(number).then(() => {
            alert(`Copy Done- ${title} (${number})`);

            totalCopy++;
            copyCount.textContent = totalCopy;
        })
        .catch(err => {
            console.error("copy failed:", err);
        });
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

        const now = new Date();
         timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

    if (coins < 20) {
       modalTitle.textContent = "Not Enough Coins"
       modalMsg.textContent = "You need minimum 20 coins to make a call."
       modal.classList.remove("hidden");
       modal.classList.add("flex")
       return;
        
    }
    // temp
    pendingName = name;
    pendingNumber = number;
    pendingTitle = title;

    // open model
     modalTitle.textContent = `${title}`;modalMsg.innerHTML = 
     `Calling ${name} ${number}`;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
       
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
    li.innerHTML = `
    <div class= "flex justify-between">
        <span class="font-bold">${pendingTitle}</span>
        <span class="text-xs text-gray-500">${timeString}</span>
    </div>
    <p class="text-gray-600 text-sm">${pendingNumber}</p>
    `;
    historyList.appendChild(li);

    pendingName = "";
    pendingNumber ="";
    pendingTitle ="";

    }
    modal.classList.add("hidden");
    modal.classList.remove("flex");

});

 

// clear history

document.getElementById('clear-history').addEventListener('click', () => {
    historyList.innerHTML = "";
});