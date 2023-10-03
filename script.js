const pictures = ["pic1.png", "pic2.png", "pic3.png", "pic4.png", "pic5.png", "pic6.png"];
const field = [4, 1, 2, 0, 3, 5, 1, 0, 3, 4, 2, 5];

let flippedCards = [];
let canFlip = true;

document.querySelectorAll("tbody td").forEach((td, index) => {
    td.addEventListener("click", function () {
        if (!canFlip || flippedCards.length >= 2) return;

        const i = index;

        if (!td.classList.contains('flipped')) {
            td.classList.add('flipped');
            td.style.backgroundImage = "url(" + pictures[field[i]] + ")";
            td.style.color = "transparent";

            flippedCards.push({ td, index });

            if (flippedCards.length === 2) {
                canFlip = false;

                setTimeout(() => {
                    const [firstCard, secondCard] = flippedCards;
                    const index1 = firstCard.index;
                    const index2 = secondCard.index;

                    if (field[index1] !== field[index2]) {
                        // Cards do not match, flip them back
                        firstCard.td.classList.remove('flipped');
                        secondCard.td.classList.remove('flipped');
                        firstCard.td.style.backgroundImage = "";
                        secondCard.td.style.backgroundImage = "";
                        firstCard.td.style.color = "";
                        secondCard.td.style.color = "";
                    }

                    flippedCards = [];
                    canFlip = true;
                     // Überprüfen, ob alle Paare übereinstimmen
                     if (document.querySelectorAll(".flipped").length === field.length) {
                        // Alle Karten sind umgedreht, Spiel beendet
                        showCongratulationsMessage();
                    }
                }, 1500); // Adjust the delay time (in milliseconds) as needed
            }
        }
    });
});

    index++;

    function showCongratulationsMessage() {
        alert("Congratulations! You've matched all pairs.");
        const overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden');
        }