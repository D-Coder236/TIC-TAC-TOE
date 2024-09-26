let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let boxes = Array.from(box);

let turnO = true; //playerX, playerO

let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((a) => {
    a.addEventListener("click", () => {
        console.log("clicked");
        if (turnO == true){
            a.textContent = "O";
            turnO = false;
        }
        else {
            a.textContent = "X";
            turnO = true;
        }
        a.disabled = true;

        checkWinner();
    })
})

function checkWinner() {
    for (let pos of winningCombos) {
        let pos1 = box[pos[0]].innerText;
        let pos2 = box[pos[1]].innerText;
        let pos3 = box[pos[2]].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            if (pos1 === "X") {
                console.log("Winner is X");
                alert("Winner is X");
                return "X";
            }
            if (pos1 === "O") {
                console.log("Winner is O");
                alert("Winner is O");
                return "O";
            }
        }
    }
    console.log("No Winners, It's a Draw");
    return "Draw";
}

reset.addEventListener("click", () => {
    boxes.forEach((a) => {
        a.textContent = ""; // Correctly setting the text content to an empty string
        a.disabled = false; // Enabling the box
    });
});
