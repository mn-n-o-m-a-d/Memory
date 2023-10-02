const pictures = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"];
const field = [4, 1, 2, 0, 3, 5, 1, 0, 3, 4, 2, 5];

let index = 0;
let flippedCards = [];
let canFlip = true;
let matchedPairs = [];

for (let td of document.querySelectorAll("tbody td")) {
    const i = index;
    td.addEventListener("click", function () {
        if (!canFlip || flippedCards.length >= 2 || td === flippedCards[0]) return;

        td.style.backgroundImage = "url(" + pictures[field[i]] + ")";
        td.style.color = "transparent";
        flippedCards.push(td);

        if (flippedCards.length === 2) {
            canFlip = false;
            setTimeout(() => {
                const [firstCard, secondCard] = flippedCards;
                const index1 = i;
                const index2 = Number(secondCard.dataset.index);

                if (field[index1] === field[index2]) {
                    // Cards match
                    matchedPairs.push(field[index1]);
                } else {
                    // Cards do not match, flip them back
                    firstCard.style.backgroundImage = "";
                    secondCard.style.backgroundImage = "";
                    firstCard.style.color = "";
                    secondCard.style.color = "";
                }

                flippedCards = [];
                canFlip = true;

                // Check if all pairs are matched
                if (matchedPairs.length === field.length / 2) {
                    alert("Congratulations! You've matched all pairs.");
                }
            }, 1500); // Adjust the delay time (in milliseconds) as needed
        }
    });

    // Set a custom data attribute to store the index
    td.dataset.index = index;

    index++;
}

// Hide the "Congratulations!" message initially
const overlay = document.querySelector('.overlay');
overlay.classList.add('hidden');
