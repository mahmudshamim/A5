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