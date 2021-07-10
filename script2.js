function findComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.34) return `batu`;
    if (computerChoice >= 0.34 && computerChoice <= 0.67) return `gunting`;
    return `kertas`;
}

const getGameResult = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) return "DRAW";
    if (playerChoice == "batu")
        return computerChoice == "gunting" ? "PLAYER 1 WIN" : "COM WIN";
    if (playerChoice == "gunting")
        return computerChoice == "batu" ? "COM WIN" : "PLAYER 1 WIN";
    if (playerChoice == "kertas")
        return computerChoice == "gunting" ? "COM WIN" : "PLAYER 1 WIN";
};

const chooseRock = document.querySelector(".batu");
const chooseScissor = document.querySelector(".gunting");
const choosePaper = document.querySelector(".kertas");
const info = document.querySelector(".info");
const computerImage = document.querySelector(".img-komputer");

const playerPictures = document.querySelectorAll("li img");

const shufflePictures = () => {
    const pictures = ["batu", "gunting", "kertas"];
    const startTime = new Date().getTime();
    let i = 0;
    setInterval(function () {
        if (new Date().getTime() - startTime > 1500) {
            clearInterval;
            return;
        }
        computerImage.setAttribute("src", "assets/" + pictures[i++] + ".png");
        if (i == pictures.length) i = 0;
    }, 100);
};

playerPictures.forEach(function (clickedPicture) {
    clickedPicture.addEventListener("click", function () {
        const playerChoice = clickedPicture.className;
        const computerChoice = findComputerChoice();
        const result = getGameResult(playerChoice, computerChoice);

        shufflePictures();

        setTimeout(function () {
            info.innerText = result;
            computerImage.setAttribute("src", `assets/${computerChoice}.png`);
        }, 1500);
        info.innerText = "";
    });
});
