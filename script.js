// For heart count 

let heartcounter = document.querySelector("#heartCount");
let heartCount = 0;

let HearBtn = document.querySelectorAll(".heartIcon"); 

HearBtn.forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    heartcounter.textContent = heartCount; 
    console.log("Heart Added! Total Hearts:", heartCount);
  });
});

//  Call Buttons 


let coinEl = document.querySelector("#coinCount"); 
let coin = 100; 
let historyList = document.getElementById("historyList");
let clearBtn = document.getElementById("clearHistory");

let callBtns = document.querySelectorAll(".callBtn");

callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let serviceName = btn.getAttribute("data-name");
    let serviceNumber = btn.getAttribute("data-number");

    if (coin < 20) {
      alert("You have not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    coin -= 20;
    coinEl.textContent = coin;

    alert(`Calling ${serviceName} (${serviceNumber})...`);

    let now = new Date();
    let time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    let historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg";
    historyItem.innerHTML = `
      <div>
        <p class="font-semibold">${serviceName}</p>
        <p class="text-sm">${serviceNumber}</p>
      </div>
      <span class="text-sm">${time}</span>
    `;
    historyList.appendChild(historyItem);
  });
});

clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
