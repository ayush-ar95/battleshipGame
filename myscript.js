//  global variables

let countShip = 0, numberOfClick = 0;

const blockElement = document.querySelector(".blocks");
const resetButton = document.querySelector(".reset-button");
const dialogElement = document.querySelector(".dialog-box");
const dialogButton = document.querySelector(".dialog-button");

//  ---------------------- game function ---------------

const eventHandler = (event) => {
    const imageElement = event.target.querySelector("img");
    imageElement.classList.add("show-image"); // this will show the clicked image block.
    numberOfClick++; // counting number of clicks.
    console.log(numberOfClick);
    if (imageElement.classList.contains("ship-block")) {
        countShip++;  // counting number of clicks on ship image.
        console.log(countShip);
    }
    if (countShip === 5 || numberOfClick >= 8) {
        blockElement.removeEventListener("click", eventHandler); // removing event listener.

        // adding content to dialog box 
        const pElement = dialogElement.querySelector("p");  // selecting the paragraph element inside the dialog box.
        if (countShip === 5) {
            pElement.textContent = "Congratulations! You Won🏆";
            pElement.style.color = "teal";
            dialogElement.style.border = "2px solid teal";
        }
        else {
            pElement.textContent = "You Lose! Try Again 😧";
            pElement.style.color = "FireBrick";
            dialogElement.style.border = "2px solid FireBrick"
        }
        dialogElement.show();
    }
};

blockElement.addEventListener("click", eventHandler);

// ----------------- reset game -------------

const buttonEventHandler = (event) => {
    console.log(event.target);
    // reinitilizing count variables to keep the game on 
    countShip = 0;
    numberOfClick = 0;
    const imgElements = Array.from(document.querySelectorAll("img"));
    console.log(imgElements);
    imgElements.forEach((img) => {
        // removing the show image class from all the images
        if (img.classList.contains("show-image")) {
            img.classList.remove("show-image");
        }
    });
    // adding back event listener which was removed after countShip was 5 or numberOfClick was 8
    blockElement.addEventListener("click", eventHandler);
    dialogElement.close(); // closing the dialog box when reset is clicked.
};

resetButton.addEventListener("click", buttonEventHandler);

// closing the dialog box when dialog button is clicked
dialogButton.addEventListener("click", () => {
    console.log(dialogElement);
    dialogElement.close();
});